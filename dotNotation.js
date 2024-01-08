// Dot Notation is a way of using code to separate one element (object) from another, (property)
// eg console(object).log(property))

// Method - toUpperCase() / toLowerCase() / trim() etc
// Data type - string / boolean etc
// Property - length etc

console.log("Hello World!");

// Convert a string to upper case.
console.log("Hello world!".toUpperCase());

// Returns a random number rounded to the nearest integer
console.log(Math.round(Math.random() * 10 ));
// 0-10
// 0.3 would return 0 / 0.6 would return 1 / 9.4 would return 9 / 9.6 would return 10



// Returns a random number rounded DOWN (to the floor)
console.log(Math.floor(Math.random() * 10 ));
// 0-9
// 0.9 would return 0 / 9.9 would return 9

// Returns a random number rounded UP (to the ceiling)
console.log(Math.ceil(Math.random() * 10 ));
// 1-10
// 0.2 would return 1 / 9.2 would return 10


// <<<<<Activity>>>>>
// Have a go at logging a 'noughts & crosses grid' to the console.

// This logs a string to each new line.

console.log("   |   |    ")
console.log("   |   |    ")
console.log("   |   |    ")
console.log("------------")
console.log("   |   |    ")
console.log("   |   |    ")
console.log("   |   |    ")
console.log("------------")
console.log("   |   |    ")
console.log("   |   |    ")
console.log("   |   |    ")

// Stretch: see if you can create it using arrays and loops.

// This creates an array 'grid' and a for loop that for each key (array position in the grid) log it to console.


const grid = ["   |   |    ", "   |   |    ", "   |   |    ", "------------", "   |   |    ", "   |   |    ", "   |   |    ", "------------", "   |   |    ", "   |   |    ", "   |   |    " ];
for (const key of grid) {
  console.log(`${key}`);
}



let space1 = `x`;
let space2 = `o`;
let space3 = ``;
let space4 = `x`;
let space5 = `x`;
let space6 = ``;
let space7 = `o`;
let space8 = ``;
let space9 = ``;








