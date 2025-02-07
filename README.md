# Event Management Platform - My Assignment

This project is an **Event Management Platform** that I built as part of an assignment. The goal was to create a platform where users can create and manage events, and view other events in a user-friendly way. The project includes features like user authentication, event creation, real-time updates, and more. Below is an overview of the work I did to complete this assignment.

## Project Overview

The Event Management Platform allows users to:
- Register and log in to their accounts
- Create new events with detailed information
- View a list of upcoming and past events
- See real-time attendee updates for each event
- Enjoy a responsive, mobile-friendly interface

## Features Built

### Frontend
- **User Authentication**: 
  - I implemented secure login and registration using JWT tokens.
  - There’s also an option for "Guest Login" that gives limited access to features.
- **Image uploading**:
  - i have used cloudinary Platform to Store Event Images
      
- **Event Dashboard**:
  - Users can view upcoming and past events. 
  - I added filters to help users sort events by categories and dates.

- **Event Creation**:
  - I built a form where users can enter event details, including event name, description, date/time, etc.
  
- **Real-Time Attendee List**:
  - i have use **Socket.IO** for real time.

- **Responsive Design**:
  - The platform is designed to work smoothly on desktops, tablets, and smartphones.

### Backend
- **Authentication API**: 
  - I used **JWT** for secure authentication and token management.
  
- **Event Management API**:
  - I created CRUD (Create, Read, Update, Delete) operations for managing events. 
  - Event creators can edit  their events, while other users can only view them.
  
- **Real-Time Updates**:
  - I integrated **Socket.IO** to provide real-time attendee count and event updates.

- **Database**:
  - I used **MongoDB Atlas** to store user and event data in a scalable, cloud-based database.

## Technologies Used

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Authentication**: JWT
- **Real-Time Updates**: Socket.IO
- **Database**: MongoDB Atlas
- **Deployment**: Netlify (Frontend), Render (Backend)

## Live Links

- **Frontend**: [https://swissmote-assignment.netlify.app]
- **Backend**: [https://swissmote-f3u7.onrender.com]

## How I Built It

- I started by setting up the **frontend** using **React.js**, creating reusable components for user login, event dashboards, and event creation.
- For the **backend**, I used **Node.js** and **Express.js** to build the API. This included setting up authentication routes, event management, and WebSocket connections for real-time updates.
- For the database, I opted for **MongoDB Atlas** to store user and event information securely.
- I deployed the frontend to **Vercel** and the backend to **Render** to make the platform publicly accessible.



## Conclusion

I'm really happy with how the project turned out. It gave me a better understanding of building full-stack applications.
Feel free to check out the code and let me know if you have any questions or feedback!

## Test Credentials

 here are the some test credentials:

- **User 1**:
  - Email: `test@gmail.com`
  - Password: `12345678`
  
- **User 2**:
  - Email: `test1@gmail.com`
  - Password:`12345678`
  


