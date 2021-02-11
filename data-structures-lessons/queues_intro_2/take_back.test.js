const { expect } = require('chai');
const { resolve } = require('path');
const { Queue } = require(resolve(__dirname, '..', '..', 'structures'));
const takeBack = require(resolve(__dirname, 'take_back'));

describe('takeBack(queue):', function () {
    this.bail(false);
    context('when queue is empty,', () => {
        it('should return undefined', () => {
            const queue = new Queue();

            expect(takeBack(queue)).to.be.undefined;
        });
    });

    context('when queue is not empty,', () => {
        it('should return the back value of queue', () => {
            let queue = new Queue();
            queue.enqueue(45);
            queue.enqueue(54);
            queue.enqueue(121);

            expect(takeBack(queue)).to.equal(121);

            queue = new Queue();
            queue.enqueue('');
            queue.enqueue(0);
            queue.enqueue(false);
            queue.enqueue(NaN);
            queue.enqueue(null);

            expect(takeBack(queue)).to.equal(null);
        });

        it('should only remove the back value of queue', () => {
            const queue = new Queue();
            queue.enqueue(9);
            queue.enqueue(27);
            queue.enqueue(19);
            queue.enqueue(0);
            queue.enqueue(67);

            takeBack(queue);

            expect(queue.dequeue()).to.equal(9);
            expect(queue.dequeue()).to.equal(27);
            expect(queue.dequeue()).to.equal(19);
            expect(queue.dequeue()).to.equal(0);
            expect(queue.peek()).to.be.undefined;
        });
    });
});
