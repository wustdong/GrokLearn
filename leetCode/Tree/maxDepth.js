/**
 * leetcode 104
 * 求二叉树的最大的深度
 */
function maxDepth(root) {
    if (!root) return 0;

    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
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

console.log(maxDepth(root))