const { expect } = require('chai');
const { resolve } = require('path');
const { Queue } = require(resolve(__dirname, '..', '..', 'structures'));
const count = require(resolve(__dirname, 'count'));

describe('count(queue):', function () {
    this.bail(false);
    it('should return the number of values in queue', () => {
        let queue = new Queue();

        expect(count(queue)).to.equal(0);

        queue = new Queue();
        queue.enqueue(34);
        queue.enqueue(36);
        queue.enqueue(45);
        queue.enqueue(4);
        queue.enqueue(98);

        expect(count(queue)).to.equal(5);

        queue = new Queue();
        queue.enqueue(null);
        queue.enqueue(false);
        queue.enqueue(0);
        queue.enqueue(NaN);
        queue.enqueue('');
        queue.enqueue(-0);

        expect(count(queue)).to.equal(6);
    });

    it('should restore queue to its original state', () => {
        const queue = new Queue();
        queue.enqueue(0);
        queue.enqueue(5);
        queue.enqueue(47);
        queue.enqueue(57);

        count(queue);

        expect(queue.dequeue()).to.equal(0);
        expect(queue.dequeue()).to.equal(5);
        expect(queue.dequeue()).to.equal(47);
        expect(queue.dequeue()).to.equal(57);
        expect(queue.peek()).to.be.undefined;
    });
});
