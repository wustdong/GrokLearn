/**
 * @param {number[]} nums
 * @return {number[]}
 */

var findSmallIndex = function(arr) {
    var smallIndex = 0;
    var smallNum = arr[0];

    for(let i= 0;i<arr.length;i++) {
        if(arr[i] < smallNum) {
            smallNum = arr[i];
            smallIndex = i;
        }
    }

    return smallIndex
}
var selectionSort = function(nums) {
 var result = [];
 for(let i= 0;i<nums.length;i++) {
    var smallIndex = findSmallIndex(nums);

    result.push(nums[smallIndex])

    nums[smallIndex] = undefined;
 }

 return result;
};

// 示例
const nums = [64, 25, 12, 22, 11];
const nums2 = [5,1,1,2,0,0]
console.log(selectionSort(nums)); // 输出: [11, 12, 22, 25, 64]
console.log(selectionSort(nums2))