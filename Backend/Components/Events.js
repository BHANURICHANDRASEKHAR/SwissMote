import express from 'express';
import Event from '../Database_Models/Event.js';
const router=express.Router();
import middleware_function from './middleware.js';

router.post('/add',middleware_function,async(req,res)=>{
    const {Event_Name,
    Event_Description,
    Event_EndDate,
    Event_StartDate,
    Event_Image}=req.body;
   try{
    const NewEvent=await Event.create({
        UserId: req.user.id,
        Event_Name,
        Event_EndDate,
        Event_Description,
        Event_StartDate,
        Event_Image:Event_Image
    })
    NewEvent.save();
    res.send({data:NewEvent,status:true})

   }
   catch(error){
    res.send({msg:'Error saving event',status:false})
   }
    
})

router.get('/get',async(req,res)=>{
  try{
   const events=await Event.find()
  
   res.send({data:events,status:true})
  }
  catch(error){
   res.send({msg:'Error getting events',status:false})
  }
})

export default router;