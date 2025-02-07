import axios  from "axios";
import { ApiLink } from "../../App";
import { toast_success,toast_fail } from "../alert/alert";
export default async function PostAttendance(EventData,SetEventsData,index,UserId)
{
    try{
        const res=await axios.post(`${ApiLink}/event/attendance`,{
            event_id:EventData._id,
            user_id:UserId
        });
        if(res.data.status)
        {
            toast_success('Successfully joined event')
            EventData.Attendance.push(UserId)
            SetEventsData(EventData)
        }
    }
    catch(error)
    {
        console.log(error);
    }
 
}