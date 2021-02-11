const { expect } = require('chai');
const { resolve } = require('path');
const { Queue } = require(resolve(__dirname, '..', '..', 'structures'));
const postpone = require(resolve(__dirname, 'postpone'));

describe('postpone(queue):', function () {
    this.bail(false);
    context('when queue is empty,', () => {
        it('should do nothing', () => {
            const queue = new Queue();

            expect(() => postpone(queue)).to.not.throw();
            expect(queue.peek()).to.be.undefined;
        });
    });

    context('when queue is not empty,', () => {
        it('should move the front value to the back of queue', () => {
            let queue = new Queue();
            queue.enqueue(13);

            postpone(queue);

            expect(queue.dequeue()).to.equal(13);
            expect(queue.dequeue()).to.be.undefined;

            queue = new Queue();
            queue.enqueue(9);
            queue.enqueue(53);
            queue.enqueue(8);

            postpone(queue);

            expect(queue.dequeue()).to.equal(53);
            expect(queue.dequeue()).to.equal(8);
            expect(queue.dequeue()).to.equal(9);
            expect(queue.dequeue()).to.be.undefined;

            queue = new Queue();
            queue.enqueue(null);
            queue.enqueue(false);
            queue.enqueue('');
            queue.enqueue(0);
            queue.enqueue('empty');

            postpone(queue);
            postpone(queue);
            postpone(queue);
            postpone(queue);

            expect(queue.dequeue()).to.equal('empty');
            expect(queue.dequeue()).to.equal(null);
            expect(queue.dequeue()).to.equal(false);
            expect(queue.dequeue()).to.equal('');
            expect(queue.dequeue()).to.equal(0);
            expect(queue.dequeue()).to.be.undefined;
        });
    });
});
