//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');

app.get("/", function(req, res){
   let today = new Date();
   let currentDay = today.getDay()
   let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
   let day = daysOfWeek[currentDay];
   
   res.render("list", {kindOfDay: day});
});

app.listen(3000, function(){
    console.log("Server has started on port 3000");
});