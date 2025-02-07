import React, { useState, useEffect, useContext } from 'react';
import LoaderComponent from '../Loader';
import Get_Data from './getData';
import { UserContext } from '../Context/Context';
import EventCard from './EventCard';
import Filters from './Filters';
import NoData from '../NoData';
export default function Main() {
    const [Loader, SetLoader] = useState(false);
    const { Events_Data, SetEvents_Data } = useContext(UserContext);
    const [OriginalData, setOriginalData] = useState([]);
    
    useEffect(() => {
        if (Events_Data.length === 0) {
            Get_Data(SetLoader, SetEvents_Data);
        }
    }, []);

    useEffect(() => {
        if (OriginalData.length === 0 && Events_Data.length > 0) {
            setOriginalData(Events_Data);
        }
    }, [Events_Data]);

    if (Loader) {
        return <LoaderComponent />;
    }

    return (
        <div className='container' style={{ marginTop: '2.1cm' }}>
            <Filters setFilteredData={SetEvents_Data} OriginalData={OriginalData} />
            <div className='row'>
                {Events_Data.map((event, i) => (
                    
                    <EventCard key={i} index={i} event={event} />
                ))}
                {Events_Data.length === 0 && <NoData />}
            </div>
        </div>
    );
}
