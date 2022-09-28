 function Node(val, children) {
    this.val = val;
    this.children = children;
 }

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    const result = []
    if (!root) return result;
    helper(root, result);
    return result;
};

const helper = (node, result) => {
    if (!node.children) {
        result.push(node.val);
    } else {
        result.push(node.val);
        node.children.forEach(n => {
            helper(n, result);
        });
    }
}

const tree = new Node(1, [new Node(3, null), new Node(2, null), new Node(4, null)]);
console.log(preorder(tree));