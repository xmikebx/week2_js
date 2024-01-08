// <<<<< SLIDE EXAMPLES >>>>>

// const pressGrindBeans = () => {
// console.log("Grinding for 20 seconds.");

// }
// pressGrindBeans();

// const favColour = () => {
//     console.log("My favourite colour is blue.");
    
// }
// favColour();

// let coffeeIsGrinding = false;

// const pressGrindBeans = () => {
//     if (coffeeIsGrinding){
//         console.log("Stopping the grind");
//         coffeeIsGrinding = false;
//     }   else    {
//         console.log("Grinding is about to begin");
//         coffeeIsGrinding = true;
//     }
// }

// pressGrindBeans();


// const cashWithdrawal = (amount, accnum) => {
//     console.log(`withdrawing ${amount} from account ${accnum}`);

// }

// cashWithdrawal(300, 50449921);
// cashWithdrawal(30, 50449921);
// cashWithdrawal(200, 50447921);


// let colour = "blue";
// const favColour = (colour) => {

//     console.log(`My favourite colour is ${colour}`);

// }

// favColour(colour);

// const addUp = (num1, num2) => {
//     return num1 + num2;
// }

// addUp(7,3);
// console.log(addUp(2,5));


// <<<<< ACTIVITIES >>>>>

// Activity 1:
// Take this code and turn it into arrow function 
// syntax:

// function factorial (n) {
//     if ((n === 0) || (n === 1)) {
//         return 1;
//     } else {
//         return (n * factorial(n-1));
//     }
// }

// console.log(factorial(33));

const factorial = (n) =>{
    if ((n === 0) || (n === 1)) {
        return 1;
    } else {
        return (n * factorial(n-1));
    }
}

console.log(factorial(30));


// Activity 2:
// Edit the below snippet to include two parameters and a 
// running order count updated when the function is called:

// let orderCount = 0;

// const takeOrder = (topping) => {
//     console.log(`Pizza with ${topping}`);
//     orderCount++;
// }

// takeOrder("pineapple");


let orderCount = 0;

const takeOrder = (base, topping) => {
// repeat 6 times to show a running order count
    for (let i=orderCount; i < 6; i++) {
        orderCount++;
        console.log(`Order #${orderCount} - Pizza with ${base} base & ${topping} topping`);
    }
}
takeOrder("stuffed crust", "pineapple");


// Activity 3:
// Cash machine time! 
// Let’s create one that:
// JS
// > Dispenses cash if your pin number is correct and your 
// balance is equal to, or more than, the amount you’re 
// trying to withdraw!


