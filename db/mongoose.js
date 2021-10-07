var mongoose = require("mongoose");


mongoose.connect(
  "mongodb+srv://husniye:sakmak4326@cluster0.nviij.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  (error) => {
    if (!error) {
      console.log("connected to mongo db");
    }
  }
);