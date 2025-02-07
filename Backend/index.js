import express from 'express';
import { configDotenv } from 'dotenv';
import cors from 'cors'; 
import http from 'http';
import { Server } from 'socket.io';
import Login from './Components/Login.js';
import Signup from './Components/signup.js';
import Email from './Components/email/SendMail.js';
import UpdatePassword from './Components/UpdatePassword.js';
import DatabaseConnection from './DabaseConnection.js';
import Events from './Components/Events.js';
import Event from './Database_Models/Event.js';

const app = express();
const server = http.createServer(app); // ✅ Attach Express to HTTP server
const io = new Server(server, { cors: { origin: '*' } });

configDotenv();
DatabaseConnection();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: '*',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}));

app.get('/', (req, res) => {
   res.send('hello world');
});

app.use(Login);
app.use(Signup);
app.use(Email);
app.use(UpdatePassword);
app.use('/event', Events);
io.on('connection', (socket) => {

    socket.on('join_event', async ({ eventId, userId }) => {
        try {
            const updatedEvent = await Event.findByIdAndUpdate(
                eventId,
                { $addToSet: { Attendance: userId } },
                { new: true }
            );

            if (!updatedEvent) {
                socket.emit('error', { message: 'Event not found' });
                return;
            }

            socket.broadcast.emit('user_joined', {
                userId,
                updatedEvent
            });

            socket.emit('user_joined', {
                userId,
                updatedEvent
            });

        } catch (error) {
            console.error('Error joining event:', error.message);
            socket.emit('error', { message: 'Database error' });
        }
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected:', socket.id);
    });
});

server.listen(4000, () => {
    console.log('Server is running on port 4000');
});
