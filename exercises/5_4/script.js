window.onload = function () {
  initStorage();
  let configSettings = readStorage();
  if (configSettings.length != 0) {
    changeBgColor(configSettings[0]);
    changeTextColor(configSettings[1]);
    changeFontSize(configSettings[2]);
    changeFontFamily(configSettings[3]);
    let fontSize = document.querySelector("#size");
    fontSize.value = configSettings[2];
  }
  console.log(configSettings);
};
const msgNoSupportToStorage = "Sem suporte para Web Storage.";

// change background color
let btnBlack = document.querySelector(".black");
btnBlack.addEventListener("click", function () {
  changeBgColor("black");
});

let btnOlive = document.querySelector(".olive");
btnOlive.addEventListener("click", function () {
  changeBgColor("olive");
});

let btnBlue = document.querySelector(".blue");
btnBlue.addEventListener("click", function () {
  changeBgColor("steelblue");
});

// change text color
let btnWhite = document.querySelector(".white");
btnWhite.addEventListener("click", function () {
  changeTextColor("white");
});

let btnGreen = document.querySelector(".green");
btnGreen.addEventListener("click", function () {
  changeTextColor("limegreen");
});

let btnBrown = document.querySelector(".brown");
btnBrown.addEventListener("click", function () {
  changeTextColor("brown");
});

// change font size
let btnFontSize = document.querySelector("#size");
btnFontSize.addEventListener("change", function () {
  changeFontSize(size.value);
});

// change font family
let fontArial = document.querySelector(".arial");
fontArial.addEventListener("click", function () {
  changeFontFamily("Arial, Helvetica, sans-serif");
});

let fontMonospace = document.querySelector(".monospace");
fontMonospace.addEventListener("click", function () {
  changeFontFamily("monospace");
});

let fontVerdana = document.querySelector(".verdana");
fontVerdana.addEventListener("click", function () {
  changeFontFamily("Verdana, Geneva, Tahoma, sans-serif");
});

let fontFantasy = document.querySelector(".fantasy");
fontFantasy.addEventListener("click", function () {
  changeFontFamily("fantasy");
});

function changeBgColor(color) {
  let article = document.querySelector("article");
  article.style.backgroundColor = color;
  recordStorage("backgroundColor", color);
}

function changeTextColor(color) {
  let article = document.querySelector("article");
  article.style.color = color;
  recordStorage("textColor", color);
}

function changeFontSize(size) {
  let article = document.querySelector("article");
  article.style.fontSize = size + "px";
  recordStorage("fontSize", size);
}

function changeFontFamily(family) {
  let article = document.querySelector("article");
  article.style.fontFamily = family;
  recordStorage("fontFamily", family);
}

function initStorage() {
  if (typeof Storage !== "undefined") {
    if (localStorage.backgroundColor === undefined) {
      localStorage.setItem("backgroundColor", "black");
    } else if (localStorage.textColor === undefined) {
      localStorage.setItem("textColor", "white");
    } else if (localStorage.fontSize === undefined) {
      localStorage.setItem("fontSize", "16");
    } else if (localStorage.fontSize === undefined) {
      localStorage.setItem("fontFamily", "Arial");
    }
  } else {
    document.write(msgNoSupportToStorage);
  }
}

function recordStorage(param, value) {
  localStorage.setItem(param, value);
}

function readStorage() {
  let configSettings = [];
  if (typeof Storage !== "undefined") {
    configSettings.push(localStorage.backgroundColor);
    configSettings.push(localStorage.textColor);
    configSettings.push(localStorage.fontSize);
    configSettings.push(localStorage.fontFamily);
  } else {
    document.write(msgNoSupportToStorage);
  }
  return configSettings;
}
