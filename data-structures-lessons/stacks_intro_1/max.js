'use strict';

function max(numberStack) {
    if (numberStack.peek() === undefined) {
        return -Infinity;
    }
    let result;
    while (numberStack.peek() !== undefined) {
        const current = numberStack.pop();
        if (result === undefined) {
            result = current;
        } else if (current > result) {
            result = current;
        }
    }
    return result;
}

module.exports = exports = max;
