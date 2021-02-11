'use strict';
const { Stack } = require('../../structures');

function pushMaxToBottom(numberStack) {
    if (numberStack.peek() === undefined) {
        return;
    }
    const s2 = new Stack();
    let max;
    let maxIndex;
    let count = 0;
    while (numberStack.peek() !== undefined) {
        const value = numberStack.pop();
        s2.push(value);
        if (max === undefined || value >= max) {
            max = value;
            maxIndex = count;
        }
        count++;
    }
    count--;
    if (max !== undefined) {
        numberStack.push(max);
    }
    while (s2.peek() !== undefined) {
        const value = s2.pop();
        if (count !== maxIndex) {
            numberStack.push(value);
        }
        count--;
    }
}

module.exports = exports = pushMaxToBottom;
