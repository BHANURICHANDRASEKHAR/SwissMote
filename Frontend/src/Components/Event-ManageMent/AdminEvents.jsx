import React,{ useContext, useState,useEffect } from 'react'
import { UserContext } from '../Context/Context'
import Get_Data from '../DashBoard/getData';
import NoData from '../NoData';
import EventCard from '../DashBoard/EventCard'
import LoaderComponent from '../Loader';
export default function AdminEvents() {
    const [Loader, SetLoader] = useState(false);
    const { Events_Data, SetEvents_Data } = useContext(UserContext);
    useEffect(() => {
     if(Events_Data.length==0)
     {
      Get_Data(SetLoader,SetEvents_Data)
     }
    },[])
    if(Loader)
    {
        return <LoaderComponent />
    }
  return (
    <div className='row'>
    <h4 className='mt-3 text-center' style={{fontFamily:'cursive'}}>Admin Events</h4>
                    {Events_Data.map((event, i) => (
                        <React.Fragment>
                        <EventCard key={i} event={event} />
                        </React.Fragment>
                    ))}
                    {Events_Data.length === 0 && <NoData />}
    </div>
  )
}
