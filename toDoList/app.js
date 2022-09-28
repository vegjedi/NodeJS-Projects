const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

let items = ["Buy Food", "Cook Food", "Eat Food"];
let workItems =[];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

app.get("/", function(req, res) {
  let today = new Date();
  let options = {
    weekday: "long", 
    month: "long", 
    day: "numeric" 
  };

  let day = today.toLocaleDateString("en-US", options);
  res.render("list", {
    listTitle: day,
    newListItems: items
  });
});

app.get("/work", function(req,res){
  res.render("list", {
    listTitle: "Work List",
    newListItems: workItems})
});

app.get("/about", function(req,res){
  res.render("about")
});

app.post("/", function(req,res) {
  let item = req.body.newItem;
  if (req.body.button === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
  items.push(item);
  res.redirect("/");
  }
});

app.listen(port, () => {
  console.log("App listening on port 3000")
});