/**
 * 给定一个矩阵 A， 返回 A 的转置矩阵。
 * 矩阵的转置是指将矩阵的主对角线翻转，交换矩阵的行索引与列索引。
 * 示例 1
 * 输入：[[1,2,3],[4,5,6],[7,8,9]]
 * 输出：[[1,4,7],[2,5,8],[3,6,9]]
 * 
    示例 2：

    输入：[[1,2,3],[4,5,6]]
    输出：[[1,4],[2,5],[3,6]]
     
    提示：

    1 <= A.length <= 1000
    1 <= A[0].length <= 1000

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/transpose-matrix
    著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[][]} A
 * @return {number[][]}
 */

//  // 暴力解法： 遍历数组，对角线互换元素;
// var transpose = function(A) { 
//     // let B = [[],[],[]];
//     let B  = new Array(A[0].length).fill([]);
//     console.log('BBB', B); // [[],[],[]]
//     console.log('B[0] === B[1]', B[0] === B[1]); // true
//     for(let i = 0;i < A[0].length; i++) {
//         for(let j = 0; j < A.length; j++) {
//             B[i][j] = A[j][i];
//             console.log('A[i][j]', A[j][i]);
//             console.log('B[i][j]', B[i][j], B)
//         }
//     }
//     return B;
//     // 问题： 遍历赋值时，初始化 B数组为 [[], [], []]没按预期，输出是 [ [ 3, 6 ], [ 3, 6 ], [ 3, 6 ] ]。
//     // 问题出在 fill 这个方法上,使用object填充数组时, 数组中的对象都将是同一个
// };
// 问题一，非对称的数组（非方阵矩阵），没法用对角线转置 eg: [[1,2,3],[4,5,6]]；
// 也就是非方阵会溢出，所以这里需要额外申请一个数组



/** leetcode 题解一：**/
//   注意遍历的时候。最需要注意的是数组下标越界问题 这里以 A 的length * A[0].length, 给B 数组赋值。
// var transpose = function(A) {  
//     let B = [];
//     for(let i = 0;i < A.length; i++) {
//         for(let j = 0; j < A[0].length; j++) {
//             if(!B[j]) {
//                 B[j] = [];
//             }
//             B[j][i] = A[i][j];
//         }
//     }
//     return B;
// };


/** leetcode 题解二：**/
// var transpose = function(A) {
//     return Array.from({length:A[0].length},(_,i)=>A.map(v=>v[i]))
// };

/** leetcode 题解三：**/
var transpose = function(A) {
    return A[0].map((_, idx) => { return A.map(row =>row[idx]) })
}
const arr = [[1,2,3],[4,5,6]];
// const brr = arr.map(row => row[0])

// console.log(transpose([[1,2,3],[4,5,6],[7,8,9]]));
console.log(transpose(arr));
