import mongoose from "mongoose";
const EventSchema = new mongoose.Schema({
    UserId:{
     type: mongoose.Schema.Types.ObjectId,
     required: true,
    },
   Event_Name:{
     type: String,
     required: true,
   },
   Event_EndDate:{
     type: Date,
     required: true,
   },
    Event_Description:{
        type: String,
        required: true,
    },
    Event_StartDate:{
        type: Date,
        required: true,
    },
    Event_Image:{
        type: String,
        required: true,
    },

    Attendance:{
        type: [mongoose.Schema.Types.ObjectId],
        required: false,
    },
    status:{
        type: String, 
        enum: ["OnGoing", "Completed", "Cancelled", "UpComing"],
        default: "UpComing",
    }
});

export default mongoose.model('Event', EventSchema);


