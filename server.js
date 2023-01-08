const express = require("express")
const socket = require("socket.io")
const app = express()
const cors = require("cors")

app.use(cors())

const server = app.listen(3000)
app.use(express.static('public'))

const io = socket(server)

//io.origins(['https://nihad-rusanov.github.io'])

io.on("connection",(socket) => {
    console.log(socket.id)
    socket.on("chat",data => {
        io.sockets.emit("chat",data)
    })
})

