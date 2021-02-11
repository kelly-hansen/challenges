const { expect } = require('chai');
const { resolve } = require('path');
const { Queue } = require(resolve(__dirname, '..', '..', 'structures'));
const take2nd = require(resolve(__dirname, 'take_2nd'));

describe('take2nd(queue):', function () {
    this.bail(false);
    context('when queue has no values,', () => {
        it('should return undefined', () => {
            const queue = new Queue();

            expect(take2nd(queue)).to.be.undefined;
        });
    });

    context('when queue has one value,', () => {
        it('should return the value in queue', () => {
            let queue = new Queue();
            queue.enqueue(72);

            expect(take2nd(queue)).to.equal(72);

            queue = new Queue();
            queue.enqueue(null);

            expect(take2nd(queue)).to.equal(null);
        });

        it('should remove the value from queue', () => {
            const queue = new Queue();
            queue.enqueue(37);

            take2nd(queue);

            expect(queue.peek()).to.be.undefined;

            queue.enqueue(false);

            take2nd(queue);

            expect(queue.peek()).to.be.undefined;
        });
    });

    context('when queue has at least two values,', () => {
        it('should return the 2nd value in queue', () => {
            let queue = new Queue();
            queue.enqueue(48);
            queue.enqueue(67);

            expect(take2nd(queue)).to.equal(67);

            queue = new Queue();
            queue.enqueue(26);
            queue.enqueue(59);
            queue.enqueue(35);

            expect(take2nd(queue)).to.equal(59);
        });

        it('should move the front value in queue to the back of queue and remove the 2nd value', () => {
            const queue = new Queue();
            queue.enqueue(false);
            queue.enqueue('');
            queue.enqueue(null);
            queue.enqueue('hi');

            take2nd(queue);

            expect(queue.dequeue()).to.equal(null);
            expect(queue.dequeue()).to.equal('hi');
            expect(queue.dequeue()).to.equal(false);
            expect(queue.dequeue()).to.be.undefined;
        });
    });
});
