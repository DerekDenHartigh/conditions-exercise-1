"use strict";
/*
Skills: Conditions
Heating/Cooling exercise:
Define two variables: actualTemp and a desiredTemp. Write conditionals to tell the heating &
cooling system what to do. Log one of these three things: Run A/C, Run heat, or Standby.
*/


/* I didn't read the directions...
let actualTemp = prompt("what is the temperature? (numerical values only please)")
let desiredTemp = prompt("What temperature do you want it to be? (numerical values only please)")

if (actualTemp === desiredTemp) {console.log("Its comfy in here, get your hand off the thermostat.")
while (actualTemp<desiredTemp) {
    actualTemp++, console.log(actualTemp)};
while (actualTemp>desiredTemp) {
    desiredTemp--, console.log(actualTemp);
}
*/
/*
while (actualTemp<desiredTemp) {
    console.log(`Current Temperature: ${actualTemp}`)
    actualTemp++;
    console.log("Run Heat")
    console.log(`Modified Temperature: ${actualTemp}, It's getting hot in here`)
    // if (actualTemp===desiredTemp) // this doesn't do anything because the actualTemp variable isn't globally being incremented, only locally, so the condition is never met
    // console.log("Tis relatively comfy & cozy now.");
};
while (actualTemp>desiredTemp) {
    console.log(`Current Temperature: ${actualTemp}`)
    actualTemp--;
    console.log("Run A/C");
    console.log(`Modified Temperature: ${actualTemp}, ICE ICE BABY`)
    // if (actualTemp===desiredTemp)    
    // console.log("Tis relatively comfy & cozy now.");
};
if (actualTemp===desiredTemp)    
    console.log("Tis relatively comfy & cozy already.\nSTANDBY SOLDIER, that's an order!");
*/

//this works, but, is no better and a little worse...
// if (actualTemp<desiredTemp) {
//     while (actualTemp<desiredTemp){
//         console.log(`Current Temperature: ${actualTemp}`)
//         actualTemp++;
//         console.log("Run Heat")
//         console.log(`Modified Temperature: ${actualTemp}, It's getting hot in here`)}
//     }
// else {
//     console.log("Tis relatively comfy & cozy now.");}  // I thought maybe the else would run after the if condition wasn't met, no go...

// while (actualTemp>desiredTemp) {
//     console.log(`Current Temperature: ${actualTemp}`)
//     actualTemp--;
//     console.log("Run A/C");
//     console.log(`Modified Temperature: ${actualTemp}, ICE ICE BABY`)
//     if (actualTemp===desiredTemp)    
//     console.log("Tis relatively comfy & cozy now.");
// };
// if (actualTemp===desiredTemp)    
//     console.log("Tis relatively comfy & cozy already.\nSTANDBY SOLDIER, that's an order!");

    // tried having comfycozy message as an if statement following while loops, but it never logged it, tried embedding if statements
    // at the end of loops, same issue.
    // gonna try embedding a loop in an if/else statement - its really not working, I think it is because the 
    // Temp variables never change outside of the loop once they are globally defined outside the loops by the prompts
    // am I getting somewhere?  shall I define the variables within the loops and fix this issue.. not sure how to do that..

// lets try this one more time with feeling:

function thermostatFunction() {
    let actualTemp=prompt("What is the current temperature?")
    let desiredTemp=prompt("What temperature do you want it to be?")
    if (actualTemp<desiredTemp) {
        while (actualTemp<desiredTemp){
            console.log(`Current Temperature: ${actualTemp}`)
            actualTemp++;
            console.log("Run Heat");
            console.log(`Modified Temperature: ${actualTemp}, It's getting hot in here`)
            setTimeout(document.getElementById("temp-readout").innerHTML =(`${actualTemp} C`), 1000)};
        }
    else if (actualTemp>desiredTemp) {
        while (actualTemp>desiredTemp){
            console.log(`Current Temperature: ${actualTemp}`)
            actualTemp--;
            console.log("Run A/C");
            console.log(`Modified Temperature: ${actualTemp}, ICE ICE BABY`)
            setTimeout(document.getElementById("temp-readout").innerHTML =(`${actualTemp} C`), 1000)};
        }
    else if (actualTemp===desiredTemp){
        console.log(`Take your finger off that dial son, it already ${actualTemp}!\nSTANDBY SOLDIER, that's an order!`);
        document.getElementById("temp-readout").innerHTML =(`${actualTemp} C`);
    }
    else {console.log("It's relatively comfy cozy in here now.")};
}

