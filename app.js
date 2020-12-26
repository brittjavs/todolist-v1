//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}))

let tasks = ["Make Dinner"];

app.get("/", function(req, res){
   let today = new Date();
   let options = {
       weekday: "long",
       day: "numeric",
       month: "long"
   };

   let day = today.toLocaleDateString("en-US", options);

   res.render("list", {kindOfDay: day, newListItems: tasks})

});

app.post("/", function(req, res){
    let task = req.body.newTask
    tasks.push(task)
    res.redirect("/")
})

app.listen(3000, function(){
    console.log("Server has started on port 3000");
});