import React from 'react'
import HomePage_img from '../../assets/Hello.gif'
export default function Home() {
  return (
    <div className='container' style={{marginTop:'1.2cm'}} >
    <div className='row'>
    <div className='col'>
    <img src={HomePage_img}  style={{height:'80vh',width:'100%',objectFit:'contain'}}/>
    
    </div>
    </div>
    </div>
  )
}