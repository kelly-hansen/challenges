const { expect } = require('chai');
const { resolve } = require('path');
const { Queue } = require(resolve(__dirname, '..', '..', 'structures'));
const sanitizeDigits = require(resolve(__dirname, 'sanitize_digits'));

describe('sanitizeDigits(charQueue):', function () {
    this.bail(false);
    context('when charQueue is empty,', () => {
        it('should do nothing', () => {
            const queue = new Queue();

            expect(() => sanitizeDigits(queue)).to.not.throw();
            expect(queue.peek()).to.be.undefined;
        });
    });

    context('when charQueue is not empty,', () => {
        it('should remove all non-digit characters from charQueue', () => {
            const queue = new Queue();
            queue.enqueue('Q');
            queue.enqueue('4');
            queue.enqueue('3');
            queue.enqueue('N');
            queue.enqueue('i');
            queue.enqueue('n');
            queue.enqueue('e');
            queue.enqueue('r');

            sanitizeDigits(queue);

            expect(queue.dequeue()).to.equal('4');
            expect(queue.dequeue()).to.equal('3');
            expect(queue.peek()).to.be.undefined;

            queue.enqueue('/');
            queue.enqueue('0');
            queue.enqueue('1');
            queue.enqueue('2');
            queue.enqueue('3');
            queue.enqueue('4');
            queue.enqueue('5');
            queue.enqueue('6');
            queue.enqueue('7');
            queue.enqueue('8');
            queue.enqueue('9');
            queue.enqueue(':');

            sanitizeDigits(queue);

            expect(queue.dequeue()).to.equal('0');
            expect(queue.dequeue()).to.equal('1');
            expect(queue.dequeue()).to.equal('2');
            expect(queue.dequeue()).to.equal('3');
            expect(queue.dequeue()).to.equal('4');
            expect(queue.dequeue()).to.equal('5');
            expect(queue.dequeue()).to.equal('6');
            expect(queue.dequeue()).to.equal('7');
            expect(queue.dequeue()).to.equal('8');
            expect(queue.dequeue()).to.equal('9');
            expect(queue.peek()).to.be.undefined;
        });
    });
});
