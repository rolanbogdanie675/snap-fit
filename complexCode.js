// Filename: complexCode.js
// Content: Elaborate and complex code

// Class representing a Book
class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getBookInfo() {
    return `${this.title} by ${this.author}, published in ${this.year}`;
  }
}

// Function to calculate factorial recursively
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// String manipulation helper function
function reverseString(str) {
  let reversedStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str.charAt(i);
  }
  return reversedStr;
}

// Array of books
const books = [
  new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925),
  new Book("To Kill a Mockingbird", "Harper Lee", 1960),
  new Book("1984", "George Orwell", 1949)
];

// Print book information
books.forEach(book => {
  console.log(book.getBookInfo());
});

// Calculate factorial of 10
const factorialOf10 = factorial(10);
console.log(`Factorial of 10: ${factorialOf10}`);

// Reverse a string
const reversedString = reverseString("Hello, World!");
console.log(`Reversed string: ${reversedString}`);

// Simulating a complex algorithm
function complexAlgorithm(arr) {
  let sum = 0;
  let product = 1;
  
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    product *= arr[i];
  }
  
  return {
    sum: sum,
    product: product
  };
}

const numbers = [1, 2, 3, 4, 5];
const result = complexAlgorithm(numbers);
console.log(`Sum: ${result.sum}`);
console.log(`Product: ${result.product}`);

// Another complex functionality...
// ...
// ...

// End of complexCode.js