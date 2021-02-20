/* 
    原生js 实现数组的 map 方法

    MDN  Array.prototype.map()
*/

function mapF(fn) {
    let that = this;
    let len = that.length;

    for(let i = 0; i < len ; i++) {
        fn(that[i], i, that);
    }
}
Array.prototype.mapF = mapF;
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.mapF((x, i, arr) => console.log(x * 2, i, arr));