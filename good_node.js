function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function(root) {
    let count = 0;
    const helper = (newRoot, currentMax) => {
        if (!newRoot) return;
        const newMax = Math.max(currentMax, newRoot.val);
        if (newRoot.val >= currentMax) count += 1;
        helper(newRoot.left, newMax);
        helper(newRoot.right, newMax);
    }
    helper(root, root.val);
    return count;
};