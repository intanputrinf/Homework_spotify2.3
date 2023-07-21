const express = require("express");

// Routes
const playlistRoute = require("./routes/playlist.route");

const app = express();

app.use(express.json());

app.use("/playlist", playlistRoute);

const listener = app.listen(3069, function () {
  console.log("listening on port " + listener.address().port);
});
