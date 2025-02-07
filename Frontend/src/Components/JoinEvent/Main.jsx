import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../Context/Context';
import Get_Data from '../DashBoard/getData';
import LoaderComponent from './Loader';
import { toast_success, toast_fail } from '../alert/alert';
import { io } from 'socket.io-client';
import { useNavigate } from 'react-router-dom';
import Card from './Card'
const socket = io('http://localhost:4000'); 
export default function Main() {
    const { eventId } = useParams();
    const [Loader, SetLoader] = useState(false);
    const {user, Events_Data, show, UserId, SetShow, SetEvents_Data } = useContext(UserContext);
    const [SelectedData, SetSelectedData] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        if (Events_Data.length === 0) {
            Get_Data(SetLoader, SetEvents_Data);
        }
    }, []);
    
    useEffect(() => {
        if (Events_Data.length !== 0) {
            const eventIndex = eventId[eventId.length - 1];
            SetSelectedData(Events_Data[eventIndex]);
        }
    }, [eventId, Events_Data]);
    useEffect(() => {
        if (!UserId && Loader) {
            toast_fail('Please Login to view this event');
            navigate('/dashboard');
            return;
        }
        const actualEventId = eventId.slice(0, -1);  

        socket.emit('join_event', { eventId:actualEventId, userId: UserId });
      
        const handleUserJoined = ({ userId, updatedEvent }) => {
            if (userId === UserId) {
                toast_success('You have joined the event!');
                
            } 
            // else {
            //     toast_success(`${userId} has joined the event!`)
                
            // }
            SetSelectedData(updatedEvent)

        };

        socket.on('user_joined',handleUserJoined);

        return () => {
            socket.off('user_joined', handleUserJoined);
        };
    }, [UserId]);


    if (Loader) {
        return <LoaderComponent />;
    }

    return (
        <div className='container' style={{ marginTop: '2.1cm' }}>
            <div className='row'>
            <div className='col-md-12'>
            {
                SelectedData &&<Card event={SelectedData}/>
            }
            </div>
            </div>
        </div>
    );
}
