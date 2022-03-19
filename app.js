require("dotenv").config();
const express = require("express");
const app = express();
const { connectDB } = require("./database/config/init");
const port = process.env.PORT || 8080;
console.log(process.env.PORT);
app.get("/", (req, res) => res.send("Hello World!"));
connectDB().then(
  () => {
    app.listen(port, () => console.log(`Server started on port ${port}`));
  },
  (err) => console.log(err)
);
