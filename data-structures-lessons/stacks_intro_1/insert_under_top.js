'use strict';

function insertUnderTop(stack, value) {
    const topValue = stack.pop();
    if (topValue !== undefined) {
        stack.push(value);
        stack.push(topValue);
    }
}

module.exports = exports = insertUnderTop;
