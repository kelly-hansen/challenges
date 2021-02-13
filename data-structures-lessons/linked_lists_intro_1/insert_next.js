'use strict';
const { LinkedListNode } = require('../../structures');

function insertNext(list, newNextValue) {
    if (!list) {
        return;
    }
    const listSecond = list.next;
    list.next = new LinkedListNode(newNextValue);
    list.next.next = listSecond;
}

module.exports = exports = insertNext;
