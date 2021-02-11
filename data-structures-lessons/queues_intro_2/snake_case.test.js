const { expect } = require('chai');
const { resolve } = require('path');
const { Queue } = require(resolve(__dirname, '..', '..', 'structures'));
const snakeCase = require(resolve(__dirname, 'snake_case'));

describe('snakeCase(charQueue):', function () {
    this.bail(false);
    context('when charQueue is empty,', () => {
        it('should do nothing', () => {
            const queue = new Queue();

            expect(() => snakeCase(queue)).to.not.throw();
            expect(queue.peek()).to.be.undefined;
        });
    });

    context('when charQueue is not empty,', () => {
        it('should convert all characters to snake_case', () => {
            const queue = new Queue();
            queue.enqueue('A');
            queue.enqueue(' ');
            queue.enqueue('C');
            queue.enqueue('h');
            queue.enqueue('e');
            queue.enqueue('e');
            queue.enqueue('s');
            queue.enqueue('e');
            queue.enqueue(' ');
            queue.enqueue('W');
            queue.enqueue('h');
            queue.enqueue('e');
            queue.enqueue('e');
            queue.enqueue('l');

            snakeCase(queue);

            expect(queue.dequeue()).to.equal('a');
            expect(queue.dequeue()).to.equal('_');
            expect(queue.dequeue()).to.equal('c');
            expect(queue.dequeue()).to.equal('h');
            expect(queue.dequeue()).to.equal('e');
            expect(queue.dequeue()).to.equal('e');
            expect(queue.dequeue()).to.equal('s');
            expect(queue.dequeue()).to.equal('e');
            expect(queue.dequeue()).to.equal('_');
            expect(queue.dequeue()).to.equal('w');
            expect(queue.dequeue()).to.equal('h');
            expect(queue.dequeue()).to.equal('e');
            expect(queue.dequeue()).to.equal('e');
            expect(queue.dequeue()).to.equal('l');
            expect(queue.peek()).to.be.undefined;

            queue.enqueue('1');
            queue.enqueue('2');
            queue.enqueue(' ');
            queue.enqueue('A');
            queue.enqueue('n');
            queue.enqueue('g');
            queue.enqueue('r');
            queue.enqueue('y');
            queue.enqueue(' ');
            queue.enqueue('M');
            queue.enqueue('e');
            queue.enqueue('n');

            snakeCase(queue);

            expect(queue.dequeue()).to.equal('1');
            expect(queue.dequeue()).to.equal('2');
            expect(queue.dequeue()).to.equal('_');
            expect(queue.dequeue()).to.equal('a');
            expect(queue.dequeue()).to.equal('n');
            expect(queue.dequeue()).to.equal('g');
            expect(queue.dequeue()).to.equal('r');
            expect(queue.dequeue()).to.equal('y');
            expect(queue.dequeue()).to.equal('_');
            expect(queue.dequeue()).to.equal('m');
            expect(queue.dequeue()).to.equal('e');
            expect(queue.dequeue()).to.equal('n');
            expect(queue.peek()).to.be.undefined;
        });
    });
});
