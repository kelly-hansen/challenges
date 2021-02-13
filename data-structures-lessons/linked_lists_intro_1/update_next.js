'use strict';

function updateNext(list, newNextValue) {
    if (list && list.next) {
        list.next.data = newNextValue;
    }
}

module.exports = exports = updateNext;
