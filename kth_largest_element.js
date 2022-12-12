/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.nums = nums.sort((a, b) => -1* (a - b)).slice(0, k);
    this.k = k;
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    if (val < this.nums[this.k-1]) return this.nums[this.k-1];
    if (this.nums.length === this.k) {
        this.nums.pop();
    }
    this.nums.push(val);
    this.nums.sort((a, b) => -1 * (a - b));
    return this.nums[this.k-1];
};

const kthLargest = new KthLargest(2, [0]);
kthLargest.add(-1);   // return -1
kthLargest.add(1);   // return 0
kthLargest.add(-2);  // return 0
kthLargest.add(-4);   // return 0
kthLargest.add(3);   // return 1