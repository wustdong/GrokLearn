/**
 * leetcode 111
 * 求二叉树最小深度
 * 给定一个二叉树，找出其最小深度。
 * 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
 * 说明：叶子节点是指没有子节点的节点
 */

function minDepth(root) {
    if(!root) return 0;
    if(root && !root.left && !root.right) return 1;
    /**
     * 在二叉树中，如果某一侧子树为空
     * 我们不能直接用 0 来判断最小深度，因为空的子树不算有效路径
     */
    
    if(!root.left) return minDepth(root.right) +1;
    if(!root.right) return minDepth(root.left) +1;
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

const singleTree = {
    val: 2,
    left: null,
    right: {
        val: 3,
        left: null,
        right: {
            val: 4, 
            left: null,
            right: {
                val: 5, 
                left: null,
                right: {
                    val: 6,
                    left: null,
                    right:null
                }
            }
        }
    }
}
// console.log(minDepth(root))
console.log(minDepth(singleTree))