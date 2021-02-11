const { expect } = require('chai');
const { resolve } = require('path');
const { Queue } = require(resolve(__dirname, '..', '..', 'structures'));
const takeSmaller = require(resolve(__dirname, 'take_smaller'));

describe('takeSmaller(numberQueue):', function () {
    this.bail(false);
    context('when queue has no values,', () => {
        it('should return undefined', () => {
            const queue = new Queue();

            expect(takeSmaller(queue)).to.be.undefined;
        });
    });

    context('when queue has one value,', () => {
        it('should return the value in queue', () => {
            let queue = new Queue();
            queue.enqueue(89);

            expect(takeSmaller(queue)).to.equal(89);

            queue = new Queue();
            queue.enqueue(0);

            expect(takeSmaller(queue)).to.equal(0);
        });

        it('should remove the value from queue', () => {
            const queue = new Queue();
            queue.enqueue(12);

            takeSmaller(queue);

            expect(queue.peek()).to.be.undefined;

            queue.enqueue(0);

            takeSmaller(queue);

            expect(queue.peek()).to.be.undefined;
        });
    });

    context('when queue has at least two values,', () => {
        context('and the first value is smaller than the second', () => {
            it('should return the first value', () => {
                let queue = new Queue();
                queue.enqueue(48);
                queue.enqueue(67);

                expect(takeSmaller(queue)).to.equal(48);

                queue = new Queue();
                queue.enqueue(-89);
                queue.enqueue(0);
                queue.enqueue(35);

                expect(takeSmaller(queue)).to.equal(-89);
            });

            it('should remove the first value from queue and move the second value to the back of queue', () => {
                let queue = new Queue();
                queue.enqueue(41);
                queue.enqueue(189);

                takeSmaller(queue);

                expect(queue.dequeue()).to.equal(189);
                expect(queue.peek()).to.be.undefined;

                queue = new Queue();
                queue.enqueue(0);
                queue.enqueue(1);
                queue.enqueue(4);
                queue.enqueue(18);

                takeSmaller(queue);

                expect(queue.dequeue()).to.equal(4);
                expect(queue.dequeue()).to.equal(18);
                expect(queue.dequeue()).to.equal(1);
                expect(queue.peek()).to.be.undefined;
            });
        });

        context('and the first value is equal to the second', () => {
            it('should return the value', () => {
                let queue = new Queue();
                queue.enqueue(8);
                queue.enqueue(8);

                expect(takeSmaller(queue)).to.equal(8);

                queue = new Queue();
                queue.enqueue(0);
                queue.enqueue(0);
                queue.enqueue(0);

                expect(takeSmaller(queue)).to.equal(0);
            });

            it('should remove one value from queue and move one value to the back of queue', () => {
                let queue = new Queue();
                queue.enqueue(9);
                queue.enqueue(9);

                takeSmaller(queue);

                expect(queue.dequeue()).to.equal(9);
                expect(queue.peek()).to.be.undefined;

                queue = new Queue();
                queue.enqueue(73);
                queue.enqueue(73);
                queue.enqueue(3);
                queue.enqueue(9);

                takeSmaller(queue);

                expect(queue.dequeue()).to.equal(3);
                expect(queue.dequeue()).to.equal(9);
                expect(queue.dequeue()).to.equal(73);
                expect(queue.peek()).to.be.undefined;
            });
        });

        context('and the first value is larger than the second', () => {
            it('should return the second value', () => {
                let queue = new Queue();
                queue.enqueue(52);
                queue.enqueue(12);

                expect(takeSmaller(queue)).to.equal(12);

                queue = new Queue();
                queue.enqueue(23);
                queue.enqueue(0);
                queue.enqueue(9);

                expect(takeSmaller(queue)).to.equal(0);
            });

            it('should move the first value to the back of queue and remove the second value from queue', () => {
                let queue = new Queue();
                queue.enqueue(19);
                queue.enqueue(-2);

                takeSmaller(queue);

                expect(queue.dequeue()).to.equal(19);
                expect(queue.peek()).to.be.undefined;

                queue = new Queue();
                queue.enqueue(5);
                queue.enqueue(4);
                queue.enqueue(3);
                queue.enqueue(2);

                takeSmaller(queue);

                expect(queue.dequeue()).to.equal(3);
                expect(queue.dequeue()).to.equal(2);
                expect(queue.dequeue()).to.equal(5);
                expect(queue.peek()).to.be.undefined;
            });
        });
    });
});
