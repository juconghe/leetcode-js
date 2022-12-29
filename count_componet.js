function ListNode(val) {
    this.val = val;
    this.children = new Set([]);
};

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function (n, edges) {
    const nodes = Array.from({
        length: n
    }).map((v, i) => new ListNode(i));
    const frontier = new Set([]);
    let count = 0;
    for (let i = 0; i < edges.length; i++) {
        const [node1, node2] = edges[i];
        nodes[node1].children.add(nodes[node2]);
        nodes[node2].children.add(nodes[node1]);
    }

    const dfs = node => {
        if (frontier.has(node.val)) return;
        frontier.add(node.val);
        node.children.forEach(v => {
            dfs(v)
        });
    }


    for (let i = 0; i < n; i++) {
        if (!frontier.has(i)) {
            dfs(nodes[i]);
            count += 1;
        }
    }

    return count;
};

const n = 5;
const edges = [
    [0, 1],
    [1, 2],
    [3, 4]
];

countComponents(n, edges);