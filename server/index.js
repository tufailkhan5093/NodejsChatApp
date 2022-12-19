const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./models');
const userRoute = require("./routes/user")
app.use(cors());
const io = require('socket.io')(3001);

const users = {};
io.on("connection", (socket) => {
    socket.on('new-user-joined',(name)=>{
        console.log("Emit ho gya");
        users[socket.id] = name;
        socket.broadcast.emit('user-joined',name);
    })

    socket.on('send',message=>{
        
        socket.broadcast.emit('receive',{message:message,name:users[socket.id]});
    })
    socket.on('sendMessage',data=>{
        console.log(data);
        socket.broadcast.emit('userjoined',data);
        // socket.broadcast.emit('receive',{message:message,name:users[socket.id]});
    })
    socket.on('disconnect',message=>{
        
        socket.broadcast.emit('left',users[socket.id]);
        delete users[socket.id];
    })
})
app.use(express.json());
app.use(cors());
app.use('/users', userRoute);
app. use('/public', express.static('./public'));

// Initializing Server along with creating all the tables that exist in the models folder
db.sequelize.sync().then(()=>{
    app.listen(3000, ()=> {console.log(`Starting the server at port 8000 ...`)});
});