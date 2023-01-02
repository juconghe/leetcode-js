
/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, k) {
    const INF = 2147483647;
    let prices = Array.from({ length: n }).map(() => INF);
    prices[src] = 0;

    for (let i = 0; i < k+1; i++) {
        const tempPrices = [...prices];
        flights.forEach(([s, d, p]) => {
            if (prices[s] !== INF && prices[s] + p < tempPrices[d]) {
                tempPrices[d] = prices[s] + p;
            }
        });
        prices = tempPrices;
    }

    return prices[dst] === INF ? -1 : prices[dst];
};

const n = 10;
const flights = [[0,1,20],[1,2,20],[2,3,30],[3,4,30],[4,5,30],[5,6,30],[6,7,30],[7,8,30],[8,9,30],[0,2,9999],[2,4,9998],[4,7,9997]];
const src = 0;
const dst = 9;
const k = 4;

findCheapestPrice(n, flights, src, dst, k);