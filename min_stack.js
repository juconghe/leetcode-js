
var MinStack = function() {
    this.stack = [];
    this.minStack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val);
    if (this.minStack.length) {
        this.minStack.push(Math.min(this.minStack[this.minStack.length - 1], val));
    } else {
        this.minStack.push(val);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if (this.minStack.length) {
        this.stack.pop();
        this.minStack.pop();
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
   if (this.stack.length) {
        return this.stack[this.stack.length - 1];
   }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    if (this.minStack.length) {
        return this.minStack[this.minStack.length - 1];
    }
};

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2
