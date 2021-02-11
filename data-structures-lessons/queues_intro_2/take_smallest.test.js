const { expect } = require('chai');
const { resolve } = require('path');
const { Queue } = require(resolve(__dirname, '..', '..', 'structures'));
const takeSmallest = require(resolve(__dirname, 'take_smallest'));

describe('takeSmallest(numberQueue):', function () {
    this.bail(false);
    context('when numberQueue is empty,', () => {
        it('should return Infinity', () => {
            expect(takeSmallest(new Queue())).to.equal(Infinity);
        });
    });

    context('when numberQueue is not empty,', () => {
        it('should return the smallest of the values in numberQueue', () => {
            let queue = new Queue();
            queue.enqueue(-4848);
            queue.enqueue(-567);
            queue.enqueue(-7456);
            queue.enqueue(-475);
            queue.enqueue(0);
            queue.enqueue(-567);
            queue.enqueue(-4756);

            expect(takeSmallest(queue)).to.equal(-7456);

            queue = new Queue();
            queue.enqueue(7189);
            queue.enqueue(4156);
            queue.enqueue(8635);

            expect(takeSmallest(queue)).to.equal(4156);

            queue = new Queue();
            queue.enqueue(Infinity);
            queue.enqueue(Infinity);
            queue.enqueue(Infinity);

            expect(takeSmallest(queue)).to.equal(Infinity);
        });

        it('should restore all other values to numberQueue', () => {
            const queue = new Queue();
            queue.enqueue(-4576);
            queue.enqueue(-3626);
            queue.enqueue(-8456);
            queue.enqueue(-2354);
            queue.enqueue(-8456);
            queue.enqueue(0);
            queue.enqueue(-3456);

            takeSmallest(queue);

            expect(queue.dequeue()).to.equal(-4576);
            expect(queue.dequeue()).to.equal(-3626);
            expect(queue.dequeue()).to.equal(-2354);
            expect(queue.dequeue()).to.equal(-8456);
            expect(queue.dequeue()).to.equal(0);
            expect(queue.dequeue()).to.equal(-3456);
            expect(queue.peek()).to.be.undefined;
        });
    });
});
