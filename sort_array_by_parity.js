/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArrayByParity = function(nums) {
    let head = 0, tail = nums.length - 1;
    while(head <= tail) {
        const headValue = nums[head];
        const tailValue = nums[tail];
        if (headValue % 2 === 0) {
            head += 1;
            continue;
        }
        if (tailValue % 2 !== 0) {
            tail -= 1;
            continue;
        }
        nums[head++] = tailValue;
        nums[tail--] = headValue;
    }
    return nums;
};

const num = [3,1,2,4];
sortArrayByParity(num);
console.log(num);