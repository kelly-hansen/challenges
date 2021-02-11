'use strict';
const { Stack } = require('../../structures');

function count(stack) {
    const s2 = new Stack();
    let count = 0;
    while (true) {
        const value = stack.pop();
        if (value === undefined) {
            break;
        }
        s2.push(value);
        count++;
    }
    for (let id = 0; id < count; id++) {
        stack.push(s2.pop());
    }
    return count;
}

module.exports = exports = count;
