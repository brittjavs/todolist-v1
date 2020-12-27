//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js")
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static("public"))

const tasks = ["Make Dinner", "Clean the Kitchen"];
const workTasks = []

app.get("/", function(req, res){
   let day = date.getDate()
   res.render("list", {listTitle: day, newListItems: tasks})

});

app.get("/work", function(req,res){
    res.render("list", {listTitle: "Work List", newListItems: workTasks})
})

app.get("/about", function(req, res){
    res.render("about")
})

app.post("/", function(req, res){
    let task = req.body.newTask
    if(req.body.list === "Work"){
        workTasks.push(task)
    }
    else{
        tasks.push(task)
        res.redirect("/")
    }

})

app.post("/work", function(req, res){
    let task = req.body.newTask
    workTasks.push(task)
    res.redirect("/work")
})

app.listen(3000, function(){
    console.log("Server has started on port 3000");
});