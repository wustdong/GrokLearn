const p = new Promise(
    (resolve, reject) => {
        console.log('promise executor running');
       resolve('111')
    },
    (e) => console.log('22')
);


p.then(2).then(res => console.log('then then', res));
/**
 * 问题：为什么第二个then 打印的res 是111不是2呢？
 * 解释：在这段代码中，p.then(2) 并不会传递 2 给下一个 .then()。
 * 这是因为 Promise 的规范规定，如果 then() 的第一个参数不是一个函数，
 * JavaScript 引擎会忽略这个值，并且将其替换为一个默认的函数，这个函数只是简单地返回 Promise 的解决值。
 */

/**
 * 【问题一】p.then(4)，then 方法里，参数是数值、字符串，（值穿透） 
 *  res =>res
 *
 * 【问题二】如果return 一个new promise ，会发生什么？
 * p.then((res) => {
    console.log('res');
    return  new Promise()
})
 */