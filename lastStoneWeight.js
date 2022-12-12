/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    const sortedStones = stones.sort((a, b) => b - a);
    while(sortedStones.length > 1) {
        const heavier = sortedStones.shift();
        const lighter = sortedStones.shift();
        const newStone = heavier - lighter;
        sortedStones.push(newStone);
        sortedStones.sort((a, b) => b - a)
    }
    return sortedStones[0];
};

const stones = [2,7,4,1,8,1];
lastStoneWeight(stones);