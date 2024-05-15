//Exercise 4
// Switch Statement
let lightBulbStatus = "On";
let light;
//Start coding here

switch (lightBulbStatus) {
  case "On":
    light = "Light bulb is On.";
    break;
  case "Off":
    light = "Light bulb is Off.";
    break;
  case "Broken":
    light = "Light bulb is Broken.";
    break;
  default:
    light = "Please choose the correct input (On/Off/Broken)";
}

console.log(light);
