import dayjs from "dayjs";
import { useContext } from "react";
import { UserContext } from "../Context/Context";
export default function EventCard({ event }) {
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
  console.log(status)
  return (
    <div className="col-md-3" data-aos='fade-up' data-aos-duration='1200'>
      <div className="card" style={{ width: "100%" }}>
        <img src={event.Event_Image} className="card-img-top" alt={event.Event_Name} />
        <div className="card-body">
          <h5 className="card-title">{event.Event_Name}</h5>
          <p className="card-text">{event.Event_Description}</p>
          <p className="text-muted">Starts: {eventStartDate.format("DD-MMM-YYYY  HH:MM")}</p>
          {
            status == "OnGoing" && (
              <p className="text-muted">
                Remaining: {eventEndDate.diff(currentDate, "hours")} hours
              </p>
            )
          }
          {
            (status=="OnGoing" &&UserId!==event.UserId) ? <button className="rounded rounded-pill btn btn-primary">Join</button>
            : ( <button  className={`rounded rounded-pill text-white  ${status === "OnGoing" ? "bg-success" : status === "Completed" ? "bg-secondary" : status === "Cancelled" ? "bg-danger" : "bg-primary"} w-100 p-2`}>
                {status}
              </button>)
          }
         
        </div>
      </div>
    </div>
  );
}
