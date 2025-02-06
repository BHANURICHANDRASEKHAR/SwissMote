import React from 'react'
import Events from '../../assets/Events.gif'
import EventFields from './EventFields'
import AdminEvents from './AdminEvents'
export default function Home() {
  return (
    <div  className='container' style={{marginTop:'2.1cm'}} >
    <div className='row'>
    <div className='col-md-6'>
    <img src={Events}/>
    </div>
    <div className='col-md-6'>
    <EventFields/></div>
    </div>
    <AdminEvents/>
    </div>
  )
}
