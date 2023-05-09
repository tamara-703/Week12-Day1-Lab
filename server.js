// INDUCES! Be sure to remember this acronym to keep your routes in working order!
// Routes...
// Index : Show all the things!
// New : An empty form for a new thing
// Delete : Get rid of this particular thing!
// Update : Update this specific thing with this updated form
// Create : Make a new thing with this filled out form
// Edit : A prefilled form to update a specific thing
// Show : Show me this one thing!

//requires
const express = require("express");
const fruits = require("./models/fruits");
const vegetables = require("./models/vegetables");

//instantiate (this also includes all variables we need)
const app = express();
const port = 3000;

app.set("view engine", "jsx");
app.engine("jsx", require("jsx-view-engine").createEngine());

//middleware if any
//----

//routes if any
//index
app.get("/fruits/", (req, res) => {
  res.render("Index", {fruits: fruits});
});

app.get("/vegetables/" , (req,res) => {
  res.render("VegetablesIndex", {vegetables: vegetables});
})

//show
app.get("/fruits/:indexOfFruitsArray", (req, res) => {
  res.render("Show", {
    //second param must be an object
    fruit: fruits[req.params.indexOfFruitsArray], //there will be a variable available inside the ejs file called fruit, its value is fruits[req.params.indexOfFruitsArray]);
  });
});

app.get("/vegetables/:indexOfVegetablesArray", (req,res) => {
  res.render('VegetableShow', {vegetable: vegetables[req.params.indexOfVegetablesArray]});
})

//tell the express to listen
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
