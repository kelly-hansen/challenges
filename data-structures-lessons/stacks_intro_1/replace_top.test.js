const { expect } = require('chai');
const { resolve } = require('path');
const { Stack } = require(resolve(__dirname, '..', '..', 'structures'));
const replaceTop = require(resolve(__dirname, 'replace_top'));

describe('replaceTop(stack, newValue):', function () {
    this.bail(false);
    context('when stack is empty,', () => {
        it('should return undefined', () => {
            expect(replaceTop(new Stack(), 18)).to.be.undefined;
        });

        it('should not modify stack', () => {
            const stack = new Stack();

            replaceTop(stack, 87);

            expect(stack.peek()).to.be.undefined;
        });
    });

    context('when stack is not empty,', () => {
        it('should return the old value at the top of stack', () => {
            const stack = new Stack();
            stack.push(53);
            stack.push(64);
            stack.push(94);

            expect(replaceTop(stack, 63)).to.equal(94);

            stack.push(null);

            expect(replaceTop(stack, '')).to.equal(null);
        });

        it('should replace the old value on top of stack with newValue', () => {
            let stack = new Stack();
            stack.push(456);
            stack.push(94);
            stack.push(656);

            replaceTop(stack, 464);

            expect(stack.pop()).to.equal(464);
            expect(stack.pop()).to.equal(94);
            expect(stack.pop()).to.equal(456);
            expect(stack.peek()).to.be.undefined;

            stack = new Stack();
            stack.push('g');
            stack.push(12);
            stack.push('niner');
            stack.push(0);

            replaceTop(stack, 6);

            expect(stack.pop()).to.equal(6);
            expect(stack.pop()).to.equal('niner');
            expect(stack.pop()).to.equal(12);
            expect(stack.pop()).to.equal('g');
            expect(stack.peek()).to.be.undefined;
        });
    });
});
