const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

function ListNode(val) {
    this.val = val;
    this.dist = 2147483647;
    this.children = [];
};

/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function(times, n, k) {
    const nodes = Array.from({ length: n + 1}).map((v, i) => new ListNode(i));
    const frontier = new Set([]);
    const queue = new MinPriorityQueue();
    
    for (let i = 0; i < times.length; i++) {
        const [u, v, t] = times[i];
        nodes[u].children.push([nodes[v], t]);
    }
    
    nodes[k].dist = 0;
    let lastNode = nodes[k];
    queue.enqueue([nodes[k], 0], 1);

    while(queue.size() > 0 && frontier.size < n) {
        const [node, t] = queue.dequeue().element;
        if (frontier.has(node.val)) continue;
        frontier.add(node.val);
        lastNode = node;
        node.children.forEach(v => {
            if(!frontier.has(v[0].val)) {
                if (node.dist + v[1] < v[0].dist) {
                    v[0].dist = node.dist + v[1];
                }
                queue.enqueue(v, v[0].dist)
            }
        });
    }
    if (frontier.size !== n) return -1;
    return lastNode.dist;
};

const times = [[2,1,1],[2,3,1],[3,4,1]];
const n = 4;
const k = 2;

networkDelayTime(times, n, k);