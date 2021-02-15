'use strict';

function swapFront(list) {
    if (list && list.next) {
        const newHead = list.next;
        const third = newHead.next;
        list.next = third;
        newHead.next = list;
        return newHead;
    }
    return list;
}

module.exports = exports = swapFront;
