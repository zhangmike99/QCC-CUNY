
var ninja = {
  eyeColor: "",
  hairColor: "",
  clan: "",
  age: "",
  birthday: { "month": 1, "day": 20, year: 1675 },
  likes: ["", "", ""],

  slice: function () {
    var numSlices = Math.floor(Math.random() * 100);

    document.getElementById("ninjaDescription").innerHTML = "Your ninja slices " + numSlices + " times.";
  },

  kick: function () {
    var numKicks = Math.floor(Math.random() * 100);

    document.getElementById("ninjaDescription").innerHTML = "Your ninja kicked " + numKicks + " times.";
  },

  dodge: function () {
    var numDodges = Math.floor(Math.random() * 100);

    document.getElementById("ninjaDescription").innerHTML = "Your ninja dodged " + numDodges + " times.";
  }
};

var imageHolder = {
  nShow: function () {
    document.getElementById("ninjaStanceNormal").style.display = "block";
  },

  sShow: function () {
    document.getElementById("ninjaStanceSlice").style.display = "block";
  },

  kShow: function () {
    document.getElementById("ninjaStanceKick").style.display = "block";
  },

  dShow: function () {
    document.getElementById("ninjaStanceDodge").style.display = "block";
  }
}

var imageHider = {
  nHide: function () {
    document.getElementById("ninjaStanceNormal").style.display = "none";
  },

  sHide: function () {
    document.getElementById("ninjaStanceSlice").style.display = "none";
  },

  kHide: function () {
    document.getElementById("ninjaStanceKick").style.display = "none";
  },

  dHide: function () {
    document.getElementById("ninjaStanceDodge").style.display = "none";
  }
}

function revealMessage() {
  var allMessages = document.getElementsByClassName("hiddenMessage");

  var messageLength = allMessages.length;

  for (var i = 0; i < messageLength; i++) {
    allMessages[i].style.display = "block";
  }
}

function describeNinja() {
  alert("Describe your ninja");

  var eC = prompt("What is the eye color of the ninja?", "");
  ninja.eyeColor = eC;
  document.getElementById("eyes").innerHTML = "Eye color: " + ninja.eyeColor;

  var hC = prompt("What is the hair color of the ninja?", "");
  ninja.hairColor = hC;
  document.getElementById("hair").innerHTML = "Hair color: " + ninja.hairColor;

  var c = prompt("What is your ninja's clan?", "");
  ninja.clan = c;
  document.getElementById("clan").innerHTML = "Clan: " + ninja.clan;

  var a = prompt("What is the age of the ninja?", "");
  ninja.age = a;
  document.getElementById("age").innerHTML = "Age: " + ninja.age;

  var l = prompt("What does the ninja like?", "", "", "");
  ninja.likes = l;
  document.getElementById("likes").innerHTML = "Likes: " + ninja.likes;

  revealMessage();
}

function playSlice() {
  var sliceSound = document.getElementById("s");
  sliceSound.play();

  ninja.slice();

  imageHolder.sShow();

  imageHider.nHide();
  imageHider.kHide();
  imageHider.dHide();
}

function playKick() {
  var kickSound = document.getElementById("k");
  kickSound.play();

  ninja.kick();

  imageHolder.kShow();

  imageHider.nHide();
  imageHider.sHide();
  imageHider.dHide();
}

function playDodge() {
  var dodgeSound = document.getElementById("d");
  dodgeSound.play();

  ninja.dodge();

  imageHolder.dShow();

  imageHider.nHide();
  imageHider.kHide();
  imageHider.sHide();
}

imageHolder.nShow();