// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const db = require("quick.db")
const app = express();

console.log(db.get("database"))
// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});
app.get("/gigaclicker.html", (request, response) => {
  response.sendFile(__dirname + "/gigaclicker.html");
});
app.get("/bunnies.jpg", (request, response) => {
  response.sendFile(__dirname + "/bunnies.jpg");
});
app.get("/pick.html", (request, response) => {
  response.sendFile(__dirname + "/views/pick.html");
});
app.get("/gigapet_facts.html", (request, response) => {
  response.sendFile(__dirname + "/gigapet_facts.html");
});
app.get("/gigapet_jokes.html", (request, response) => {
  response.sendFile(__dirname + "/gigapet_jokes.html");
});
app.get("/gigaclicker.js", (request, response) => {
  response.sendFile(__dirname + "/views/gigaclicker.js");
});
app.get("/script.js", (request, response) => {
  response.sendFile(__dirname + "/views/script.js");
});
app.get("/login.js", (request, response) => {
  response.sendFile(__dirname + "/views/login.js");
});
app.get("/signup.js", (request, response) => {
  response.sendFile(__dirname + "/views/signup.js");
});
app.get("/style.css", (request, response) => {
  response.sendFile(__dirname + "/views/style.css");
});
app.get("/signup.html", (request, response) => {
  response.sendFile(__dirname + "/views/signup.html");
});
app.get("/login.html", (request, response) => {
  response.sendFile(__dirname + "/views/login.html");
});
app.get("/createuserindb", (request, response) => {
var userName = request.query.username;
var password = request.query.password;

db.push(userName, {password: password, score: 0, workers: 0} ) 
 response.send(200) 
});
app.get("/checkUserScore", (request, response) => {
var userName = request.query.username;
var userPassword = request.query.password;

  //if (userPassword === db.get(userName).password){
console.log(db.get(userName))
 response.json(db.get(userName).score) 
 // }
});
app.get("/addtoscore", (request, response) => {
var userName = request.query.username;
var userPassword = request.query.password;
var amount = request.query.amount
 // if (userPassword === db.get(userName).password){
  db.set((userName) + '.score', amount)
 response.sendStatus(200)
  //}  
});
app.get("/addworkers", (request, response) => {
var userName = request.query.username;
var userPassword = request.query.password;

 // if (userPassword === db.get(userName).password){
  db.add((userName) + '.workers', 1)
 response.sendStatus(200)
  //}  
});
app.get("/getworkers", (request, response) => {
var userName = request.query.username;
var userPassword = request.query.password;

 // if (userPassword === db.get(userName).password){
 
 response.json(db.get((userName) + '.workers'))
  //}  
});
app.get("/removefromscore", (request, response) => {
var userName = request.query.username;
var userPassword = request.query.password;
var amount = request.query.amount;
console.log(userPassword)
 // if (userPassword === db.get(userName).password){
  db.subtract((userName) + '.score', amount)
 response.sendStatus(200)
 //}  
});
// listen for requests :)
const listener = app.listen(3000, () => {
  console.log("Your app is listening on port " + listener.address().port);
});