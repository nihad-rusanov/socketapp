const input = document.querySelector("#input")
const button = document.querySelector("#button")
const newMessage = document.querySelector("#newMessage")
const socket = io.connect("http://localhost:3000")

button.addEventListener("click",sendMessage)


function sendMessage(){
    const inputValue = input.value
    console.log(inputValue)
    socket.emit("chat",{
        message:inputValue
    })
    socket.on("chat",(data) => {
        newMessage.innerHTML += `<div>${data.message}</div>`
    })
}