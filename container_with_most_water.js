/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
    let leftPtr = 0;
    let rightPtr = height.length - 1;
    let max = 0;
    while(leftPtr < rightPtr) {
        const area = Math.min(height[leftPtr], height[rightPtr]) * (rightPtr - leftPtr);
        max = Math.max(max, area);
        if (height[leftPtr] < height[rightPtr]) {
            leftPtr += 1;
        } else {
            rightPtr -= 1;
        }
    }
    return max;
};

const height = [1,2,4,3];

maxArea(height);