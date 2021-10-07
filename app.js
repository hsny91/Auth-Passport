// MONGODB PASSPORT
// Istanbul1991-
const express = require('express')
var exphbs  = require('express-handlebars');
const app = express();
const PORT = 3000 || process.env.PORT;
const mongoose = require("./db/mongoose");
const userRouter = require('./router/user') 

//Template Engine Middleware

app.engine('handlebars', exphbs({defaultLayout:'mainLayout'}));
app.set('view engine', 'handlebars');

// Router middleware
app.use(userRouter);


app.get('/', (req, res, next) => {
  res.send('Home Page !')
})

app.use((req,res,next)=>{
  res.send('404 Not Found')
})

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})
