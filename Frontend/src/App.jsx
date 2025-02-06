import React,{useEffect} from 'react'
import Modal from './Components/Login/Model'
import { Toaster } from 'react-hot-toast'
import Aos from 'aos'
import 'aos/dist/aos.css';
import Router from './Components/Navbar/Router'
export default function App() {
  useEffect(()=>{
    Aos.init()
  },[])
  return (
    <React.Fragment><Router/>
   <Modal/>
   <Toaster/>
    </React.Fragment>
  )
}
export const ApiLink='http://localhost:4000'
// import React from "react";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import { useState } from "react";
// import { io } from "socket.io-client";
// import 'bootstrap/dist/css/bootstrap.min.css';

// const socket = io("http://localhost:5000");

// const events = [
//   { id: 1, name: "Tech Meetup", description: "A gathering of tech enthusiasts", attendees: 5 },
//   { id: 2, name: "Startup Pitch", description: "Pitch your startup idea", attendees: 12 }
// ];

// const Dashboard = () => (
//   <div className="container mt-4">
//     <h1 className="mb-4">Upcoming Events</h1>
//     <div className="row">
//       {events.map(event => (
//         <div className="col-md-6 mb-3" key={event.id}>
//           <div className="card">
//             <div className="card-body">
//               <h5 className="card-title">{event.name}</h5>
//               <p className="card-text">{event.description}</p>
//               <p className="text-muted">Attendees: {event.attendees}</p>
//               <Link to={`/event/${event.id}`} className="btn btn-primary">View Details</Link>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// );

// const EventDetails = ({ eventId }) => {
//   const event = events.find(e => e.id === parseInt(eventId));
//   const [attendeeCount, setAttendeeCount] = useState(event?.attendees || 0);

//   const joinEvent = () => {
//     socket.emit("join_event", { eventId, userId: "123" });
//     setAttendeeCount(attendeeCount + 1);
//   };

//   return (
//     <div className="container mt-4">
//       <h1>{event?.name}</h1>
//       <p>{event?.description}</p>
//       <p className="text-muted">Attendees: {attendeeCount}</p>
//       <button className="btn btn-success" onClick={joinEvent}>Join Event</button>
//     </div>
//   );
// };

// const CreateEvent = () => (
//   <div className="container mt-4">
//     <h1>Create Event</h1>
//     <div className="mb-3">
//       <input type="text" className="form-control" placeholder="Event Name" />
//     </div>
//     <div className="mb-3">
//       <input type="text" className="form-control" placeholder="Description" />
//     </div>
//     <div className="mb-3">
//       <input type="date" className="form-control" />
//     </div>
//     <button className="btn btn-primary">Create Event</button>
//   </div>
// );

// const App = () => (
  
//    <React.Fragment>
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <div className="container">
//         <Link to="/" className="navbar-brand">Event Manager</Link>
//         <Link to="/create" className="btn btn-outline-primary">Create Event</Link>
//       </div>
//     </nav>
//     <Routes>
//       <Route path="/" element={<Dashboard />} />
//       <Route path="/event/:eventId" element={<EventDetails />} />
//       <Route path="/create" element={<CreateEvent />} />
//     </Routes></React.Fragment>

// );

// export default App;
