require('dotenv').config()
const express = require("express");
const { dbConfig } = require('./config/db.config');
const _ = require('./bkroute');
const { globalErrorHendleing } = require('./utils/globalErrorHendleing');
const app = express();
const port = process.env.PORT;
dbConfig()
app.use(express.json())

// locathost:5100/api/v1/
app.use(process.env.BASE_ROUTER, _)

app.use(globalErrorHendleing)

app.listen(port, () => {
  console.log(`server is running and port number is ${port}`);
});
