console.log("JAVA SCRIPT ALL CONCEPTS PRACTISE");

// 1. Variables and Data Types
let name = "prameela";         // Text (string)
const age = 20;            // Number
var isStudent= true;      // Boolean (true or false)

let height = 5.8;          // Decimal number
let colors = ["red", "green", "blue"];  // Array (list of items)
let emptyValue = null;     // Null means no value
let notDefined;            // Undefined (has no value yet)
// in js no character data type,int,float only number abd string

console.log("Name:", name);
console.log("Age:", age);
console.log("Is a student:", isStudent);
console.log("Height:", height);
console.log("Colors:", colors);
console.log("Empty value:", emptyValue);
console.log("Not defined:", notDefined);


// 2. Functions
function greet(userName) {
  return "Hello, " + userName + "!";
}

function addNumbers(a, b) {
  return a + b;
}

console.log(greet("Alice"));      // Call greet function
console.log("Sum is:", addNumbers(5, 3)); // Call addNumbers function


// 3. Arrays and Loops
let fruits = ["apple", "banana", "mango"];

console.log("Fruits using for loop:");
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);  
}

console.log("Fruits using forEach:");
fruits.forEach(function(fruit) {
  console.log(fruit);
});

fruits.push("orange");   // Add to the end
fruits.pop();            // Remove last item  
console.log(fruits);


// 4. Objects
let person = {
  name: "alice",
  age: 25,
  city: "New York",
  showDetails: function() {
    console.log(this.name + " is " + this.age + " years old and lives in " + this.city);
  }
};

person.showDetails();   // Call the function inside object


// 5. Conditional Statements
let marks = 70;

if (marks >= 90) {
  console.log("Grade: A");
} else if (marks >= 75) {
  console.log("Grade: B");
} else if (marks >= 60) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

let day = "Friday";

if (day === "Saturday" || day === "Sunday") {
  console.log("It's the weekend!");
} else {
  console.log("It's a weekday.");
}


// 6. Arrow Functions
const multiply = (a, b) => a * b;
const sayHi = () => console.log("Hi!");

console.log("Multiplication result:", multiply(4, 6));
sayHi();  // Call the arrow function

const numbers = [1, 2, 3];
const squares = numbers.map(n => n * n);
console.log("Squares:", squares);
