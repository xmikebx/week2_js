// const cafe = {
//     name: "Whitesheep",
//     seatingCapacity: 100,
//     hasSpecialOffers: true,
//     drinks: [
//     "cappuccino",
//     "Latte",
//     "Filter coffee",
//     "Tea",
//     "Hot chocolate"
//     ]
// };



// let person = {
//     name: "Mike",
//     age: 50
// }

// console.log(person.age);
// console.log(person["age"]);



// let offer = "none";
// let time = 1200;

// const cafe = {
//     name: "Whitesheep",
//     seatingCapacity: 100,
//     hasSpecialOffers: true,
//     drinks: [
//     "cappuccino",
//     "Latte",
//     "Filter coffee",
//     "Tea",
//     "Hot chocolate"
//     ],
//     breakfastOffer: "Free croissant with coffee",
//     lunchOffer: "Free drink with sandwich",
//     noOffer: "Sorry no offer",

    // openCafe() {
    //     return "come on in";
    // },
    // closeCafe() {
    //     return "we are closed";
    // }

//     openCafe() {
//         // Needs 'this' to tell openCafe where hasSpecialOffers is
//         if (this.hasSpecialOffers) {
//             return "Time for a special offer!";
//         }   
//     },
//     closeCafe() {
//         return "we are closed";
//     }
// };

// console.log(cafe.breakfastOffer);
// console.log(cafe["lunchOffer"]);
// console.log(cafe.seatingCapacity);
// console.log(cafe.drinks[2]);
// console.log(cafe.openCafe());
// console.log(cafe.closeCafe());

// if (time < 1100){
//     offer = cafe.breakfastOffer;

// } else if (time < 1500) {
//     offer = cafe.lunchOffer;
// };

// console.log(offer);


// <<<<< ACTIVITY >>>>>



// let day = "Saturday";
// let message = "";

// let alarm = {
//     weekendAlarm: "No alarm needed",
//     weekdayAlarm: "get up at 7am",
// };

// if (day === "Saturday" || day === "Sunday"){
//     message = alarm.weekendAlarm;
// } else {
//     message = alarm.weekdayAlarm;
// };

// console.log(message);


// let person = {
//     name: "Mike",
//     age: 50,
//     favSongs: [
//     "Eagles - Hotel California",
//     "The Beatles - Strawberry Fields Forever",
//     "Queen - Bohemian Rhapsody"
//     ]
// };

// console.log(person.favSongs);

// <<<<< ACTIVITIES >>>>>

// Activity 1:
// JS
// Let’s edit our person object to include…
// A function called sayHi and when it’s called, it 
// should return “Hello my name is ${this.name}


let person = {
    name: "Mike",
    age: 50,
    favSongs: [
    "Eagles - Hotel California",
    "The Beatles - Strawberry Fields Forever",
    "Queen - Bohemian Rhapsody"
    ],
    sayHi() {
        return `Hello my name is ${this.name}`;
    }
};

console.log(person.sayHi());



// Activity 2:
// JS
// Create an object called pet with the key values of:
// name, typeOfPet, age, colour
// And methods called eat and drink. They should return a string 
// saying [Your Pet Name] is eating/drinking

let pet = {
    name: "buster",
    typeOfPet: "dog",
    age: 4,
    colour: "black & white",
    eat() {
        return `${this.name} is eating`;
    },
    drink() {
        return `${this.name} is drinking`;
    }
};

console.log(pet.eat());
console.log(pet.drink());




// Activity 3: JS
// Create an object called coffeeShop with key values of:
// branch, drinks with prices, food with prices
// And methods called drinksOrdered and foodOrdered.
// They should return a string saying [Your order] is … with 
// all items chosen with costs and total cost.

// let coffeeShop = {
//   branch: "Manchester",

//   let drinks = [
//     {
//       "type": "cappuccino",
//       "price": "2.39"
//     },
//     {
//         "type": "Latte",
//         "price": "2.09"
//       },
//       {
//         "type": "Filter Coffee",
//         "price": "1.75"
//       },
//       {
//         "type": "Tea",
//         "price": "1.50"
//       },
//       {
//         "type": "Hot Chocolate",
//         "price": "1.99"
//       }  
//     ]

//   }

