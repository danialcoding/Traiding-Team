const express = require("express");
const {Server} = require("socket.io");
const app = express();
const http = require("http");
const cors = require("cors");
//routes
const usersRouter = require('./routes/users');
const teamsRouter = require('./routes/teams');
const cryptoRouter = require('./routes/crypto');
const forexRouter = require('./routes/forex');
const newsRouter = require('./routes/news');
const analysisRouter = require('./routes/analysis');
const group = require('./routes/group');
const privateChat = require('./routes/privateChat');
//const homeRouter = require('./routes/home');

const server = http.createServer(app);

app.use(cors());
app.use(express.json());
app.use('/users',usersRouter);
app.use('/teams',teamsRouter);
app.use('/crypto',cryptoRouter);
app.use('/forex',forexRouter);
app.use('/news',newsRouter);
app.use('/analysis',analysisRouter);
app.use('/group',group);
app.use('/privateChat',privateChat);
//app.use('/',homeRouter)


// const io = new Server(server,{
//   cors: {
//     origin: "http://localhost:3000",
//     methods: ["GET","POST"],
//   },
// });

// io.on("connection",(socket)=>{
//   console.log('new user connected');


//   socket.on("send_msg",(data) => {
//     socket.broadcast.emit("receive_msg",data)
//   });

//   socket.on("disconnect",()=>{
//     console.log('user disconnected');
//   })
// });

server.listen(8080, () => {
  console.log('Server is listen on port 8080!');
});