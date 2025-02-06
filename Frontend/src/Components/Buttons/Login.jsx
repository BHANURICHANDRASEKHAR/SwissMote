

import React,{useContext} from 'react'
import {Button} from 'react-bootstrap'
import { UserContext } from '../Context/Context';
import {RemoveToken} from '../Context/getToken'
export default function Login() {
  const {user,show,SetShow,flag,setFlag}=useContext(UserContext);
  const handleOpen=()=>{
    SetShow(!show);
}
const handleLogout=()=>{
  RemoveToken();
  setFlag(!flag);
}
  return (
    <Button variant='primary p- mb-2' onClick={user==null ? handleOpen : handleLogout} >{user==null ? "Login" : "Logout"}</Button>
  )
}

