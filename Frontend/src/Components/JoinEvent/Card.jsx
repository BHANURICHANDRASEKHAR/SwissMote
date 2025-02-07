import React from 'react'

export default function Card({event}) {
  return (
    <div className="card p-4" style={{ width: "100%",maxHeight:'400%'}}>
    <h5 className="card-title text-center">{event.Event_Name}</h5>
     <img src={event.Event_Image} className="card-img-top" alt={event.Event_Name} />
     <div className="card-body">
       <p className="card-text">Description:&ensp;{event.Event_Description}</p>
       <p className="text-muted">Starts: {event.Event_StartDate}</p>
       <p className='text-muted'>Ended:{event.Event_EndDate}</p>
       <p className='mt-3'><b>Attendance:{event.Attendance.length}</b></p>
      </div>
    </div>

  )
}
