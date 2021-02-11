const { expect } = require('chai');
const { resolve } = require('path');
const { Queue } = require(resolve(__dirname, '..', '..', 'structures'));
const unzip = require(resolve(__dirname, 'unzip'));

describe('unzip(queue):', function () {
    this.bail(false);
    context('when queue is empty,', () => {
        it('should do nothing', () => {
            const queue = new Queue();

            expect(() => unzip(queue)).to.not.throw();
            expect(queue.peek()).to.be.undefined;
        });
    });

    context('when queue is not empty,', () => {
        it('should unzip the values in queue into the front and back halves of queue, without changing the front value of queue', () => {
            const queue = new Queue();
            queue.enqueue(0);
            queue.enqueue(1);
            queue.enqueue(2);
            queue.enqueue(3);
            queue.enqueue(4);

            unzip(queue);

            expect(queue.dequeue()).to.equal(0);
            expect(queue.dequeue()).to.equal(2);
            expect(queue.dequeue()).to.equal(4);
            expect(queue.dequeue()).to.equal(1);
            expect(queue.dequeue()).to.equal(3);
            expect(queue.peek()).to.be.undefined;

            queue.enqueue(9);
            queue.enqueue(27);
            queue.enqueue(19);
            queue.enqueue(0);
            queue.enqueue(67);
            queue.enqueue(49);
            queue.enqueue(48);
            queue.enqueue(62);
            queue.enqueue(-7);
            queue.enqueue(2);

            unzip(queue);

            expect(queue.dequeue()).to.equal(9);
            expect(queue.dequeue()).to.equal(19);
            expect(queue.dequeue()).to.equal(67);
            expect(queue.dequeue()).to.equal(48);
            expect(queue.dequeue()).to.equal(-7);
            expect(queue.dequeue()).to.equal(27);
            expect(queue.dequeue()).to.equal(0);
            expect(queue.dequeue()).to.equal(49);
            expect(queue.dequeue()).to.equal(62);
            expect(queue.dequeue()).to.equal(2);
            expect(queue.peek()).to.be.undefined;
        });
    });
});
