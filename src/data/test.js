let obj = new Object();
obj.name= "John",
obj.age= 27,
obj.job= "Developer"



// let obj = {
//     name: "John",
//     age: 27,
//     job: "Developer"
// };




console.log(obj);

let obj = { name: "Sourav", age: 23 };

// Using Dot Notation
console.log(obj.name);

// Using Bracket Notation
console.log(obj["age"]);

// Modify Object Properties
obj.name = "Lisa";

// Add New Properties
obj.city = "Mumbai";

// Delete Properties
delete obj.city;




// Array

// Create an Array
let arr = ["apple", "banana", "cherry"];
let arr2 = new Array("apple", "banana", "cherry");

// Access Array Elements
console.log(arr[0]);

// Modify Array Elements
arr[1] = "orange";

// Add Array Elements
arr.push("kiwi");

// Delete Array Elements
delete arr[2];

//Popular array functions

//1. map
let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(function(number) {
    return number * 2;
});
console.log(doubled);

//2. filter
let evenNumbers = numbers.filter(function(number) {
    return number % 2 === 0;
});
console.log(evenNumbers);

//3. reduce
let sum = numbers.reduce(function(acc, number) {
    return acc + number;
}, 0);
console.log(sum);

//4. forEach
numbers.forEach(function(number) {
    console.log(number);
});

//5. find
let found = numbers.find(function(number) {
    return number === 3;
});
console.log(found);

//6. sort
let sorted = numbers.sort(function(a, b) {
    return a - b;
});
console.log(sorted);

//7. reverse
let reversed = numbers.reverse();
console.log(reversed);

//8. join
let joined = numbers.join(", ");
console.log(joined);


// Functions

// Define a Function
function greet(name) {
    return "Hello, " + name + "!";
}

// Call a Function
console.log(greet("John"));

// Arrow Functions
const add = (a, b) => a + b;
console.log(add(5, 3));

// Default Parameters
function greet(name = "Guest") {
    return "Hello, " + name + "!";
}

console.log(greet());

leftImg.src = 'src/assets/logos/stupa-logo-dark.png';

img.src = `src/assets/flags/${player.country.toLowerCase()}.png`;