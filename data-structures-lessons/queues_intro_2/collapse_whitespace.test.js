const { expect } = require('chai');
const { resolve } = require('path');
const { Queue } = require(resolve(__dirname, '..', '..', 'structures'));
const collapseWhitespace = require(resolve(__dirname, 'collapse_whitespace'));

describe('collapseWhitespace(charQueue):', function () {
    this.bail(false);
    context('when charQueue is empty,', () => {
        it('should do nothing', () => {
            const queue = new Queue();

            expect(() => collapseWhitespace(queue)).to.not.throw();
            expect(queue.peek()).to.be.undefined;
        });
    });

    context('when charQueue is not empty,', () => {
        it('should collapse all consecutive whitespace characters into a single space', () => {
            const queue = new Queue();

            queue.enqueue('1');
            queue.enqueue(' ');
            queue.enqueue('2');
            queue.enqueue(' ');
            queue.enqueue(' ');
            queue.enqueue('3');
            queue.enqueue(' ');
            queue.enqueue(' ');
            queue.enqueue(' ');
            queue.enqueue('4');
            queue.enqueue(' ');
            queue.enqueue(' ');
            queue.enqueue(' ');

            collapseWhitespace(queue);

            expect(queue.dequeue()).to.equal('1');
            expect(queue.dequeue()).to.equal(' ');
            expect(queue.dequeue()).to.equal('2');
            expect(queue.dequeue()).to.equal(' ');
            expect(queue.dequeue()).to.equal('3');
            expect(queue.dequeue()).to.equal(' ');
            expect(queue.dequeue()).to.equal('4');
            expect(queue.dequeue()).to.equal(' ');
            expect(queue.peek()).to.be.undefined;

            queue.enqueue(' ');
            queue.enqueue(' ');
            queue.enqueue('<');
            queue.enqueue('p');
            queue.enqueue('>');
            queue.enqueue('\n');
            queue.enqueue(' ');
            queue.enqueue(' ');
            queue.enqueue('\t');
            queue.enqueue('L');
            queue.enqueue('o');
            queue.enqueue('r');
            queue.enqueue('e');
            queue.enqueue('m');
            queue.enqueue(' ');
            queue.enqueue('i');
            queue.enqueue('p');
            queue.enqueue('s');
            queue.enqueue('u');
            queue.enqueue('m');
            queue.enqueue('.');
            queue.enqueue('\n');
            queue.enqueue(' ');
            queue.enqueue(' ');
            queue.enqueue('<');
            queue.enqueue('/');
            queue.enqueue('p');
            queue.enqueue('>');
            queue.enqueue('\n');

            collapseWhitespace(queue);

            expect(queue.dequeue()).to.equal(' ');
            expect(queue.dequeue()).to.equal('<');
            expect(queue.dequeue()).to.equal('p');
            expect(queue.dequeue()).to.equal('>');
            expect(queue.dequeue()).to.equal(' ');
            expect(queue.dequeue()).to.equal('L');
            expect(queue.dequeue()).to.equal('o');
            expect(queue.dequeue()).to.equal('r');
            expect(queue.dequeue()).to.equal('e');
            expect(queue.dequeue()).to.equal('m');
            expect(queue.dequeue()).to.equal(' ');
            expect(queue.dequeue()).to.equal('i');
            expect(queue.dequeue()).to.equal('p');
            expect(queue.dequeue()).to.equal('s');
            expect(queue.dequeue()).to.equal('u');
            expect(queue.dequeue()).to.equal('m');
            expect(queue.dequeue()).to.equal('.');
            expect(queue.dequeue()).to.equal(' ');
            expect(queue.dequeue()).to.equal('<');
            expect(queue.dequeue()).to.equal('/');
            expect(queue.dequeue()).to.equal('p');
            expect(queue.dequeue()).to.equal('>');
            expect(queue.dequeue()).to.equal(' ');
            expect(queue.peek()).to.be.undefined;
        });
    });
});
