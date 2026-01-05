require('dotenv').config()
const express = require("express");
const { dbConfig } = require('./config/db.config');
const app = express();
const port = process.env.PORT;
dbConfig()


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`server is running port number is ${port}`);
});
