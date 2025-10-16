onEvent("vanillaButton", "click", function() {
  showElement("endCrystal");
  setScreen("vanillaScreen");
});
onEvent("maceButton", "click", function() {
  showElement("enderPearl");
  showElement("windCharge");
  setScreen("maceScreen");
});
onEvent("smpButton", "click", function() {
  setScreen("smpScreen");
});
onEvent("op_potButton", "click", function() {
  showElement("goldenApple");
  setScreen("op_potScreen");
});
onEvent("swordButton", "click", function() {
  setScreen("swordScreen");
});
onEvent("axeButton", "click", function() {
  setScreen("axeScreen");
});
onEvent("uhcButton", "click", function() {
  setScreen("uhcScreen");
});
onEvent("1.8Button", "click", function() {
  var time = 5;
  showElement("cpsButton");
  showElement("startButton");
  showElement("timerLabel");
  hideElement("cpsLabel");
  setText("timerLabel", "Time: " + time);
  setScreen("1.8Screen");
});
onEvent("hotkeysButton", "click", function() {
  setScreen("hotkeysScreen");
});
onEvent("modsButton", "click", function() {
  setScreen("modsScreen");
});
onEvent("specsButton", "click", function() {
  setScreen("specsScreen");
});

onEvent("homeButton1", "click", function() {
  setScreen("homeScreen");
});
onEvent("homeButton2", "click", function() {
  setScreen("homeScreen");
});
onEvent("homeButton3", "click", function() {
  setScreen("homeScreen");
});
onEvent("homeButton4", "click", function() {
  setScreen("homeScreen");
});
onEvent("homeButton5", "click", function() {
  setScreen("homeScreen");
});
onEvent("homeButton6", "click", function() {
  setScreen("homeScreen");
});
onEvent("homeButton7", "click", function() {
  setScreen("homeScreen");
});
onEvent("homeButton8", "click", function() {
  setScreen("homeScreen");
});
onEvent("homeButton9", "click", function() {
  setScreen("homeScreen");
});
onEvent("homeButton10", "click", function() {
  setScreen("homeScreen");
});
onEvent("homeButton11", "click", function() {
  setScreen("homeScreen");
});

onEvent("maceKitOpen", "click", function() {
  showElement("maceKit");
  showElement("maceKitClose");
});
onEvent("smpKitOpen", "click", function() {
  showElement("smpKit");
  showElement("smpKitClose");
});
onEvent("nethopKitOpen", "click", function() {
  showElement("nethopKit");
  showElement("op_potKitClose");
});
onEvent("potKitOpen", "click", function() {
  showElement("potKit");
  showElement("op_potKitClose");
});
onEvent("swordKitOpen", "click", function() {
  showElement("swordKit");
  showElement("swordKitClose");
});
onEvent("axeKitOpen", "click", function() {
  showElement("axeKit");
  showElement("axeKitClose");
});
onEvent("uhcKitOpen", "click", function() {
  showElement("uhcKit");
  showElement("uhcKitClose");
});

onEvent("maceKitClose", "click", function() {
  hideElement("maceKit");
  hideElement("maceKitClose");
});
onEvent("smpKitClose", "click", function() {
  hideElement("smpKit");
  hideElement("smpKitClose");
});
onEvent("op_potKitClose", "click", function() {
  hideElement("nethopKit");
  hideElement("potKit");
  hideElement("op_potKitClose");
});
onEvent("swordKitClose", "click", function() {
  hideElement("swordKit");
  hideElement("swordKitClose");
});
onEvent("axeKitClose", "click", function() {
  hideElement("axeKit");
  hideElement("axeKitClose");
});
onEvent("uhcKitClose", "click", function() {
  hideElement("uhcKit");
  hideElement("uhcKitClose");
});

onEvent("endCrystal", "click", function() {
  hideElement("endCrystal");
  playSound("assets/explosion3.mp3");
});
onEvent("goldenApple", "click", function() {
  hideElement("goldenApple");
  playSound("assets/nom-nom-nom_gPJiWn4.mp3");
});
onEvent("windCharge", "click", function() {
  hideElement("windCharge");
  hideElement("enderPearl");
  playSound("assets/minecraft-ender-pearl-sound-effects-1-made-with-Voicemod.mp3");
  playSound("assets/wind.mp3");
});
onEvent("hypixelLogo", "click", function() {
  open("https://www.hypixel.net");
});

var clicks = 0;
var time = 5;
var timerRunning = false;
var timer;

onEvent("cpsButton", "click", function() {
  if (timerRunning && time > 0) {
    clicks++;
  }
});

onEvent("startButton", "click", function() {
  if (timerRunning) return;

  timerRunning = true;
  clicks = 0;
  time = 5;

  setText("timerLabel", "Time: " + time);
  showElement("cpsButton");
  showElement("timerLabel");
  hideElement("cpsLabel");
  hideElement("startButton");

  timer = setInterval(function() {
    time--;
    setText("timerLabel", "Time: " + time);

    if (time <= 0) {
      endCpsTest();
    }
  }, 1000);
});

onEvent("homeButton8", "click", function() {
  endCpsTest(true);
  setScreen("homeScreen");
});

function endCpsTest(forceReset) {
  clearInterval(timer);
  timerRunning = false;

  hideElement("cpsButton");
  hideElement("timerLabel");
  showElement("cpsLabel");

  if (!forceReset) {
    var cps = clicks / 5;
    setText("cpsLabel", "Your CPS: " + cps.toFixed(2));
  } else {
    setText("cpsLabel", "Test canceled.");
  }
}