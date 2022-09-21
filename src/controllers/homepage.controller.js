let that = (module.exports = {
  homepage: (req, res, next) => {
    res.sendFile(__basename + "/index.html");
  }
});
