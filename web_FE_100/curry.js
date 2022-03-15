/** 
 * 函数柯里化 
 * 【定义：是把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，
 * 并且返回接受余下的参数而且返回结果的新函数的技术。】
 * (https://zh.wikipedia.org/wiki/%E6%9F%AF%E9%87%8C%E5%8C%96)
 * 
 * eg: 实现一个函数能够使 add(1, 2) => 3 转变为 add(1)(2) => 3
 * 
*/
/** 
 * 问题： 所有函数都可以柯里化吗？
 * 问题： 本来接受多个参数的函数，调用一个参数的函数赋值给另外一个函数，不会有语法错误吗?
 * 有哪些适用场景？
*/

// 参考https://github.com/mqyqingfeng/Blog/issues/42
var curryOne = function (fn) {
    console.log('111arguments', arguments);
    var args = [].slice.call(arguments, 1);
    console.log('args', args);
    return function() {
        console.log('22arguments', arguments);
        var newArgs = args.concat([].slice.call(arguments)); // concat
        console.log('newArgs', newArgs)
        return fn.apply(this, newArgs);
    };
}

function add(a, b) {
    return a + b;
}


// var addCurrySimple = curryOne(add, 1); // 这里的 addcurry 其实就是curry 里返回的匿名函数
// console.log('addCurrySimple', addCurrySimple)
// console.log(addCurrySimple(2)) // 3

// 打印结果如下：
// 111arguments [Arguments] { '0': [Function: add], '1': 1 }
// args [ 1 ]
// addCurry [Function (anonymous)]
// 22arguments [Arguments] { '0': 2 }
// newArgs [ 1, 2 ]
// 3

function curry(fn, args) { // 比较容易理解，但是适应范围有限
    var length = fn.length;

    args = args || [];

    return function() {

        var _args = args.slice(0),

            arg, i;

        for (i = 0; i < arguments.length; i++) {

            arg = arguments[i];

            _args.push(arg);

        }
        if (_args.length < length) {
            return curry.call(this, fn, _args);
        }
        else {
            return fn.apply(this, _args);
        }
    }
}


var fn = curry(function(a, b, c) {
    console.log([a, b, c]);
});

// add(1)(2)(3)   vs  add(1)(2, 3) 如果是用上面的通过函数的参数长度来判断， 那这里可能不准