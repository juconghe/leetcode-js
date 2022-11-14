/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
 var dailyTemperatures = function(temperatures) {
    const result = Array.from({ length: temperatures.length }).fill(0);
    const pq = [];
    for (let i = 0; i < temperatures.length; i++) {
        while (pq.length > 0) {
            const [value, index] = pq[pq.length - 1];
            if (value >= temperatures[i]) break;
            result[index] = i - index;
            pq.pop();
        }
        pq.push([temperatures[i], i]);
    }
    return result;
};

const temperatures = [73,74,75,71,69,72,76,73];

dailyTemperatures(temperatures);