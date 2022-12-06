function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    const convertToArray = newRoot => {
        if (!newRoot) return [];
        return [...convertToArray(newRoot.left), newRoot.val, ...convertToArray(newRoot.right)];
    }
    const arrayTree = convertToArray(root);
    return arrayTree[k-1];
};

const test = new TreeNode(3, new TreeNode(1, null, new TreeNode(2)), new TreeNode(4));
kthSmallest(test, 1);