function random_mess(){
  var crazyThings = ["rotate", "alert", "error"];
  var randomNumber = Math.floor(Math.random() * crazyThings.length);
  var choice = crazyThings[randomNumber];
  console.log(choice);
  if (choice == "rotate") {
    rotate();
  } else if (choice == "alert") {
    annoying_alert();
  } else if (choice == "error") {
    destroy();
  }
}

function annoying_alert() {
  alert("hi Gigapet")
}

function rotate() {
  var pic = document.getElementById("gigapet-picture");
  var randomNumber = Math.floor(Math.random(4));
  if (randomNumber == 0) {
    pic.style.transform = 'rotate(90deg)';
  }
  else if (randomNumber == 1) {
    pic.style.transform = 'rotate(180deg)';
  }
  else if (randomNumber == 2) {
    pic.style.transform = 'rotate(270deg)';
  }
  else  {
    pic.style.transform = 'rotate(0deg)';
  }
}

function reload(){
  window.location.reload();
}

function destroy(){
  document.getElementById("body1").innerHTML = "HEHEHE";
  setTimeout(function(){ reload(); } , 2000);
}
