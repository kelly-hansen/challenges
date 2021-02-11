const { expect } = require('chai');
const { resolve } = require('path');
const { Queue } = require(resolve(__dirname, '..', '..', 'structures'));
const getFront = require(resolve(__dirname, 'get_front'));

describe('getFront(queue):', function () {
    this.bail(false);
    context('when queue is empty,', () => {
        it('should return undefined', () => {
            const queue = new Queue();

            expect(getFront(queue)).to.be.undefined;
        });
    });

    context('when queue is not empty,', () => {
        it('should return the front value of queue', () => {
            let queue = new Queue();
            queue.enqueue(13);

            expect(getFront(queue)).to.equal(13);

            queue = new Queue();
            queue.enqueue(13);
            queue.enqueue(9);

            expect(getFront(queue)).to.equal(13);

            queue = new Queue();
            queue.enqueue(null);
            queue.enqueue('');

            expect(getFront(queue)).to.equal(null);
        });

        it('should not modify queue', () => {
            const queue = new Queue();
            queue.enqueue('head');
            queue.enqueue('shoulders');
            queue.enqueue('arms');
            queue.enqueue('hands');

            getFront(queue);

            expect(queue.dequeue()).to.equal('head');
            expect(queue.dequeue()).to.equal('shoulders');
            expect(queue.dequeue()).to.equal('arms');
            expect(queue.dequeue()).to.equal('hands');
            expect(queue.peek()).to.be.undefined;
        });
    });
});
