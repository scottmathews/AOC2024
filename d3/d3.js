const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf8');

// capture with groups
const regex = /mul\((\d+),(\d+)\)/g;
// organized data
const mul = Array.from(input.matchAll(regex)).map(match => ({
    full: match[0],
    num1: Number(match[1]),
    num2: Number(match[2])
}));

// Create products
const results = mul.map(item => ({
    product: item.num1 * item.num2
}));

// Create total of products
const total = results.reduce((acc, item) => acc + item.product, 0);
console.log('part1 ' + total); // part1 174561379
