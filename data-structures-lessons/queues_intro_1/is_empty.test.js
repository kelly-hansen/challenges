const { expect } = require('chai');
const { resolve } = require('path');
const { Queue } = require(resolve(__dirname, '..', '..', 'structures'));
const isEmpty = require(resolve(__dirname, 'is_empty'));

describe('isEmpty(queue):', function () {
    this.bail(false);
    context('when queue is empty,', () => {
        it('should return true', () => {
            const queue = new Queue();

            expect(isEmpty(queue)).to.be.true;
        });
    });

    context('when queue is not empty,', () => {
        it('should return false', () => {
            let queue = new Queue();
            queue.enqueue(13);

            expect(isEmpty(queue)).to.be.false;

            queue = new Queue();
            queue.enqueue(9);

            expect(isEmpty(queue)).to.be.false;

            queue = new Queue();
            queue.enqueue('');

            expect(isEmpty(queue)).to.be.false;

            queue = new Queue();
            queue.enqueue(null);

            expect(isEmpty(queue)).to.be.false;
        });

        it('should not modify queue', () => {
            const queue = new Queue();
            queue.enqueue('head');
            queue.enqueue('shoulders');
            queue.enqueue('arms');
            queue.enqueue('hands');

            isEmpty(queue);

            expect(queue.dequeue()).to.equal('head');
            expect(queue.dequeue()).to.equal('shoulders');
            expect(queue.dequeue()).to.equal('arms');
            expect(queue.dequeue()).to.equal('hands');
            expect(queue.peek()).to.be.undefined;
        });
    });
});
