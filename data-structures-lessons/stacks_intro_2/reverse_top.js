'use strict';
const { Stack } = require('../../structures');

function reverseTop(stack, count) {
    const s2 = new Stack();
    let containsCount = false;
    for (let id = 0; id < count; id++) {
        if (stack.peek() === undefined) {
            break;
        }
        const value = stack.pop();
        s2.push(value);
        if (id === count - 1) {
            containsCount = true;
        }
    }
    if (!containsCount) {
        while (s2.peek() !== undefined) {
            stack.push(s2.pop());
        }
    } else {
        const s3 = new Stack();
        while (s2.peek() !== undefined) {
            s3.push(s2.pop());
        }
        while (s3.peek() !== undefined) {
            stack.push(s3.pop());
        }
    }
}

module.exports = exports = reverseTop;
