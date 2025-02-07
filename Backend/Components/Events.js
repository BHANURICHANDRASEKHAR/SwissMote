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
router.post('/update', async (req, res) => {
  try {
    const updatedEvent = await Event.findByIdAndUpdate(
      req.body._id,  
      req.body,     
      { new: true }  
    );

    if (!updatedEvent) {
      return res.status(404).send({ message: 'Event not found',status: false });
    }
    res.status(201).send({msg:'Event updated',status:true});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.post('/attendance',async(req, res) => {
  const {  event_id,
    user_id} =req.body
  try {
    const updatedEvent = await Event.findByIdAndUpdate(
      event_id,  
      { $push: { Attendance: user_id } },     
      { new: true }  
    );
    if (!updatedEvent) {
      return res.status(404).send({ message: 'Event not found',status: false });
    }
    res.status(201).send({msg:'Attendance updated',status:true}); 
  }
  catch (error) {
    res.status(500).json({ error: error.message });
  }
})
export default router;