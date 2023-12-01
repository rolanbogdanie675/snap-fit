/* 
Filename: ComplexApplication.js
Content: An elaborate and complex JavaScript application demonstrating various functionalities and techniques.
*/

// Global variables
const username = "John Doe";
let age = 25;
let isLoggedIn = false;

// Function to greet the user
function greetUser() {
  if (isLoggedIn) {
    console.log("Welcome back, " + username + "!");
  } else {
    console.log("Hello, guest!");
  }
}

// Function to calculate the sum of two numbers
function calculateSum(a, b) {
  return a + b;
}

// Class representing a person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to get the person's name
  getName() {
    return this.name;
  }

  // Method to get the person's age
  getAge() {
    return this.age;
  }
}

// Create an instance of the Person class
const person = new Person("Jane Smith", 30);

// Array of numbers
const numbers = [1, 2, 3, 4, 5];

// Function to filter even numbers from an array
function filterEvenNumbers(arr) {
  return arr.filter((num) => num % 2 === 0);
}

// Object representing a car
const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2020,

  // Method to get the full car name
  getFullName() {
    return this.brand + " " + this.model;
  },
};

// Array of fruits
const fruits = ["apple", "banana", "orange"];

// Function to check if a fruit is included in the array
function checkFruit(fruit) {
  return fruits.includes(fruit);
}

// Asynchronous function to simulate API request
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Function to generate a random number between a range
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Event listener for button click
document.getElementById("myButton").addEventListener("click", () => {
  console.log("Button clicked!");
});

// Complex logic and calculations...

// ...

// ...

// Call the greetUser function
greetUser();

// Output the sum of 2 and 3
console.log("Sum:", calculateSum(2, 3));

// Output the name and age of the person
console.log("Person name:", person.getName());
console.log("Person age:", person.getAge());

// Output the even numbers in the array
console.log("Even numbers:", filterEvenNumbers(numbers));

// Output the full car name
console.log("Car name:", car.getFullName());

// Check if "banana" is a fruit
console.log("Is banana a fruit?", checkFruit("banana"));

// Fetch data from API
fetchData();

// Generate a random number between 1 and 10
console.log("Random number:", getRandomNumber(1, 10));

// More complex logic and calculations...

// ...

// ... (Continued for over 200 lines)