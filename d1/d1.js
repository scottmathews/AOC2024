// get numbers
const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf8');
const lines = input.split('\n');

// make arrays
const numA = [];
const numB = [];
lines.forEach(line => {
  const [num1, num2] = line.split(/\s+/);
  numA.push(num1);
  numB.push(num2);
});

// make a quick sort I wanted to practice
// cheating because I'm following this
// https://github.com/telestrial/Self-Guided-BootCamp/tree/main/JS-Algorithms-Data-Structures
const swap = (arr, id1, id2) => {
  [arr[id1], arr[id2]] = [arr[id2], arr[id1]];
};

const pivot = (arr, start = 0, end = arr.length - 1) => {
  let pivot = arr[start];
  let pivotIndex = start;
  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      pivotIndex++;
      swap(arr, pivotIndex, i);
    }
  }
  swap(arr, start, pivotIndex);
  return pivotIndex;
};

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
};

// sort
quickSort(numA);
quickSort(numB);

// calculate
const numDiff = numA.map((value, index) => Math.abs(value - numB[index]));
const totalDiff = numDiff.reduce((acc, val) => acc + val, 0);
console.log('part1 ' + totalDiff); // part1 1388114

const matchDiff = numA.map(valueA => {
  const matches = numB.filter(valueB => valueA === valueB).length;
  return valueA * matches;  
});

const totalMatch = matchDiff.reduce((acc, val) => acc + val, 0);
console.log('part 2 ' + totalMatch); // part 2 23529853