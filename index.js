const express = require("express")
const http = require("http")
const { Server } = require("socket.io")
const cors = require("cors")

const app = express()

app.use(cors())

const server = http.createServer(app)

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173"
  }
})

io.on("connection", (socket) => {
  console.log("Client Connected:", socket.id)

  let currentRoom = null

  socket.on("join-room", (room) => {
    if (currentRoom) {
      socket.leave(currentRoom)
    }

    socket.join(room)
    currentRoom = room
  })

  socket.on("message", (data) => {
    io.to(data.room).emit("message", data)
  })

  socket.on("typing", (data) => {
    socket.to(data.room).emit("typing", data)
  })

  socket.on("disconnect", () => {
    console.log("Disconnected")
  })
})

server.listen(5000, () => {
  console.log("Server Running")
})