/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function (edges) {
    const parent = Array.from({
        length: edges.length + 1
    }).map((v, i) => i);
    const rank = Array.from({
        length: edges.length + 1
    }).map(v => 1);

    const find = edge => {
        let currentParent = parent[edge];
        // loop until the parent and grandparent are the same
        while (currentParent != parent[currentParent]) {
            // update the parent to point to the parent node
            // path compression
            parent[currentParent] = parent[parent[currentParent]];
            currentParent = parent[currentParent];
        }
        return currentParent;
    }

    const union = (edge1, edge2) => {
        const parent1 = find(edge1);
        const parent2 = find(edge2);
        if (parent1 === parent2) return false;
        if (rank[parent1] > rank[parent2]) {
            parent[parent2] = parent1;
            rank[parent1] += rank[parent2];
        } else {
            parent[parent1] = parent2;
            rank[parent2] += rank[parent1];
        }
        return true;
    }

    for (let i = 0; i < edges.length; i++) {
        const [e1, e2] = edges[i];
        if (!union(e1, e2)) {
            return edges[i];
        }
    }
};

const edges = [[1,2],[2,3],[3,4],[1,4],[1,5]]

findRedundantConnection(edges);