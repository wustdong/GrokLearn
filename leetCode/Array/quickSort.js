/**
 * 参考：https://www.ruanyifeng.com/blog/2011/04/quicksort_in_javascript.html
 */

function quickSort(nums) {
    if(nums.length <= 1) return nums;
    const pivotIndex = Math.floor(nums.length / 2);
    const pivot = nums.splice(pivotIndex, 1)[0];
    const left = [];
    const right = [];
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        if(element <= pivot) {
            left.push(element)
        } else {
            right.push(element)
        }
    }

    return quickSort(left).concat(pivot).concat(quickSort(right))
}
const arr = [85,24,63,45,17,31,96,50];
console.log(quickSort(arr))