/* Playing with timers

function myFunction() {
  setInterval(function(){ alert("Hello"); }, 3000); - waits 3s to say hello
}
setInterval for repeating (and continuous I've found) setTimeout for one shot delay.  thinking settimeout is what I want to go for.
wont count the temp down in HTML, console stuff happens pretty instantaneoulsy, which is fine, but I was really thinking the timeout at the
end of the while statements would act as a sort of speed governor.
*/
// got this one to work, but the else statement that I was hoping would be my endpoint after the loop isn't running.
//to do later: maybe drop a thermostat image, position a button on it or forms, and have scripts display currentTemp in DOM with a 1.5 sec delay in loops


/*
Extended Challenge TIME:
Start with two variables: tempCelsius (a number) and targetUnit (a string, either “C”, “F”, or “K”).
Write a switch statement that checks the targetUnit and logs the temperature converted to
that unit. Notes: K stands for Kelvin. C requires no conversion, print out the original temp
*/

let unconvertedTemp = prompt("what temperature is it? number only plz, the unit comes next.")
let tempUnit = prompt("what unit was that? (Kelvin/K, Celcius/C, Fahrenheit/F?)")
let targetUnit = prompt("What unit of average kinetic motion do you desire? (Kelvin/K, Celcius/C, Farenheit/F?)") // looked into multiple choice - looks like you need to use Jquery for that
/*
Unit conversion equations:
F->C:   C=((F-32)*(5/9))
F->K:   K=(((F-32)*5/9)-273.15)
C->F:   F=((9/5)*C)+32)
C->K:   K=(C-273.15)
K->C:   C=(K+273.15)
K->F:   F=((9/5)*(K+273.15))+32)
*/
function temperatureConversion() {
switch () {
    case unconvertedTemp===("" || undefined):
        console.log("you forgot to enter the temperature"); break;
    case (
        ((tempUnit===("Celcius"||"celcius"||"C"||"c")) && (unconvertedTemp< (-273.15))) ||
        ((tempUnit===("Kelvin"||"kelvin"||"K"||"k")) && (unconvertedTemp<0)) ||
        ((tempUnit===("Fahrenheit"||"fahrenheit"||"F"||"f")) && (unconvertedTemp< (-459.67)))):
        console.log(`THATS IMPOSSIBLE! ${unconvertedTemp}${tempUnit} is below absolute zero, the coldest possible temperature!`); break;

    case (tempUnit ===("Celcius"||"celcius"||"C"||"c")) && (targetUnit===("Celcius"||"celcius"||"C"||"c")):
        console.log(`really? you bothered me to convert from C to C? temp: ${unconvertedTemp}°C`); break;

    case (tempUnit ===("Celcius"||"celcius"||"C"||"c")) && (targetUnit===("Fahrenheit"||"fahrenheit"||"C"||"c")):
        let convertedTemp = ((9/5)*unconvertedTemp)+32); console.log(`converted temp: ${convertedTemp}°F`); break;

    case (tempUnit ===("Celcius"||"celcius"||"C"||"c")) && (targetUnit===("Kelvin"||"kelvin"||"K"||"k")):
        let convertedTemp = (unconvertedTemp-273.15); console.log(`converted temp: ${convertedTemp}°K`); break;

    case (tempUnit ===("Kelvin"||"kelvin"||"K"||"k")) && (targetUnit===("Fahrenheit"||"fahrenheit"||"C"||"c")):
        let convertedTemp = ((9/5)*(unconvertedTemp+273.15))+32); console.log(`converted temp: ${convertedTemp}°F`); break;

    case (tempUnit ===("Kelvin"||"kelvin"||"K"||"k")) && (targetUnit===("Celcius"||"celcius"||"C"||"c")):
        let convertedTemp = (unconvertedTemp+273.15); console.log(`converted temp: ${convertedTemp}°C`); break;

    case (tempUnit ===("Fahrenheit"||"fahrenheit"||"F"||"f")) && (targetUnit===("Kelvin"||"kelvin"||"K"||"k")):
        let convertedTemp = (((unconvertedTemp-32)*5/9)-273.15); console.log(`converted temp: ${convertedTemp}°K`); break;
        
    case (tempUnit ===("Fahrenheit"||"fahrenheit"||"F"||"f")) && (targetUnit===("Celcius"||"celcius"||"C"||"c")):
        let convertedTemp = ((unconvertedTemp-32)*(5/9)); console.log(`converted temp: ${convertedTemp}°C`); break;
  }
}
/* example while loop
let a=0, j=0;
while (a<30) {
    a++;
    j+=a;
    console.log(`a: ${a}`);
    console.log(`j: ${j}`);

do while:
let userPass = undefined;
do {
    if (userPass===undefined) {console.log("Enter Password to continue")
    userPass = prompt("Enter \"password\"")
    {console.log("Access Granted")} 
}
while (userPass !== "password");
*/

