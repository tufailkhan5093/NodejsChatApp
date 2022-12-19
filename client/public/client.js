// const socket = io('http://localhost:3001');

// const form = document.getElementById("send-container");
// const usernameform = document.getElementById("username-form");
// const message = document.getElementById("message");
// const username = document.getElementById("username");
// const container = document.querySelector(".container");
// const formDiv = document.querySelector(".send");
// const usernameDiv = document.querySelector(".username");
// // const name = prompt("Enter User Name");
// var audio = new Audio("ting.mp3");

// const appent = (message, position) => {
//     const messageElement = document.createElement('div');
//     messageElement.innerText = message;
//     messageElement.classList.add(position);
//     container.append(messageElement);
//     if(position == "left")
//     {
//         audio.play();
//     }
//     console.log(position)
    
        
    
    
// }

// socket.emit('new-user-joined', "New Value");

// usernameform.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const value = username.value;
//     socket.emit('new-user-joined', value);
//     container.style.display = "block";
//     formDiv.style.display = "block";
//     usernameDiv.style.display = "none";

// })
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const value = message.value;
//     appent(`You : ${value}`, "right");
//     console.log(value);
//     socket.emit("send", value);
//     message.value = "";
// })



// socket.on('user-joined', name => {
//     appent(`${name} joined the chat`, "left");
// })

// socket.on('receive', data => {

//     console.log(data);
//     appent(`${data.name} : ${data.message}`, "left");
// })
// socket.on('left', name => {

//     appent(`${name} has left the chat`, "left");
// })

