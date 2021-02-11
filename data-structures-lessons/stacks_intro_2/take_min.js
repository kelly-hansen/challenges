'use strict';
const { Stack } = require('../../structures');

function takeMin(numberStack) {
    if (numberStack.peek() === undefined) {
        return Infinity;
    }
    const s2 = new Stack();
    let min;
    let minIndex;
    let count = 0;
    while (numberStack.peek() !== undefined) {
        const value = numberStack.pop();
        s2.push(value);
        if (min === undefined || value < min) {
            min = value;
            minIndex = count;
        }
        count++;
    }
    count--;
    while (s2.peek() !== undefined) {
        const value = s2.pop();
        if (count !== minIndex) {
            numberStack.push(value);
        }
        count--;
    }
    return min;
}

module.exports = exports = takeMin;
