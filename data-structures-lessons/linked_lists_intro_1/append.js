'use strict';
const { LinkedListNode } = require('../../structures');

function append(list, newTailValue) {
    if (!list) {
        return new LinkedListNode(newTailValue);
    }
    let current = list;
    while (current.next !== null) {
        current = current.next;
    }
    current.next = new LinkedListNode(newTailValue);
    return list;
}

module.exports = exports = append;
