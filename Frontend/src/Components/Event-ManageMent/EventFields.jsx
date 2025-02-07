import React,{useState,useEffect, useContext} from 'react'
import Input from '../Login/Input';
import { UserContext } from '../Context/Context';
import Submit,{Update} from './SubmitEvent'
export const data={Event_Name:'',
    Event_Description:'',
    Event_StartDate:'',
    Event_EndDate:'',
    Event_Image:''
}
 function EventFields({EventData,SetEventData,Edit,SetEdit}) {
 
    const [loading, setLoading] = useState(false);
   
    const {user,Events_Data,SetEvents_Data} = useContext(UserContext)
    function onHandler(e)
    {
        SetEventData({
            ...EventData,[e.target.name]:e.target.value
        })
    }
    function ImageHandler(e){
        SetEventData({
            ...EventData,Event_Image:e.target.files[0]
        })
    }
    function submitEvent(e){
      e.preventDefault();
      console.log('Submit event',Edit)
        if(Edit)
        {
        
          Update(setLoading,SetEvents_Data,Events_Data,EventData,SetEventData,SetEdit)
        }
        else{
          Submit(setLoading,SetEvents_Data,EventData,SetEventData,user)

        }
    }
  return (
    <div className="Auth-form-container mt-lg-5">
    <div className="Auth-form-content">
      <h3 className="Auth-form-title">Register a Event</h3>
      <Input lable='Name Of the Event' placeholder='Enter Event Name' type='text' handler={onHandler} value={EventData.Event_Name} name='Event_Name'/>
      <Input lable='Description of the Event' placeholder='Enter a small Desc' type='text' handler={onHandler} value={EventData.Event_Description} name='Event_Description'/>
      <div className='form-group mt-2'>
  <label>Start Date of Event &ensp;<b className='text-danger'>*</b></label>
  <input
    type="datetime-local"
    name="Event_StartDate"
    value={EventData.Event_StartDate}
    min={new Date().toISOString().slice(0, 16)} 
    onChange={(e) =>
      {SetEventData({
        ...EventData,
        [e.target.name]: e.target.value, 
      })
      console.log(e.target.value)}
    }
    className="w-100 h-25 form-control"
  />  
</div>  

<div className='form-group mt-2'>
  <label>End Date of Event &ensp;<b className='text-danger'>*</b></label>
  <input
    type="datetime-local"
    name="Event_EndDate"
    value={EventData.Event_EndDate}
    min={EventData.Event_StartDate ? EventData.Event_StartDate.slice(0, 16) : new Date().toISOString().slice(0, 16)} 
    onChange={(e) =>
      SetEventData({
        ...EventData,
        Event_EndDate: e.target.value, 
      })
    }
    className="w-100 h-25 form-control"
  />  
</div>

      <div className='form-group mt-2'>
      <label>Upload a Event Banner &ensp;<b className='text-danger'>*</b></label>
      <input
      type="file"
      accept='.jpg, .png, .jpeg, .gif'
      onChange={ImageHandler}
      className="w-100 h-25 form-control"
    />  
      </div>  
      <div className="d-grid gap-2 mt-3">
        <button type="submit" className="btn btn-primary" disabled={loading} onClick={submitEvent}>
        {loading ? '...Loading' : (Edit ? "Update":'Submit')}
        </button>
      </div>
    </div>
  
</div>
  )
}
export default React.memo(EventFields)
{/** <Input lable='Confirm Password' placeholder='Password' type='password' handler={onHandler} value={data.confirmPassword} name='confirmPassword'/>
      <div className="d-grid gap-2 mt-3">
        <button type="submit" className="btn btn-primary" disabled={loading} onClick={()=>signup(data,setloading,changeAuthMode,SetShow)}>
        {loading ? '...Loading' : 'Submit'}
        </button>
      </div> */}