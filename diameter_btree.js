function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
 var diameterOfBinaryTree = function(root) {
    let diameter = 0;
    const maxDepth = function(newRoot) {
        if (!newRoot) return 0;
        const left = maxDepth(newRoot.left);
        const right = maxDepth(newRoot.right);
        diameter = Math.max(diameter, left + right);
        return 1 + Math.max(left, right);
    };
    maxDepth(root);
    return diameter;
};