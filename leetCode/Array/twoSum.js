/**
 * 给定一个有序整数数组，和一个整数 target。在其中寻找两个元素，使其和为target
 * 
 * leetcode 167  Two Sum II-Input array is sorted
 */

function search(nums, target) {
    let i = 0;
    let j = nums.length - 1;

    while(i < j) {
        let mid = Math.floor((i + j ) /2);
        if(nums[mid] > target) {
            j = mid - 1;
        } else if(nums[mid] < target) {
            i = mid + 1;
        } else {
            return mid;
        }
    }

    return -1;

}
function Solution(nums, target) {

    for(let i = 0; i < nums.length; i++) {
        let a = nums[i];
        let b = search(nums, target - a);

        if( b !== -1)  {
            console.log('solution: ', i+1, b+1)
            return [i + 1, b + 1];
        }
    }

    throw 'input is illegal'
}
const nums = [2,7,11,15];
const target = 9;
Solution(nums, target)