/**
 * 提示：
 * ·表达式中的所有整数都是*非负整数*，且在范围 [0, 231 - 1] 内
 * ·默认表达式均合法
 * 参考：https://leetcode.cn/problems/basic-calculator-ii/solutions/91271/chai-jie-fu-za-wen-ti-shi-xian-yi-ge-wan-zheng-ji-
 */

function calculator(s) {
    const sLen = s.length;
    const arr = [];
    // 记录算式中的数字
    let num = 0;
    // 记录num 前的符号，初始化为 +（提示中，为非负整数）
    let sign = "+";

    for (let i = 0; i < sLen; i++) {
        let c = s[i];

        // 1、字符串转整数
        if ((+c) && (+c) <= 9 && (+c) >=0) {
            num = 10 * num + (+c);
        }

        // 2、处理运算符
        if((!(+c) && c!== ' ') || i == sLen - 1) {
            // 当前是运算符，需要处理前面的运算结果
            
            switch(sign) {
                case '+':
                    arr.push(num);
                    break;
                case '-':
                    arr.push(-num);
                    break;
                case '*':
                    let pre = arr.pop();
                    arr.push(pre * num);
                    break;
                case '/':
                    let pre2 = arr.pop();
                    arr.push(pre2 / num);
                    break;
            }
            num = 0;
            sign = c;
        }
    }
    console.log('arr', arr)
    const sum  = arr.reduce((acc, cur) => acc + cur, 0);

    console.log('sum: ', sum)
}
const s1 = '2+3-4';
const s2 = '2+3*5-4/2';
const s3 = '2 + 4*8 - 6/3';

calculator(s1);
calculator(s2);
calculator(s3)
