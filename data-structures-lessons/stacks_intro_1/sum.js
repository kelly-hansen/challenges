'use strict';

function sum(numberStack) {
    let result = 0;
    while (numberStack.peek() !== undefined) {
        result += numberStack.pop();
    }
    return result;
}

module.exports = exports = sum;
