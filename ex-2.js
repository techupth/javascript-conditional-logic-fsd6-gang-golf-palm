//Exercise 2
let lightBulbStatus = "On";
let lightBulb;

// Start coding here.
if (lightBulbStatus === "On") {
    lightBulb = "Light bulb is On.";
} else if (lightBulbStatus === "Off") {
    lightBulb ="Light bulb is Off." ;
}  else if (lightBulbStatus === "Broken") {
    lightBulb ="Light bulb is Broken." ; 
}  else {
    lightBulb = "Please choose the correct input (On/Off/Broken)";
}

console.log(lightBulb);