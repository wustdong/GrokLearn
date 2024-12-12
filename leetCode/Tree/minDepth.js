/**
 * leetcode 111
 * 求二叉树最小深度
 */

function minDepth(root) {
    if(!root) return 0;

    return Math.min(minDepth(root.left), minDepth(root.right)) +1;
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
console.log(minDepth(root))