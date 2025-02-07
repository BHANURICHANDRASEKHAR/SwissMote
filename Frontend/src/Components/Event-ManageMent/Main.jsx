import React, { useState } from 'react'
import Events from '../../assets/Events.gif'
import EventFields from './EventFields'
import AdminEvents from './AdminEvents'
import { data } from './EventFields'
import { useParams } from 'react-router-dom'
export default function Home() {
  const [Edit,SetEdit]=useState(false);
  const [EventData,SetEventData]=useState(data)
 
  return (
    <div  className='container' style={{marginTop:'2.1cm'}} >
    <div className='row'>
    <div className='col-md-6'>
    <img src={Events}/>
    </div>
    <div className='col-md-6'>
    <EventFields EventData={EventData} SetEventData={SetEventData} SetEdit={SetEdit} Edit={Edit} /></div>
    </div>
    <AdminEvents SetEventData={SetEventData} SetEdit={SetEdit}/>
    </div>
  )
}
