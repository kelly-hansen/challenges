const { expect } = require('chai');
const { resolve } = require('path');
const { Stack } = require(resolve(__dirname, '..', '..', 'structures'));
const insertUnderTop = require(resolve(__dirname, 'insert_under_top'));

describe('insertUnderTop(stack, value) :', function () {
    this.bail(false);
    context('when stack is empty,', () => {
        it('should do nothing', () => {
            const stack = new Stack();
            expect(() => insertUnderTop(stack, 12)).to.not.throw(RangeError);
            expect(stack.peek()).to.be.undefined;
        });
    });

    context('when stack is not empty,', () => {
        it('should insert value underneath top value of stack', () => {
            let stack = new Stack();
            stack.push(52);

            insertUnderTop(stack, 78);
            insertUnderTop(stack, 13);
            insertUnderTop(stack, 94);

            expect(stack.pop()).to.equal(52);
            expect(stack.pop()).to.equal(94);
            expect(stack.pop()).to.equal(13);
            expect(stack.pop()).to.equal(78);
            expect(stack.peek()).to.be.undefined;

            stack = new Stack();
            stack.push(null);

            insertUnderTop(stack, 'o');

            expect(stack.pop()).to.equal(null);
            expect(stack.pop()).to.equal('o');
            expect(stack.peek()).to.be.undefined;
        });
    });
});
