/**
 * @param {number[]} nums
 * @return {number[]}
 * 要求： 不使用任何内置方法
 */


var selectionSort = function(nums) {
 var len = nums.length;
 for(let i= 0;i<len -1;i++) {
    let smallIndex = i;

    for(let j = i + 1; j < len; j++) {
        if(nums[j] < nums[i]) {
            smallIndex = j;
        }
    }

    if(smallIndex !== i) {
        // es6 数组结构特性
        [nums[i], nums[smallIndex]]= [nums[smallIndex], nums[i]]
    }
 }

 return nums;
};

// 示例
const nums = [64, 25, 12, 22, 11];
const nums2 = [5,1,1,2,0,0]
console.log(selectionSort(nums)); // 输出: [11, 12, 22, 25, 64]
console.log(selectionSort(nums2))