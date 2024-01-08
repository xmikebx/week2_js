// Display the 8th character of this word in upper case.
// All Around the World


console.log("All Around the World".charAt(7).toUpperCase());

// Variables -
// Let (can be changed)
// Const (can*NOT* be changed)
// var (can be changed but is considered a legacy (obsolete) command now)

// Arithmetic Operators (FOR CALCULATIONS)
// + Addition
// - Subtraction
// * Multiplication
// ** Exponentiation
// / Division
// % Modulus (remainder)
// ++ Increment
// -- decrement 

// Assignment Operators (FOR STORING VALUES)
// = assigns a value to a variable
// *= multiplies a variable
// += adds a value to a variable
// /= divides a variable
// -= subtracts a value from a variable
// ++ ???
// -- ???







// let myName = "Mike";
// console.log(myName);

let number = 10
console.log(number +=5);
console.log(number);

// <<<<<ACTIVTY1>>>>>


let myName = "Mike";
let myAge = "50";
let myFavCol = "blue";

console.log(`Hi my name is ${myName} I am ${myAge} and my favourite colour is ${myFavCol}`);

myName = "Paul";
myAge = "50";
myFavCol = "green";

console.log(`My friends name is ${myName} he is ${myAge} and his favourite colour is ${myFavCol}`);

// <<<<<ACTIVITY2>>>>>


let myBreakfast = "Toast";
let myLunch = "Cheese Sandwich";
let myDinner = "Chicken & Rice";

console.log(`Todays Meals - | Breafast: ${myBreakfast} | Lunch: ${myLunch} | Dinner: ${myDinner} |`);

myBreakfast = "Toast";
myLunch = "Egg Mayo Sandwich";
myDinner = "Sausage Casserole";

console.log(`Tomorrows Meals - | Breafast: ${myBreakfast} | Lunch: ${myLunch} | Dinner: ${myDinner} |`);

// <<<<<ACTIVITY3>>>>>


// Create variables for dob and today, subtract one from the other then convert the time in miliseconds to time in days.
let myBirth = (`17 Aug 1973`);
let myBirthEpoch = Date.parse('17 Aug 1973 00:00:00 GMT');
const todaysDate = Date.now();
let daysAlive = todaysDate - myBirthEpoch;
daysAlive = (Math.floor(daysAlive / (1000 * 60 * 60 * 24)));
// time in miliseconds / (1000 miliseconds in a second * 60 seconds in a minute * 60 minutes in an hour * 24 hours in a day)


console.log(`You were born on ${myBirth} and you have been alive for ${daysAlive} days!`);