import axios from "axios";
import { toast_fail, toast_success } from "../alert/alert";
import { ApiLink } from "../../App";
import {data} from './EventFields'
export default async function Submit(SetLoader, SetEventsData, Data,SetData, user) {
  if (!user) {
    toast_fail("Please login to add an event");
    return false;
  }

  if (!validate(Data)) return;

  try {
    SetLoader(true);

    const ImageLink = await UploadImage(Data);
    if (!ImageLink) {
      toast_fail("Image upload failed");
      return;
    }

    const eventData = {
      ...Data,
      Event_Image: ImageLink,
    };

    const response = await axios.post(`${ApiLink}/event/add`, eventData, {
      headers: {
        "user-token": user,
      },
    });

    if (response.data.status) {
      toast_success("Event added successfully");
      SetEventsData((prev) => [...prev, response.data.data]);
      SetData(data)
    }
  } catch (error) {
    toast_fail("Failed to add event");
  } finally {
    SetLoader(false);
  }
}

function validate(data) {
  console.log("Validating data",data)
  if (
    !data.Event_Name.trim() ||
    !data.Event_Description.trim() ||
    !data.Event_StartDate.trim() ||
    !data.Event_EndDate.trim() ||
    !data.Event_Image
  ) {
    toast_fail("All fields are required");
    return false;
  }
  return true;
}

export async function UploadImage(data) {
    console.log("Uploading image")
  if (!data.Event_Image) {
    console.error("No image file provided");
    return null;
  }

  const formData = new FormData();
  formData.append("file", data.Event_Image);
  formData.append("upload_preset", "chandu_tars");
  formData.append("cloud_name", "dbz5isrvx");

  try {
    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/dbz5isrvx/image/upload",
      formData
    );

    return res.data.secure_url;
  } catch (err) {
    console.error("Upload error:", err);
    return null;
  }
}
export async  function Update(SetLoader,SetEvents_Data,Events_Data,Data,SetEvent,SetEdit) {
  console.log("Updating Event",Data)
 
 SetLoader(true)
 try{
  const res=await axios.post(`${ApiLink}/event/update`,Data)
  if(res.data.status)
  {
    toast_success("Event updated successfully")
      const index=Events_Data.findIndex(item=>item._id===Data._id)
      Events_Data[index]=Data
      SetEvents_Data([...Events_Data])
      SetEvent(data)
      SetEdit(false)
  }
  
 }
 catch(err){
  console.error("Error updating",err);
  toast_fail("Failed todd update event",err.message)
}
 finally{
  SetLoader(false)
 }
}