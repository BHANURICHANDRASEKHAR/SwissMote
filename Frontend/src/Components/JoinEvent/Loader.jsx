import React from 'react'
import {Card} from 'antd'
export default function Loader() {
  return (
    <div className='container'  style={{marginTop:'2.1cm'}}>
    <div className="row">
    {[...Array(1)].map((_, index) => (
        <div className="col-md-3 mt-4" key={index}>
            <Card loading={true} style={{ minWidth: 1000, minHeight:175 }} />
        </div>
    ))}
</div>
</div>
  )
}
