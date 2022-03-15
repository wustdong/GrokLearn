setTimeout(function () {
  console.log(1); // 下一轮循环的宏任务
});

new Promise(function (resolve, reject) {
  console.log(2); // new promise的构造函数是同步的
  resolve(3); // 同步
}).then(function (val) {
  console.log(val); // 本轮循环的微任务
});

/** 
 * settimeout、promise 都是异步时间，
 * console.log(1); 先入事件队列执行栈
*/
