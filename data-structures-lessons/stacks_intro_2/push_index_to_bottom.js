'use strict';
const { Stack } = require('../../structures');

function pushIndexToBottom(stack, index) {
    const s2 = new Stack();
    let valueAtIndex;
    for (let id = 0; stack.peek() !== undefined; id++) {
        const value = stack.pop();
        if (id === index) {
            valueAtIndex = value;
        } else {
            s2.push(value);
        }
    }
    if (valueAtIndex !== undefined) {
        stack.push(valueAtIndex);
    }
    while (s2.peek() !== undefined) {
        stack.push(s2.pop());
    }
}

module.exports = exports = pushIndexToBottom;
