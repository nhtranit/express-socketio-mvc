class SocketService {
  // connection
  connection(socket) {
    socket.on("disconnect", () => {
      console.log("user disconnected:", socket.id);
    });

    socket.on("chat message", (msg) => {
      console.log("msg is:::", msg);
      _io.emit("chat message", msg);
    });
  }
}

module.exports = new SocketService();
