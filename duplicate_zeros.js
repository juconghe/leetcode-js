/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
 var duplicateZeros = function(arr) {
    const copiedArray = [];
    arr.forEach(v => {
        if (v === 0) {
            copiedArray.push(0);
            copiedArray.push(0);
        } else {
            copiedArray.push(v);
        }
    });
    for (let i = 0; i < arr.length; i++) {
        arr[i] = copiedArray[i];
    } 
};