
const stopRedButton = document.getElementById("stopButton");
const readyYellowButton = document.getElementById("readyButton");
const goGreenButton = document.getElementById("goButton");
const redTrafficBulb = document.getElementById("redTraffic");
const yellowTrafficBulb = document.getElementById("yellowTraffic");
const greenTrafficBulb = document.getElementById("greenTraffic");

//  Reset Color
function resetColor(){
    redTrafficBulb.style.backgroundColor = "#494e66";
    yellowTrafficBulb.style.backgroundColor = "#494e66";
    greenTrafficBulb.style.backgroundColor = "#494e66";

    stopRedButton.style.backgroundColor = "";
    readyYellowButton.style.backgroundColor = "";
    goGreenButton.style.backgroundColor = "";
}

//   Turn On Red Light Button
function turnOnRedLight(){
    resetColor();
    redTrafficBulb.style.backgroundColor = "#e21b1b";
    stopRedButton.style.backgroundColor = "#e21b1b";
}

// Turn On Yellow Light Button 
function turnOnYellowLight() {
    resetColor();
    yellowTrafficBulb.style.backgroundColor = "#ffe51e";
    readyYellowButton.style.backgroundColor = "#ffe51e";
}

//  Turn On Green Light Button
function turnOnGreenLight(){
    resetColor();
    greenTrafficBulb.style.backgroundColor = "#37af65";
    goGreenButton.style.backgroundColor = "#37af65";
}
