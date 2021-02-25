
// +---------------------------------------------------------------+
// |                                                               |
// |  leetcode 384: https://leetcode-cn.com/problems/shuffle-an-array/
// |                                                               |
// |    洗牌算法                                                     |
// |                                                               |
// +---------------------------------------------------------------+
var Solution = function (nums) {
    this.nums = nums;
}

Solution.prototype.reset = function() {
    return this.nums;
};

function getRandomInt(max) { // 生成小于max 的随机正整数
    // return Math.floor(Math.random() * max) // 算法不通过的原因是，这里取到的边界范围是 [0, max)， 取不到 max]
    return Math.floor(Math.random(max +1));
}

Solution.prototype.shuffle = function() {
    let len = this.nums.length;
    let newArr = this.nums.slice(); // 避免打乱后影响了原数组顺序
    for(let i=len -1; i>=1; i--) {
        // 从 0到i 随机选一个
        let random = getRandomInt(i);
        [newArr[random], newArr[i]] = [newArr[i], newArr[random]];
    }

    return newArr;
}

console.log(new Solution([1, 2,3, 4, 5, 6, 7, 8,9]).shuffle());


// Unsaved       
// +------------------------------------------------------------------------------------------------------------------------------------------+
// |                                                                                                                                          |
// |  Solution.prototype.shuffle = function() {                                                                                               |
// |      const nums = this.nums.slice(0);                                                                                                    |
// |      let n = nums.length;                                                                                                                |
// |                                                                                                                                          |
// |      // 产生的结果有 n! 种可能                                                                                                                    |
// |      for (let i = 0; i < n; i++) {                                                                                                       |
// |          // 从 i 到 n-1 随机选一个                                                                                                              |
// |          const rand = randOne(i, n - 1);                                                                                                 |
// |          // 交换nums数组i和rand下标的两个元素                                                                                                        |
// |          [ nums[i], nums[rand] ] = [ nums[rand], nums[i] ];                                                                              |
// |      }                                                                                                                                   |
// |                                                                                                                                          |
// |      return nums;                                                                                                                        |
// |  };                                                                                                                                      |
// |                                                                                                                                          |
// |  // 获取闭区间 [n, m] 内的一个随机整数                                                                                                                |
// |  function randOne(n, m) {                                                                                                                |
// |      return Math.floor(Math.random() * (m - n + 1)) + n;                                                                                 |
// |  };                                                                                                                                      |
// |                                                                                                                                          |
// |  作者：xing-guang-29                                                                                                                        |
// |  链接：https://leetcode-cn.com/problems/shuffle-an-array/solution/xi-pai-suan-fa-by-xing-guang-29/                                          |
// |  来源：力扣（LeetCode）                                                                                                                         |
// |  著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。                                                                                   
// |                                                                                                                                          |
// +------------------------------------------------------------------------------------------------------------------------------------------+

// Close
