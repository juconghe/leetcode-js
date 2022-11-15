/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
 var minEatingSpeed = function(piles, h) {
    let low = 1;
    let high = 1;
    piles.forEach(v => {
        high = Math.max(high, v);
    });

    while (low < high) {
        const mid = Math.floor((high + low) / 2);
        let hourSpent = 0;
        for (let i = 0; i < piles.length; i++) {
            hourSpent += Math.ceil(piles[i] / mid);
        }

        if (hourSpent <= h) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }
    return low;
};

const piles = [30,11,23,4,20];

minEatingSpeed(piles, 5);