/**
 * 提示：
 * ·表达式中的所有整数都是*非负整数*，且在范围 [0, 231 - 1] 内
 * ·默认表达式均合法
 */

function calculator(s) {
    const sLen = s.length;
    // 1、字符串转整数
    const arr = [];
    // 记录算式中的数字
    let num = 0;
    // 记录num 前的符号，初始化为 +（提示中，为非负整数）
    let sign = "+";

    for (let i = 0; i < sLen; i++) {
        let c = s[i];

        if ((+c) && (+c) <= 9 && (+c) >=0) {
            num = 10 * num + (+c);
        }

        if(!(+c) || i == sLen - 1) {
            // 当前是运算符，需要处理前面的运算结果
            
            switch(c) {
                case '+':
                    arr.push(num);
                    break;
                case '-':
                    arr.push(-num);
                    break;
            }
            num = 0;
            sign = c;
        }
    }

    const sum  = arr.reduce((acc, cur) => acc + cur, 0);

    console.log('sum: ', sum)
}
const s1 = '2+3-4';
calculator(s1);