function insertionSort(arr) {
    const len = arr.length;
    for(let i = 1; i< len;i++) {
        let j = i -1;
        let current = arr[i]; // 新元素
        while(j >= 0 && arr[j] > current) { // arr[j] 为扫描元素
            arr[j+1] = arr[j]; // 元素移位
            j--;
        }
        arr[j + 1] = current;
    }
    return arr;

}

// 示例
const nums = [64, 25, 12, 22, 11];
const nums2 = [5,1,1,2,0,0]
console.log(insertionSort(nums)); // 输出: [11, 12, 22, 25, 64]
console.log(insertionSort(nums2))