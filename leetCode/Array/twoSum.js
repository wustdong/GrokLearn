/**
 * 给定一个有序整数数组，和一个整数 target。在其中寻找两个元素，使其和为target
 * 
 * leetcode 167  Two Sum II-Input array is sorted
 */


function Solution(nums, target) {
    let i = 0, j = nums.length - 1;
    while (i < j) { // 寻找两个不同的元素,所以这里的i 不能等于j
        if(nums[i] + nums[j] > target) {
            j--;
        } else if(nums[i] + nums[j] < target) {
            i++;
        } else {
            console.log('solution: ', [i + 1, j +1])
            return [i + 1, j +1]
        }
    }

    // throw ('input is illegal')
    console.log('inpout is illegals')
}
const nums = [1,2,3,4,4,9,56,90];
const target = 8;
Solution(nums, target)