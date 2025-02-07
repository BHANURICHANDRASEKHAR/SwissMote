import React, { useState,useEffect } from 'react'
import getToken from './getToken.js';
import {jwtDecode} from 'jwt-decode'
export const UserContext=React.createContext();
export default function Context({children}) {
    const [user, setUser] = useState(null)
    const [UserId, setUserId] = useState(null);
    const [flag,setFlag] = useState(false)
    const [Events_Data,SetEvents_Data] = useState([])
    const [show,SetShow]=useState(false)
    useEffect(()=>{
     async function get()
     {
      const token=getToken();
      if(token){
       const decoded=await jwtDecode(token);
       setUserId(decoded.id);
       setUser(token);
      }
     }
     get();
  },[flag,show])
    return (
      <UserContext.Provider value={{UserId, user, Events_Data,SetEvents_Data, setUser,show,SetShow,flag,setFlag}}>
        {children}
      </UserContext.Provider>
    )
  }
  
