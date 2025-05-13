const express = require('express');
const app = express();
const pgp = require('pg-promise')();
// const CONNECTION_STRING = 'postgres://@newpassword:localhost:5432/newsdb'
const bodyParser = require('body-parser')
const db = pgp({
    host: 'localhost',
    port: 5432,
    database: 'sellyourstuff',
    user: 'postgres',
    password: 'newpassword' 
  });
const session = require('express-session');
  
const userRoutes = require('./routes/userRoutes')

app.use(session({
  secret: 'khkhkhk',
  resave: false,
  saveUninitialized: false
}))

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json())
app.use('/user', userRoutes(db));

app.listen(3000, () => {
    console.log("Server is running...")
})