import React from 'react'

export default function Input({lable,handler,value,type,placeholder,name}) {
  return (
    <div className="f-group mt-3orm">
    <label>{lable} &ensp;<b className='text-danger'>*</b></label>
    <input
      type={type}
      name={name}
      className="form-control mt-1"
      placeholder={placeholder}
      value={value}
      onChange={handler}
    />
  </div>
  )
}
