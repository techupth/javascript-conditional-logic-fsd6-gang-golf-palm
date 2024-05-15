//Exercise 2
let lightBulbStatus = "On";
let light;

// Start coding here.
if (lightBulbStatus === "On") {
  light = "Light bulb is on.";
} else if (lightBulbStatus === "Off") {
  light = "Light bulb is off.";
} else if (lightBulbStatus === "Broken") {
  light = "Light bulb is Broken.";
} else {
  light = "Please choose the correct input (On/Off/Broken)";
}

console.log(light);
