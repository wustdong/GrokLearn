const p = new Promise(
    (resolve, reject) => {
        console.log('promise executor running');
       resolve('111')
    },
    (e) => console.log('22')
);


p.then(2).then(res => console.log('then then', res));

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