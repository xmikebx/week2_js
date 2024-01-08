// Comparison Operators 

// == Equal. Checks if equal regardless of data type
// === Strict Equal. Checks if value AND data type are equal

// != NOT Equal
// !== STRICTLY NOT Equal
// >= Greater than or equal to 
// <= Less than or equal to 
// ? Ternary. let voteable = (age < 18) ? "Too young":"Old enough"; separated by a colon - if true:else

// Logical Operators

// && AND (both conditions need to be met)
// || OR (either condition can be met)






// <<<<< ACTIVITIES >>>>>

// Activity 1: JS
// Create a variable called age. Write an if statement
// that logs “Yes I can serve you” if the age is greater 
// than 17 and else logs “You aren’t old enough”.

let age = 18;
let country = "uk";
if (age > 17 && country == "uk") console.log (`Yes i can serve you`)
else console.log (`You aren't old enough`)


// Activity 2:
// Create a variable for any pizza topping. 
// JS
// Create a switch statement, if the topping is one of your 
// favourite ingredients, log to the console “These are 
// important ingredients for my pizza.” If you don’t mind 
// having Pepperoni for example log to the console “I don’t 
// mind having ${topping} on my pizza. 
// Finally, for any topping you don’t like log “${topping} 
// should not be on a pizza.” 

let topping = "mozzarella";

switch (topping) {
    case "ham":
    case "chicken":
    case "beef":
    case "pepperoni":
    case "bacon":
    case "meatballs":
    case "garlic":
    case "red onion":
    case "mushrooms":
    case "mozzarella":
        console.log (`These are important ingredients for my pizza`);
        break;
    case "sweetcorn":
    case "tomatoes":
    case "jalapenos":
        console.log (`I don't mind having ${topping} on my pizza`);
        break;
    case "anchovies":
    case "pineapple":
        console.log (`${topping} should not be on a pizza`);
        break;
}

// Activity 3:
// Create a variable called password. 
// JS
// Check how many letters are in the password, if there are 
// less than 8, log to the console that the password is too 
// short. Otherwise log the password to the console. 

let password ="pass123";
if (password.length < 8) {
    console.log (`password is too short`);
}
else {
    console.log (`password - ${password}`);
}

// let num = "11";
// if (num % 3 == 0 || num % 5 == 0) {
//     console.log (`This number is divisible by 3 or 5`);
// }
// else {
//     console.log (`This number is not divisible by 3 or 5`);
// }

// Activity 4:
// Create a variable called num.
// If num is divisible by 3 log “fizz” to the console, if it’s divisible by 
// JS
// 5 log “buzz” to the console, if it’s divisible by both 3 and 5 log 
// “fizz buzz” to the console. Otherwise log num to the console.


let num = "15";
if (num % 3 == 0 && num % 5 == 0) {
    console.log (`FizzBuzz`);
}
else if (num % 3 == 0) {
    console.log (`Fizz`);
}
else if (num % 5 == 0) {
    console.log (`Buzz`);
}
else {
    console.log (`${num}`);
}

// Activity 5:
// Create a variable called num.
// Check if the number is a palindrome (looks the 
// same forward as it does backwards e.g. 1001 or 
// 20202). 

function checkPalindrome(num) {
// Convert number to string
    let stringNum = num.toString();
// Split string into array so it can be reversed then join back together    
    let reversedNum = stringNum.split("").reverse().join("");
// If forwards string strictly equals backwards string we have a palindrome
    if (stringNum === reversedNum) {
        console.log(`${num} is a palindrome.`);
    } else {
        console.log(`${num} is not a palindrome.`);
    }
}

checkPalindrome(2022);

// Activity 6: JS
// Take the string 
// “jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuh 
// gtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi”. Find the 
// index of a last vowel in the string.
// Create a variable called time, a variable called placeOfWork 
// and a variable called townOfHome. Create an if statement that 
// logs to the console where someone is at times of the day. E.g. if 
// the time is 7 I’m at home, at 8 I’m commuting, at 9 I’m at work. 



const d = new Date();
let time = d.getHours();
// Get the current hour from Date getHours to use in the function

let placeOfWork = "Code Nation";
let townOfHome = "Manchester";

function checkTime() {


    if (time > 7 && time < 9) {
        console.log(`I'm commuting to ${placeOfWork}`);
    }
    else if (time >= 9 && time < 17) {
        console.log(`I'm working at ${placeOfWork}`);
    }
    else if (time >= 17 && time < 19) {
        console.log(`I'm commuting to ${townOfHome}`);
    }
    else {
       console.log(`I'm at home in ${townOfHome}`); 
    }

    console.log(`${time}`);

}
checkTime();

// Activity 7:
// Take the string 
// “jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuh 
// gtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi”. Find the 
// index of a last vowel in the string

// Activity 8: JS
// Create two variables called num1 and num2.
// Create an if statement that checks if the result of the 
// sum is even. If it is return the number, otherwise return 
// the numbers multiplied together.

// Activity 9: JS
// Create a variable called word that takes a string. Create 
// an if statement that checks if the last letter is the same as 
// the first. If it is return true, otherwise return false.