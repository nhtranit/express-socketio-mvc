const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const port = process.env.PORT || 3000;

// services
const SocketService = require("./src/services/chat.service");

global.__basename = __dirname;
global._io = io;

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

_io.on("connection", (socket) => {
  SocketService.connection(socket);
});

// middle ware (not use)
// app.use((req, res, next) => {
//   res.io = io;
//   next();
// });

// router modules
app.get("/", (req, res, nex) => {
  res.send("hello everyone");
});

app.use("/chat", require("./src/routes/chat.route"));

app.use("/homepage", require("./src/routes/homepage.route"));

// how to pass io to cotnroller

// use case 1: pass io to res by ue middlewawre

http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});
