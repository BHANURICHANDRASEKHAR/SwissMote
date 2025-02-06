import React from 'react'
import NoDataImage from '../assets/noData.gif'
export default function NoData() {
  return (
    <div className='row'>
   <img src={NoDataImage} alt='No Data' style={{height:'500px',width:'100%',objectFit:"contain"}}
    />
    </div>
  )
}
