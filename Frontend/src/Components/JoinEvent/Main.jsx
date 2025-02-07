import React,{useState,useEffect,useContext} from 'react'
import { useParams } from 'react-router-dom';
import { UserContext } from '../Context/Context';
import Get_Data from '../DashBoard/getData';
import LoaderComponent from './Loader'
import { toast_success,toast_fail } from '../alert/alert';
import PostAttendance from './joinEvent'
export default function Main() {
    const { eventId } = useParams();
    const [Loader,SetLoader]=useState(false)
   const {Events_Data,show,UserId,SetShow,SetEvents_Data}=useContext(UserContext);
   useEffect(()=>{
    if(Events_Data.length==0)
    {
        Get_Data(SetLoader,SetEvents_Data)
    }
   },[])
   const [SelectedData,SetSelectedData]=useState(Events_Data[eventId[eventId.length-1]])
    useEffect(() => {
        console.log(UserId)
       if(Events_Data.length!=0)
       {
        if(!UserId)
            {
             toast_fail('Please Login to view this event')
             SetShow(true)
            }
            else{
             if(SelectedData.Attendance.indexOf(UserId)==-1)
             {
                 PostAttendance(SelectedData,SetSelectedData,eventId[eventId.length-1],UserId)
             }
            }
       }
    }, [eventId])
    if(Loader)
    {
        return <LoaderComponent />
    }
  return (
    <div className='container' style={{marginTop:"2.1cm"}}>Main</div>
  )}
