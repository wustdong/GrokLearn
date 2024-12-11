/**
 * leetcode 125 验证回文串
 * @param {*} str 
 * @returns 
 */
function isPalindrome(str) {

    const filterStr = str.replace((/[^a-zA-Z0-9]/g), '').toLowerCase();
    const strArr = filterStr.split('');

    
    for(let i = 0, j = strArr.length -1;i<j;i++,j--) {
        if(strArr[i] !== strArr[j]) {
            return false
        }
    }

    return true
   
}

const str = "A man, a plan, a canal, Panama!";
console.log(isPalindrome(str))