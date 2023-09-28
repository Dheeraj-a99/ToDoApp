const express = require('express');
const path = require('path')
const app = express();
const port = 8000;
const mongoose = require('mongoose');
const index = require('./routers/index')

// app.use(express.static(path.join(__dirname, "js")));
// setting up the view engine 
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// connecting to the database
mongoose.connect('mongodb+srv://Uranium-Batch:aruSjkdGdfhc9MRK@functionup.eel5r.mongodb.net/todoApp?retryWrites=true&w=majority',{
  useNewUrlParser: true,
})
.then(()=> console.log("Connected to the database"))
.catch((err)=> console.log(`Error connecting to the database ${err}`))

// use express router
app.use('/', index);

app.listen(port, (err)=>{
  if(err){
    console.log(`Error while running server${err}`)
  }
  console.log(`The server is running on Port${port}`)
})
