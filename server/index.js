require('dotenv').config()
const express = require("express");
const { dbConfig } = require('./config/db.config');
const _ = require('./bkroute');
const app = express();
const port = process.env.PORT;
dbConfig()

// locathost:5100/api/v1/
app.use(process.env.BASE_ROUTER, _)

app.listen(port, () => {
  console.log(`server is running and port number is ${port}`);
});
