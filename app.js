//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');

app.get("/", function(req, res){
   var today = new Date();
   var currentDay = today.getDay()
   var day = "";
   if(currentDay === 6 || currentDay === 0){
       day = "Weekend"
       res.render("list", {kindOfDay: day});
   }
   else{
       res.sendFile(__dirname + "/index.html");
   }
});

app.listen(3000, function(){
    console.log("Server has started on port 3000");
});