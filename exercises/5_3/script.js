var personName = "";

function complainMessage() {
  alert("I told you not to do that " + personName);
}

function typeAndScream() {
  document.getElementById("audio").play();
  personName = document.getElementById("name").value;
}

function goDark() {
  var body = document.getElementsByTagName("body")[0];
  if (body.className == "") {
    body.className = "dark";
  }
  else {
    body.className = "";
  }
  
}

function finishTheStory() {
  document.getElementById("story").innerHTML = "So I carefully searched the damp dungeon. There you are! I grinned a smile with all 98 of my gleaming teeth. Dinner time!";
}

let btn1 = document.querySelectorAll("button")[0];
btn1.addEventListener('click', goDark);

let input1 = document.querySelector("input");
input1.addEventListener('keyup', typeAndScream);

let btn2 = document.querySelectorAll("button")[1];
btn2.addEventListener('click', complainMessage);

let btn3 = document.querySelectorAll("button")[2];
btn2.addEventListener('click', finishTheStory);
