//Exercise 4
// Switch Statement
let lightBulbStatus = "On";
let lightBulb

//Start coding here
switch (lightBulbStatus === "On") {
    case "On" :
    lightBulb = "Light bulb is On.";
        break;
    case "Off":
    lightBulb   = "Light bulb is Off.";
        break;
    case "Broken" :
    lightBulb   = "Light bulb is Broken.";
    break;
    default: 
        lightBulb = "Please choose the correct input (On/Off/Broken)";
}
console.log(lightBulb);