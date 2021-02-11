const { expect } = require('chai');
const { resolve } = require('path');
const { Queue } = require(resolve(__dirname, '..', '..', 'structures'));
const takeValueAtIndex = require(resolve(__dirname, 'take_value_at_index'));

describe('takeValueAtIndex(queue, index):', function () {
    this.bail(false);
    context('when queue is empty,', () => {
        it('should return undefined', () => {
            const queue = new Queue();

            expect(takeValueAtIndex(queue, 0)).to.be.undefined;
        });
    });

    context('when queue is not empty,', () => {
        it('should remove and return the front value in queue, after recycling index values to the back', () => {
            let queue = new Queue();
            queue.enqueue(84);

            expect(takeValueAtIndex(queue, 6)).to.equal(84);
            expect(queue.peek()).to.be.undefined;

            queue = new Queue();
            queue.enqueue(37);
            queue.enqueue(45);
            queue.enqueue(67);
            queue.enqueue(0);
            queue.enqueue(71);
            queue.enqueue(3);

            expect(takeValueAtIndex(queue, 3)).to.equal(0);
            expect(queue.dequeue()).to.equal(71);
            expect(queue.dequeue()).to.equal(3);
            expect(queue.dequeue()).to.equal(37);
            expect(queue.dequeue()).to.equal(45);
            expect(queue.dequeue()).to.equal(67);
            expect(queue.peek()).to.be.undefined;
        });
    });
});
