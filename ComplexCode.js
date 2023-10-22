/*
Filename: ComplexCode.js
Description: This code demonstrates a complex algorithm that performs a variety of mathematical operations.
*/

// Function to calculate the factorial of a number
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// Function to find the Nth Fibonacci number
function fibonacci(n) {
  let fib = [0, 1];
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib[n];
}

// Function to check if a number is prime
function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

// Function to calculate the maximum of two numbers
function max(a, b) {
  return a > b ? a : b;
}

// Function to calculate the minimum of two numbers
function min(a, b) {
  return a < b ? a : b;
}

// Function to calculate the average of an array of numbers
function average(numbers) {
  let sum = numbers.reduce((a, b) => a + b, 0);
  return sum / numbers.length;
}

// Function to convert hexadecimal number to decimal
function hexToDecimal(hex) {
  return parseInt(hex, 16);
}

// Function to convert decimal number to hexadecimal
function decimalToHex(decimal) {
  return decimal.toString(16);
}

// Function to check if a string is a palindrome
function isPalindrome(str) {
  let reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
}

// Main function
function main() {
  console.log(factorial(5)); // 120
  console.log(fibonacci(8)); // 21
  console.log(isPrime(13)); // true
  console.log(max(10, 5)); // 10
  console.log(min(10, 5)); // 5
  console.log(average([1, 2, 3, 4, 5])); // 3
  console.log(hexToDecimal('FF')); // 255
  console.log(decimalToHex(255)); // FF
  console.log(isPalindrome('racecar')); // true
}

// Run the main function
main();