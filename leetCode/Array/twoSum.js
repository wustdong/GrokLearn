/**
 * 给定一个有序整数数组，和一个整数 target。在其中寻找两个元素，使其和为target
 * 
 * leetcode 167  Two Sum II-Input array is sorted
 */

function search(nums, restTarget) {
    let i = 0;
    let j = nums.length - 1;

    while(i <= j) {
        let mid = Math.floor((i + j ) /2);
        if(nums[mid] > restTarget) {
            j = mid - 1;
        } else if(nums[mid] < restTarget) {
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
        let anotherIndex = search(nums, target - a);
        console.log('anotherIndex', anotherIndex)
        if( anotherIndex !== -1 && anotherIndex !== i)  {
            console.log('solution: ', i+1, anotherIndex+1)
            return [i + 1, anotherIndex + 1];
        }
    }

    // throw ('input is illegal')
    console.log('inpout is illegals')
}
const nums = [2,3,4];
const target = 6;
Solution(nums, target)