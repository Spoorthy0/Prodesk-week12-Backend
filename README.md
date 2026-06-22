# Real-Time Chat Application - Backend

## Overview

This is the backend server for a real-time chat application built using Node.js, Express, and Socket.io.

The server manages:

* Client connections
* Room management
* Real-time message broadcasting
* Typing indicators
* Room-based communication

## Technologies Used

* Node.js
* Express.js
* Socket.io
* CORS

## Installation

```bash
npm install
```

## Run the Server

```bash
node server.js
```

The server will start on:

```txt
http://localhost:5000
```

## Features

### WebSocket Connection

Establishes real-time communication between clients and the server.

### Room Management

Users can join specific chat rooms.

Available rooms:

* General
* Tech Support

When a user switches rooms, they automatically leave the previous room.

### Real-Time Messaging

Messages are broadcast only to users currently connected to the selected room.

### Typing Indicator

Typing events are emitted and shared with other users in the same room.

## Socket Events

### join-room

Used when a user joins or switches a room.

```js
socket.emit("join-room", room)
```

### message

Used to send a chat message.

```js
socket.emit("message", {
  name,
  room,
  text
})
```

### typing

Used to notify other users that a participant is typing.

```js
socket.emit("typing", {
  name,
  room
})
```

## Project Structure

```txt
backend
│
├── server.js
├── package.json
```

