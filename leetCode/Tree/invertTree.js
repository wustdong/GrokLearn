/**
 * leetcode 226  invert binary tree
 */

function invertTree(root) {
    if(!root) return null;

    invertTree(root.left);
    invertTree(root.right);

    [root.left, root.right] = [root.right, root.left];
}

const root = {
    val: 3,
    left: {
        val: 9,
        left: null,
        right: null
    },
    right: {
        val: 20,
        left: {
            val: 15,
            left: null,
            right: null 
        },
        right: {
            val: 7,
            left: null,
            right: null 
        }
    }
}
invertTree(root);

console.log(root)