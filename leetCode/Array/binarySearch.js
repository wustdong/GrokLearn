/** leetcode
 * 二分查找只对有序数组
 * 【理解循环不变量（Loop Invariant）】
 * 【测试】百万级数量时的时间
*/  

function binarySearch(arr, n, target) {
    let l = 0,
        r = n - 1;

    while(l <= r) { // [l, r]区间中查找
        let mid = Math.round((l + r) / 2);
        console.log('mid', mid)
        if (target == arr[mid]) return mid;

        if(target > arr[mid]) {
            l = mid + 1;
        } else if(target < arr[mid]) {
            r = mid - 1;
        } 
    }

    return -1;
}

// 测试用例
const arr = [1,2,3,5,7,9];
const target = 0;
const target2 = 3
const r = binarySearch(arr, arr.length, target);
console.log('r:', r)

