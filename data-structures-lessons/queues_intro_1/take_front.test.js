const { expect } = require('chai');
const { resolve } = require('path');
const { Queue } = require(resolve(__dirname, '..', '..', 'structures'));
const takeFront = require(resolve(__dirname, 'take_front'));

describe('takeFront(queue):', function () {
    this.bail(false);
    context('when queue is empty,', () => {
        it('should return undefined', () => {
            const queue = new Queue();

            expect(takeFront(queue)).to.be.undefined;
        });
    });

    context('when queue is not empty,', () => {
        it('should return the front value of queue', () => {
            let queue = new Queue();
            queue.enqueue(13);

            expect(takeFront(queue)).to.equal(13);

            queue = new Queue();
            queue.enqueue(13);
            queue.enqueue(9);

            expect(takeFront(queue)).to.equal(13);

            queue = new Queue();
            queue.enqueue(null);
            queue.enqueue('');

            expect(takeFront(queue)).to.equal(null);
        });

        it('should remove the front value from queue', () => {
            const queue = new Queue();
            queue.enqueue('head');
            queue.enqueue('shoulders');
            queue.enqueue('arms');
            queue.enqueue('hands');

            takeFront(queue);

            expect(queue.dequeue()).to.equal('shoulders');
            expect(queue.dequeue()).to.equal('arms');
            expect(queue.dequeue()).to.equal('hands');
            expect(queue.peek()).to.be.undefined;
        });
    });
});
