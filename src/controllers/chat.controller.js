// controller will resolve specific route
let that = (module.exports = {
  chatScreen: async (req, res, next) => {
    res.sendFile(__basename + "/index.html");
  },
  getMessage: async (req, res, next) => {
    res.send("Start to get message");
  },
  postMessage: async (req, res, next) => {
    const { msg } = req.query;
    _io.emit("chat message", msg);

    return res.json({ code: 200, msg });
  }
});
