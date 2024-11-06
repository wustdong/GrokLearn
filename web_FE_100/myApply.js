/**
 * 
 * @param {*} context 
 * @param  {...any} args 
 * @returns 
 * 
 * 使用方法 
 * fn.apply(context, args);
 * 立即执行
 */
// 1.是Function 原型上的方法
Function.prototype.myApply = function (context) {
    var context = context || window // 2、默认是window
    context.fn = this;

    var result;
    if(arguments[1]) {
        result = context.fn(arguments[1]);
    } else {
        result = context.fn();
    }

    delete context.fn;

    return result;
}