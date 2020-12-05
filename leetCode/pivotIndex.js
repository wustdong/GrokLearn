var pivotIndex = function(nums) {
    let result = -1;
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const sum = nums.reduce(reducer);
    for(let i = 0; i < nums.length-1; i++){
        let left = 0;
        for(let j = 0; j < i; j++) {
            left += nums[j];
        }
        if ( (nums[i] + 2 * left) === sum) {
            result = i;
            break;
        }
    }
    return result;
};
const nums = [-1,-1,-1,0,1,1];
const nn = [1,7,3,6,5,6];
//  处理左右边界情况
console.log(pivotIndex(nums))
console.log(pivotIndex(nn))


/******* 方案一 *******/
// var pivotIndex = function(nums) {
//     let result = -1;
//     const reducer = (accumulator, currentValue) => accumulator + currentValue;

//     for(let i = 0; i < nums.length; i++){
//         let left = (i === 0) ? 0 :nums.slice(0, i).reduce(reducer);
//         let right = (i === nums.length-1) ? 0 :nums.slice(i+1, nums.length).reduce(reducer);
//         if(left === right) {
//             result = i;
//             break;
//         }
//     }
//     return result;
// };