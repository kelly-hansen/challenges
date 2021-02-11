const { expect } = require('chai');
const { resolve } = require('path');
const { Stack } = require(resolve(__dirname, '..', '..', 'structures'));
const pushMaxToBottom = require(resolve(__dirname, 'push_max_to_bottom'));

describe('pushMaxToBottom(numberStack):', function () {
    this.bail(false);
    context('when numberStack is empty,', () => {
        it('should do nothing', () => {
            const stack = new Stack();

            expect(() => pushMaxToBottom(stack)).to.not.throw();
            expect(stack.peek()).to.be.undefined;
        });
    });

    context('when numberStack is not empty,', () => {
        it('should move the lowest maximum value to the bottom of numberStack', () => {
            let stack = new Stack();
            stack.push(4145);
            stack.push(9665);
            stack.push(8464);
            stack.push(4646);
            stack.push(8466);
            stack.push(8961);
            stack.push(9665);

            pushMaxToBottom(stack);

            expect(stack.pop()).to.equal(9665);
            expect(stack.pop()).to.equal(8961);
            expect(stack.pop()).to.equal(8466);
            expect(stack.pop()).to.equal(4646);
            expect(stack.pop()).to.equal(8464);
            expect(stack.pop()).to.equal(4145);
            expect(stack.pop()).to.equal(9665);
            expect(stack.peek()).to.be.undefined;

            stack = new Stack();
            stack.push(-264);
            stack.push(-13);
            stack.push(0);
            stack.push(-415);
            stack.push(0);

            pushMaxToBottom(stack);

            expect(stack.pop()).to.equal(0);
            expect(stack.pop()).to.equal(-415);
            expect(stack.pop()).to.equal(-13);
            expect(stack.pop()).to.equal(-264);
            expect(stack.pop()).to.equal(0);
            expect(stack.peek()).to.be.undefined;

            stack = new Stack();
            stack.push(-346);
            stack.push(-1374);
            stack.push(-214);

            pushMaxToBottom(stack);

            expect(stack.pop()).to.equal(-1374);
            expect(stack.pop()).to.equal(-346);
            expect(stack.pop()).to.equal(-214);
            expect(stack.peek()).to.be.undefined;
        });
    });
});
