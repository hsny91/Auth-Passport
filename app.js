// MONGODB PASSPORT
// Istanbul1991-
const express = require('express')
const app = express();
const PORT = 3000 || process.env.PORT;
const mongoose = require("./db/mongoose");




app.get('/', (req, res, next) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})
