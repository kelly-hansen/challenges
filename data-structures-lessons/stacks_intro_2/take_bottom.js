'use strict';

const { Stack } = require('../../structures');

function takeBottom(stack) {
    const s2 = new Stack();
    while (stack.peek() !== undefined) {
        const value = stack.pop();
        s2.push(value);
    }
    const bottom = s2.pop();
    while (s2.peek() !== undefined) {
        stack.push(s2.pop());
    }
    return bottom;
}

module.exports = exports = takeBottom;
