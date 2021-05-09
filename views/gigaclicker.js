function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
function logOut(){
  document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  document.cookie = "password=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  document.cookie = "score=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  window.location.reload()
}
function leaving(){
  let response = fetch("/addtoscore?username=" + username + "&password=" + password + "&amount=" + score);  
}
var username = getCookie("username");
var password = getCookie("password");
if (username != "") {
   
} else {
window.location.assign("/pick.html")
}

//let response = fetch("/checkUserScore?username=" + username + "?password=" + password);
// if HTTP-status is 200-299
  // get the response body (the method explained below)
 // var json = JSON.stringify(response)
  

//let response = fetch("/checkUserScore?username=" + username + "?password=" + password).then(res => res.json()).then(data => {
//var userScore = data;
//})

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     console.log(JSON.parse(xhttp.responseText));
      var jsonFile = JSON.parse(xhttp.responseText)
      document.cookie = "score=" + jsonFile
      document.getElementById("playerScore").innerHTML = "Coins: " + jsonFile
    
    }
};
xhttp.open("GET", "/checkUserScore?username=" + username + "&password=" + password, true);
xhttp.send();
var xhttp2 = new XMLHttpRequest();
xhttp2.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     console.log(JSON.parse(xhttp2.responseText));
      var jsonFile = JSON.parse(xhttp2.responseText)
      document.cookie = "workers=" + jsonFile
    
    }
};
xhttp2.open("GET", "/getworkers?username=" + username + "&password=" + password, true);
xhttp2.send();
var bunnies = getCookie('workers')
var autoClicker2 = 0;
var autoClicker3 = 0;
var score = getCookie('score')
console.log(score)
var newsArray = [];
function autoWorkerStarter(amount){
   setInterval(function(){ clickPet(); } , amount);
   let response = fetch("/addworkers?username=" + username + "&password=" + password + "&amount=" + 10);
}
function autoWorkerStarterTwo(amount){
   setInterval(function(){ clickPet(); } , amount);
}
var i;
for (i = 0; i < bunnies; i++) {
  autoWorkerStarterTwo(7000)
}
const news_items = [
  "RIP Jayden",
  "RIP Lucas",
  "RIP John",
  "RIP Basketball",
  "Coronavirus is dumb",
  "Buy more bunnies!",
  "Zombies are nice",
  "Don't sleep on dragons",
  "Unicorns are friendly"
]

function clickPet(){
  score++
  let response = fetch("/addtoscore?username=" + username + "&password=" + password + "&amount=" + score);
    // if HTTP-status is 200-299
  console.log("added to score")

  update();
}



