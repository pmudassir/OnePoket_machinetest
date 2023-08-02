// Task 2: Data Manipulation
// To calculate the sum of all the numbers in an array, you can use the following function:

function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

const numbers = [1, 2, 3, 4, 5];
const totalSum = sumArray(numbers);
console.log('Sum:', totalSum);