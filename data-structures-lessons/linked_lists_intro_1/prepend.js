'use strict';
const { LinkedListNode } = require('../../structures');

function prepend(list, newHeadValue) {
    const headNode = new LinkedListNode(newHeadValue);
    headNode.next = list;
    return headNode;
}

module.exports = exports = prepend;