function buyBunny() {
  console.log("You ")
  if (score < 10) {
    document.getElementById("info").innerHTML = "You bunny! You don't have enough coins!";
    
  } else {
    score -= 10;
      let response = fetch("/removefromscore?username=" + username + "&password=" + password + "&amount=" + 10);
    // if HTTP-status is 200-299
  console.log("added to score")
    document.getElementById("info").innerHTML = "You bought a bunny!";
    bunnies++;
    autoWorkerStarter(10000);
  }
}
function buyKitty() {
  console.log("You ");
  if (score < 30) {
    document.getElementById("info").innerHTML = "You dummy! You don't have enough coins!";
    
  } else {
    score -= 30;
          let response = fetch("/removefromscore?username=" + username + "&password=" + password + "&amount=" + 30);
    // if HTTP-status is 200-299
  console.log("added to score")
    document.getElementById("info").innerHTML = "Bought a kitty!";
    bunnies++;
    autoWorkerStarter(7000);
  }
}
function buyZombie() {
  console.log("You ")
  if (score < 50) {
    document.getElementById("info").innerHTML = "You dummy! You don't have enough coins!";
    
  } else {
    score -= 50;
          let response = fetch("/removefromscore?username=" + username + "&password=" + password + "&amount=" + 50);
    // if HTTP-status is 200-299
  console.log("added to score")
    document.getElementById("info").innerHTML = "Bought a Zombie!";
    bunnies++;
    autoWorkerStarter(5000);
  }
}
function buyUnicorn() {
  console.log("You ")
  if (score < 80) {
    document.getElementById("info").innerHTML = "You dummy! You don't have enough coins!";
    
  } else {
    score -= 80;
let response = fetch("/removefromscore?username=" + username + "&password=" + password + "&amount=" + 80);
    // if HTTP-status is 200-299
  console.log("added to score")
    document.getElementById("info").innerHTML = "Bought a Unicorn!";
    bunnies++;
    autoWorkerStarter(2000);
  }
}
function buyDragon() {
  console.log("You ")
  if (score < 130) {
    document.getElementById("info").innerHTML = "You dummy! You don't have enough coins!";
    
  } else {
    score -= 130;
          let response = fetch("/removefromscore?username=" + username + "&password=" + password + "&amount=" + 130);
    // if HTTP-status is 200-299
  console.log("added to score")
    document.getElementById("info").innerHTML = "Bought a Dragon!";
    bunnies++;
    autoWorkerStarter(1000);
  }
}
function buyLucas() {
  console.log("You ")
  if (score < 200) {
    document.getElementById("info").innerHTML = "You dummy! You don't have enough coins!";
    
  } else {
    score -= 200;
          let response = fetch("/removefromscore?username=" + username + "&password=" + password + "&amount=" + 200);
    // if HTTP-status is 200-299
  console.log("added to score")
    document.getElementById("info").innerHTML = "Bought a Losh!";
    bunnies++;
    autoWorkerStarter(700);
  }
}
function buyExpertBunny() {
  console.log("You ")
  if (score < 250) {
    document.getElementById("info").innerHTML = "You dummy! You don't have enough coins!";
    
  } else {
    score -= 250;
    let response = fetch("/removefromscore?username=" + username + "&password=" + password + "&amount=" + 250);
    // if HTTP-status is 200-299
    console.log("added to score");
    document.getElementById("info").innerHTML = "Bought a Expert Bunny!";
    bunnies++;
    autoWorkerStarter(500);
  }
}

function updateNews() {
  const breakingNewsItem = news_items[Math.floor(Math.random() * news_items.length)];
  newsArray.unshift("• " + breakingNewsItem);
  newsArray.splice(5, newsArray.length - 2);
  document.getElementById("news").innerHTML = newsArray.join("<br /><br />");
}

var jsonFile = "";

function update(){
  var playerPoints = ""
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     console.log(JSON.parse(xhttp.responseText));
      var jsonFile = JSON.parse(xhttp.responseText)
      document.cookie = "score=" + jsonFile
      console.log(jsonFile)
      
    }
};
xhttp.open("GET", "/checkUserScore?username=" + username + "&password=" + password, true);
xhttp.send();
var xhttp2 = new XMLHttpRequest();
xhttp2.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     console.log(JSON.parse(xhttp2.responseText));
      var jsonFile = JSON.parse(xhttp2.responseText)
      document.cookie = "workers=" + jsonFile
    
    }
};
xhttp2.open("GET", "/getworkers?username=" + username + "&password=" + password, true);
xhttp2.send();
  console.log(jsonFile)
  console.log(document.cookie)
  document.getElementById("playerScore").innerHTML = "Coins: " + score
  document.getElementById("workers").innerHTML = "Workers: " + bunnies
  

//  else if (score > 45 && autoWorkerStarted2 == false) {
//    autoWorkerStarted2 = true
//    document.getElementById("info").innerHTML = "Unlocked clicker 2!";
//    autoWorkerStarter(7000);
//  } else if (score > 75 && autoWorkerStarted3 == false) {
//    autoWorkerStarted3 = true
//    document.getElementById("info").innerHTML = "Unlocked clicker 3!";
//    autoWorkerStarter(6500);
    
//  }
}

setInterval(function(){ update(); } , 1000);
setInterval(function(){ updateNews(); }, 10000);
