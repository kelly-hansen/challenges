const { expect } = require('chai');
const { resolve } = require('path');
const { Queue } = require(resolve(__dirname, '..', '..', 'structures'));
const addToBack = require(resolve(__dirname, 'add_to_back'));

describe('addToBack(queue, value):', function () {
    this.bail(false);
    it('should add value to the back of queue', () => {
        const queue = new Queue();

        addToBack(queue, 81);

        expect(queue.peek()).to.equal(81);

        addToBack(queue, 19);

        expect(queue.peek()).to.equal(81);

        addToBack(queue, 27);

        expect(queue.dequeue()).to.equal(81);
        expect(queue.dequeue()).to.equal(19);
        expect(queue.dequeue()).to.equal(27);
        expect(queue.peek()).to.be.undefined;
    });
});
