function mergeSort(arr) {
    console.log('arr', arr)
    if (arr.length <= 1) {
        return arr; // 如果数组只有一个元素或为空，直接返回
    }

    // 分割数组
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid)); // 左半部分排序
    console.log('---right', arr)
    const right = mergeSort(arr.slice(mid));  // 右半部分排序

    // 合并排序后的两部分
    return merge(left, right);
}

function merge(left, right) {
    console.log('left', left)
    console.log('right', right)
    let result = [];
    let i = 0, j = 0;

    // 按序合并两个数组
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // 合并剩余元素
    return result.concat(left.slice(i)).concat(right.slice(j));
}

// 示例
// const arr = [38, 27, 43, 3, 9, 82, 10];
// console.log(mergeSort(arr)); // 输出：[3, 9, 10, 27, 38, 43, 82]
const arr2 = [9, 5, 2,7, 12, 4, 3, 1, 11];
console.log(mergeSort(arr2));