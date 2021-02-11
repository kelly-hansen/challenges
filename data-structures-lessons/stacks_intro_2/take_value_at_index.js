'use strict';
const { Stack } = require('../../structures');

function takeValueAtIndex(stack, index) {
    const s2 = new Stack();
    for (let id = 0; id < index; id++) {
        const value = stack.pop();
        if (value === undefined) {
            break;
        }
        s2.push(value);
    }
    const removed = stack.pop();
    while (s2.peek() !== undefined) {
        stack.push(s2.pop());
    }
    return removed;
}

module.exports = exports = takeValueAtIndex;
