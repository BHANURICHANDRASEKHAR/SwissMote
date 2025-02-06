import axios  from "axios";
import { ApiLink } from "../../App";
import { toast_fail } from "../alert/alert";
export default async function  Get_Data(SetLoader,SetData){
 try{
    SetLoader(true);
    const res=await axios.get(`${ApiLink}/event/get`);
    if(res.data.status)
    {  
        SetData(res.data.data)
    }
 }   
 catch(err){
   toast_fail('Error getting the Events')
 }
 finally{
  SetLoader(false);
 }
}