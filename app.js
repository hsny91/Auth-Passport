// MONGODB PASSPORT
// Istanbul1991-
const express = require('express')
var exphbs  = require('express-handlebars');
var bodyParser = require('body-parser')
const app = express();
const PORT = 3000 || process.env.PORT;
const userRouter = require('./routes/user');

// MongoDb Connection
const mongoose = require("./db/mongoose");

//Template Engine Middleware

app.engine('handlebars', exphbs({defaultLayout:'mainLayout'}));
app.set('view engine', 'handlebars');

// Body-parser middleware
app.use(bodyParser.urlencoded({extended:false}))

// Router middleware
app.use(userRouter);


app.get('/', (req, res, next) => {
  res.render('pages/index')
})

app.use((req,res,next)=>{
  res.render('static/404')
})

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})
