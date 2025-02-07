import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar'
import EventsManageMent from '../Event-ManageMent/Main'
import Dashboard from '../DashBoard/Main'
import JoinComponent from '../JoinEvent/Main'
import Home from '../Home/Main';
export default function Router() {
  return (
    <React.Fragment>
     <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/dashboard' element={<Dashboard/>}>
       
      </Route>
      <Route path='/dashboard/:eventId' element={<JoinComponent/>}/>  
      <Route path='/event-management' element={<EventsManageMent/>}/> 
      </Routes>
    </React.Fragment>
  );
}
