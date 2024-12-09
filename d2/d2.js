const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf8');
const lines = input.split(/\r?\n/);


const results = lines.map(val => {
    const numbers = val.split(/\s+/).map(Number);
    const numIncreasing = numbers.every((num, index) => index === 0 || num >= numbers[index - 1]);
    const numDecreasing = numbers.every((num, index) => index === 0 || num <= numbers[index - 1]);

    if (numIncreasing || numDecreasing) {
        const numSafe = numbers.every((num, index) => {
            if (index === numbers.length - 1) return true;
            const diff = Math.abs(num - numbers[index + 1]);
            return diff >= 1 && diff <= 3;
        });

        if (numSafe) {
            return true;
        }
    }
    // for part number 2
    for (let i = 0; i < numbers.length; i++) {
        const modifiedNumbers = numbers.filter((_, index) => index !== i);
        const isModifiedIncreasing = modifiedNumbers.every((num, index) => index === 0 || num >= modifiedNumbers[index - 1]);
        const isModifiedDecreasing = modifiedNumbers.every((num, index) => index === 0 || num <= modifiedNumbers[index - 1]);

        if (isModifiedIncreasing || isModifiedDecreasing) {
            const isModifiedSafe = modifiedNumbers.every((num, index) => {
                if (index === modifiedNumbers.length - 1) return true;
                const diff = Math.abs(num - modifiedNumbers[index + 1]);
                return diff >= 1 && diff <= 3;
            });

            if (isModifiedSafe) {
                return true;
            }
        }
    }

    return false;
});

const numSafeCount = results.filter(result => result).length;
console.log(`Number of safe reports modified: ${numSafeCount}`);
