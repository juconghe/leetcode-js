/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
 var carFleet = function(target, position, speed) {
    const combine = position.map((p, i) => ([p, speed[i]])).sort((a, b) => -1 * (a[0] - b[0]));
    const fleet = [];
    for (let i = 0; i < combine.length; i++) {
        const [position, speed] = combine[i];
        const arrivalTime = (target - position) / speed;
        if (!fleet.length || arrivalTime > fleet[fleet.length - 1]) {
            fleet.push(arrivalTime);
        }
    }
    return fleet.length;
};

const target = 12;
const position = [10,8,0,5,3];
const speed = [2,4,1,1,3];

carFleet(target, position, speed);