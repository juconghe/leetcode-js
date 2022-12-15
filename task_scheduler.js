/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    const createFreqArray = () => {
        const freqMap = Object.create(null);
        tasks.forEach(v => {
            if (freqMap[v]) {
                freqMap[v] += 1;
            } else {
                freqMap[v] = 1;
            }
        });
        return Object.entries(freqMap).sort((a, b) => b[1] - a[1]);
    }

    const findNextTask = (list, lookup) => {
        for(let i = 0; i < list.length; i++) {
            if (!lookup.has(list[i][0]) && list[i][1] > 0) {
                list[i][1] -= 1;
                const task = list[i][0];
                list.sort((a, b) => b[1] - a[1]);
                return task;
            }
        }
        return null;
    }
    const waitQueue = [];
    const lookupSet = new Set([]);
    let completedTask = 0;
    let counter = 0;
    const freqArray = createFreqArray();
    while(completedTask < tasks.length) {
        if (waitQueue.length > n) {
            lookupSet.delete(waitQueue.shift());
        }
        let task = findNextTask(freqArray, lookupSet);
        if (task) {
            waitQueue.push(task);
            lookupSet.add(task);
            completedTask += 1;
        } else {
            waitQueue.push('idle');
        }
        counter += 1;
    }
    return counter;
};

const tasks = ["A","A","A","B","B","B", "C","C","C", "D", "D", "E"]
;
const n = 2;

leastInterval(tasks, n);