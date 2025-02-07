import dayjs from "dayjs";
import React, { useContext } from "react";
import { UserContext } from "../Context/Context";
import { NavLink } from "react-router-dom";
export default function EventCard({ event,EditFun,SetEdit,index }) {
  
  const eventStartDate = dayjs(event.Event_StartDate);
  const eventEndDate = dayjs(event.Event_EndDate); 
  const currentDate = dayjs();
  const {UserId} =useContext(UserContext)
  let status = "UpComing"; 

  if (event.status === "Cancelled") {
    status = "Cancelled";
  } else if (event.status === "Completed") {
    status = "Completed";
  } else if (eventStartDate.isBefore(currentDate, "minute") && eventEndDate.isAfter(currentDate, "minute")) {
    status = "OnGoing";
  } else if (eventStartDate.isAfter(currentDate, "minute")) {
    status = "UpComing";
  }
 
  return (
    <div className="col-md-3" data-aos='fade-up' data-aos-duration='1200'>
      <div className="card" style={{ width: "100%",maxHeight:'370px'
       }}>
        <img src={event.Event_Image} className="card-img-top" alt={event.Event_Name} />
        <div className="card-body">
          <h5 className="card-title">{event.Event_Name}</h5>
          <p className="card-text">{event.Event_Description}</p>
          <p className="text-muted">Starts: {eventStartDate.format("DD-MMM-YYYY")}</p>
          {
             (  status == "OnGoing" ) ? (
              <React.Fragment>
              <p className="text-muted">
                
                Remaining: {eventEndDate.diff(currentDate, "days")} days, {eventEndDate.diff(currentDate, "hours") % 24} hours
              </p>
              <p className='mt-3'><b>Attendance:{event.Attendance.length}</b></p>

              <NavLink to={`/dashboard/${event._id+index}`} className="rounded-pill btn btn-primary w-100 text-white">Join</NavLink>
              </React.Fragment>
            ):  ( <button  className={`rounded rounded-pill text-white  ${status === "OnGoing" ? "bg-success" : status === "Completed" ? "bg-secondary" : status === "Cancelled" ? "bg-danger" : "bg-primary"} w-100 p-2`}>
                {status}
              </button>)
          }
        
          {
              EditFun!=undefined && <button className="rounded-pill w-100 btn btn-primary mt-2" onClick={()=>{
              SetEdit(true)
              EditFun(event)}}>Edit</button>
          }
        </div>
      </div>
    </div>
  );
}
