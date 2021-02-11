'use strict';

function count(stack) {
    let count = 0;
    while (stack.pop() !== undefined) {
        count++;
    }
    return count;
}

module.exports = exports = count;
