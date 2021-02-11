'use strict';
const { Stack } = require('../../structures');

function getMax(numberStack) {
    if (numberStack.peek() === undefined) {
        return -Infinity;
    }
    const s2 = new Stack();
    let max;
    while (numberStack.peek() !== undefined) {
        const value = numberStack.pop();
        s2.push(value);
        if (max === undefined || value > max) {
            max = value;
        }
    }
    while (s2.peek() !== undefined) {
        numberStack.push(s2.pop());
    }
    return max;
}

module.exports = exports = getMax;
