'use strict';

function swapTopTwo(stack) {
    const topValue = stack.pop();
    if (topValue === undefined) {
        return;
    }
    const secondValue = stack.pop();
    if (secondValue === undefined) {
        stack.push(topValue);
        return;
    }
    stack.push(topValue);
    stack.push(secondValue);
}

module.exports = exports = swapTopTwo;
