function ListNode(val) {
    this.val = val;
    this.children = new Set([]);
};

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function(n, edges) {
    if (edges.length !== n - 1) return false;
   const parent = Array.from({
        length: n
    }).map((v, i) => i);
    const rank = Array.from({ length: n}).map(v => 1);
    const find = node => {
        let p = parent[node];
        while(p !== parent[p]) {
            parent[p] = parent[parent[p]];
            p = parent[p];
        }
        return p;
    }

    const union = (node1, node2) => {
        const p1 = find(node1);
        const p2 = find(node2);

        if (p1 === p2) return false;

        if (rank[p1] > rank[p2]) {
            parent[p2] = p1;
            rank[p1] += rank[p2];
        } else {
            parent[p1] = p2;
            rank[p2] += rank[p1]
        }
        return true;
    }

    for (let i = 0; i < edges.length; i++) {
        const [node1, node2] = edges[i];
        if (!union(node1, node2)) return false;
    }

    return true;
};

const edges = [[0,1],[2,3],[1,2]];
const n = 5;

validTree(5, edges);