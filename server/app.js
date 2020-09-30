const express = require("express");
const app = express();
const PORT = 5000;
const mongoose = require("mongoose");
require("dotenv/config");
require("./models/user");

app.use(express.json());
app.use("/", require("./routs/auth"));

mongoose.connect(process.env.MONGOURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("connected to DataBase..");
});

mongoose.connection.on("error", (err) => {
  console.log("error found" + err);
});

app.listen(PORT, () => {
  console.log("server is running on port no." + PORT);
});
