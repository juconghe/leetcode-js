function ListNode(val) {
    this.val = val;
    this.children = [];
};

/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function (points) {
    const nodes = Array.from({
        length: points.length
    }).map((v, i) => new ListNode(i));
    const frontier = new Set([]);
    let cost = 0;
    // no heap in js, use sort to fake min heap.
    const queue = new MinPriorityQueue();

    for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
            const distance = Math.abs(points[i][0] - points[j][0]) + Math.abs(points[i][1] - points[j][1]);
            nodes[i].children.push([nodes[j], distance]);
            nodes[j].children.push([nodes[i], distance]);
        }
    }

    queue.enqueue([nodes[0], 0], 0);
    while(frontier.size !== points.length) {
        const [node, weight] = queue.dequeue().element;
        if (frontier.has(node.val)) continue;
        frontier.add(node.val);
        cost += weight;
        node.children.forEach(v => {
            if (!frontier.has(v[0].val)) {
                queue.enqueue(v, v[1]);
            }
        });
    }

    return cost;
};

const points = [[0,0],[2,2],[3,10],[5,2],[7,0]];

minCostConnectPoints(points);