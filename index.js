require('dotenv').config()
const express = require("express");
const { dbConfig } = require('./config/db.config');
const _ = require('./bkroute');
const { globalErrorHendleing } = require('./utils/globalErrorHendleing');
const session = require('express-session')
const {MongoStore} = require('connect-mongo');
const app = express();
const port = process.env.PORT;
dbConfig()
app.use(express.static('uploads'))
app.use(express.json())
 
app.use(session({
  store: MongoStore.create({ mongoUrl: 'mongodb+srv://ecommurce:ecommurce@cluster0.jtiah2x.mongodb.net/ecommurce?appName=Cluster0' }),
  name : 'KingShop',
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))
// locathost:5100/api/v1/
app.use(process.env.BASE_ROUTER, _)

// app.get('/getsession' ,(req , res)=>{
//   console.log(req.session)
//   res.send('get session')
// })

app.use(globalErrorHendleing)

app.listen(port, () => {
  console.log(`server is running and port number is ${port}`);
});
 