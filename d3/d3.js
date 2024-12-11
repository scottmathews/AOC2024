const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf8');

// capture with groups
// mul(123, 456) and 123 and 456
const regexMul = /mul\((\d+),(\d+)\)/g;

// match 'do()', don't(), and mul(123, 456)
const regex = /do\(\)|don't\(\)|mul\((\d+),(\d+)\)/g;

// organized data
// for part 1
// const mul = Array.from(input.matchAll(regexMul)).map(match => ({
//     full: match[0],
//     num1: Number(match[1]),
//     num2: Number(match[2])
// }));

// for part number 2
// match everything and iterate through
let enabled = true;
let sum = 0;

for (const match of input.matchAll(regex)) {
    const [instruction, num1, num2] = match;
    
    if (instruction === "do()") {
        enabled = true;
    } else if (instruction === "don't()") {
        enabled = false;
    } else if (instruction.startsWith("mul") && enabled) {
        sum += Number(num1) * Number(num2);
    }
}; 
    
// Create products for part one
// const results = mul.map(item => ({
//     product: item.num1 * item.num2
// }));

// Create total of products
// const total = results.reduce((acc, item) => acc + item.product, 0);
// console.log('part1 ' + total); // part 1 174561379
// answer part number 2
console.log(sum); // 106921067
