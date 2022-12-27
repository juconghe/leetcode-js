
function Node(val, neighbors) {
   this.val = val === undefined ? 0 : val;
   this.neighbors = neighbors === undefined ? [] : neighbors;
}

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    const frontier = new Map();
    const helper = currentNode => {
        const newNode = new Node(currentNode.val);
        frontier.set(newNode.val, newNode);
        newNode.neighbors = currentNode.neighbors.map(v => {
            if (frontier.has(v.val)) {
                return frontier.get(v.val);
            }
            return helper(v);
        });
        return newNode;
    }
    if (!node) return null;
    return helper(node);
};

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);

node1.neighbors = [node2, node4];
node2.neighbors = [node1, node3];
node3.neighbors = [node2, node4];
node4.neighbors = [node1, node3];

cloneGraph(node1);
