const { expect } = require('chai');
const { resolve } = require('path');
const { Queue } = require(resolve(__dirname, '..', '..', 'structures'));
const takeNextSmallest = require(resolve(__dirname, 'take_next_smallest'));

describe('takeNextSmallest(numberQueue):', function () {
    this.bail(false);
    context('when queue has no numbers,', () => {
        it('should return undefined', () => {
            const queue = new Queue();

            expect(takeNextSmallest(queue)).to.be.undefined;
        });
    });

    context('when queue has one number,', () => {
        it('should return the value in queue', () => {
            let queue = new Queue();
            queue.enqueue(89);

            expect(takeNextSmallest(queue)).to.equal(89);

            queue = new Queue();
            queue.enqueue(0);

            expect(takeNextSmallest(queue)).to.equal(0);
        });

        it('should remove the value from queue', () => {
            const queue = new Queue();
            queue.enqueue(12);

            takeNextSmallest(queue);

            expect(queue.peek()).to.be.undefined;

            queue.enqueue(0);

            takeNextSmallest(queue);

            expect(queue.peek()).to.be.undefined;
        });
    });

    context('when queue has at least two numbers,', () => {
        it('should return the first number <= the following number', () => {
            let queue = new Queue();
            queue.enqueue(13);
            queue.enqueue(64);
            queue.enqueue(-19);
            queue.enqueue(94);

            expect(takeNextSmallest(queue)).to.equal(13);

            queue = new Queue();
            queue.enqueue(54);
            queue.enqueue(36);
            queue.enqueue(34);
            queue.enqueue(0);
            queue.enqueue(-18);
            queue.enqueue(-37);
            queue.enqueue(-36);
            queue.enqueue(63);

            expect(takeNextSmallest(queue)).to.equal(-37);

        });

        it('should move each number > the following number to the back of numberQueue until it finds one that isn\'t, then remove that number', () => {
            const queue = new Queue();
            queue.enqueue(51);
            queue.enqueue(63);
            queue.enqueue(35);
            queue.enqueue(41);

            takeNextSmallest(queue);

            expect(queue.dequeue()).to.equal(63);
            expect(queue.dequeue()).to.equal(35);
            expect(queue.dequeue()).to.equal(41);
            expect(queue.peek()).to.be.undefined;

            queue.enqueue(88);
            queue.enqueue(78);
            queue.enqueue(63);
            queue.enqueue(101);
            queue.enqueue(170);
            queue.enqueue(325);
            queue.enqueue(180);
            queue.enqueue(102);
            queue.enqueue(80);
            queue.enqueue(60);
            queue.enqueue(53);
            queue.enqueue(49);

            takeNextSmallest(queue);
            takeNextSmallest(queue);
            takeNextSmallest(queue);

            expect(queue.dequeue()).to.equal(325);
            expect(queue.dequeue()).to.equal(180);
            expect(queue.dequeue()).to.equal(102);
            expect(queue.dequeue()).to.equal(80);
            expect(queue.dequeue()).to.equal(60);
            expect(queue.dequeue()).to.equal(53);
            expect(queue.dequeue()).to.equal(49);
            expect(queue.dequeue()).to.equal(88);
            expect(queue.dequeue()).to.equal(78);
            expect(queue.peek()).to.be.undefined;
        });
    });
});
