/* cards effect */
function FunctionSlifer() {
  var x = document.getElementById("slifer-card-effect-text");
  var y = document.getElementById("obelisk-card-effect-text");
  var z = document.getElementById("ra-card-effect-text");
  y.style.display = "none";
  z.style.display = "none";
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function FunctionObelisk() {
  var x = document.getElementById("slifer-card-effect-text");
  var y = document.getElementById("obelisk-card-effect-text");
  var z = document.getElementById("ra-card-effect-text");
  x.style.display = "none";
  z.style.display = "none";
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
}
function FunctionRa() {
  var x = document.getElementById("slifer-card-effect-text");
  var y = document.getElementById("obelisk-card-effect-text");
  var z = document.getElementById("ra-card-effect-text");
  x.style.display = "none";
  y.style.display = "none";
  if (z.style.display === "none") {
    z.style.display = "block";
  } else {
    z.style.display = "none";
  }
}
/* background music */
function MusicOn() { 
  var x = document.getElementById("background-music");
  var y = document.getElementById("music-on");
  var z = document.getElementById("music-off");
  x.muted = true;
  y.style.display = "none";
  z.style.display = "block";
}
function MusicOff() { 
  var x = document.getElementById("background-music");
  var y = document.getElementById("music-on");
  var z = document.getElementById("music-off");
  x.muted = false;
  y.style.display = "block";
  z.style.display = "none";
}