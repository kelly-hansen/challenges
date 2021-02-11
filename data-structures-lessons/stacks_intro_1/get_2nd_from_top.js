'use strict';

function get2ndFromTop(stack) {
    const topValue = stack.pop();
    let secondValue;
    if (topValue !== undefined) {
        secondValue = stack.peek();
        stack.push(topValue);
    }
    return secondValue;
}

module.exports = exports = get2ndFromTop;
