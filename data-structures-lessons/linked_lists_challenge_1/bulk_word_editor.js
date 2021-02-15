'use strict';
const { LinkedListNode } = require('../../structures');

class BulkWordEditor {
    constructor(message) {
        const messageArray = message.split(' ');
        this.messageList = new LinkedListNode(messageArray[0]);
        let currentListItem = this.messageList;
        for (let id = 1; id < messageArray.length; id++) {
            currentListItem.next = new LinkedListNode(messageArray[id]);
            currentListItem = currentListItem.next;
        }
    }

    render() {
        let message = this.messageList.data;
        let current = this.messageList;
        while (current.next !== null) {
            current = current.next;
            message += ' ' + current.data;
        }
        return message;
    }
}

module.exports = exports = BulkWordEditor;
