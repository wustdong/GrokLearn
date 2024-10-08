// https://zhuanlan.zhihu.com/p/144058361
// var myP = new Promise(function(resolve, reject){
//     console.log('执行')
//     setTimeout(function(){
//         reject(3)
//     }, 1000)
// });

// myP.then(function(res){
//     console.log(res)
// },function(err){
//     console.log(err)
// });
// myP.then(function(res1) {
//     console.log('res1', res1);
// })

// 要求： 
// 1、基本结构
// 2、不可变
// 3、then 实现
// 4、支持异步

const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

function PromiseByHand(executor) {
        var _this = this;
        this.state = PENDING; //状态
        this.value = undefined; //成功结果
        this.reason = undefined; //失败原因
        this.onFulfilledArr = [];
        this.onRejectedArr = [];
        function resolve(value) {
                if(_this.state === PENDING) { // 当Promise对象已经由等待态（Pending）改变为执行态（Fulfilled）或者拒绝态（Rejected）后，就不能再次更改状态，且终值也不可改变
                        _this.state = FULFILLED;
                        _this.value = value;
                        console.log('_this', _this);
                        _this.onFulfilledArr.forEach(full => full(value));
                }
        }
        function reject(reason) {
                if(_this.state === PENDING) { // 当Promise对象已经由等待态（Pending）改变为执行态（Fulfilled）或者拒绝态（Rejected）后，就不能再次更改状态，且终值也不可改变
                        _this.state = REJECTED;
                        _this.reason = reason;
                        _this.onRejectedArr.forEach(full => full(reason));
                }
        }
        executor(resolve, reject)
}

// then 方法可以多次调用
// 当Promise的状态改变之后，不管成功还是失败，都会触发then回调函数，
PromiseByHand.prototype.then = function (onFulfilled, onRejected) {
        console.log('this::', this);
        if(this.state === PENDING) {
                typeof onFulfilled === 'function' && this.onFulfilledArr.push(onFulfilled)
                typeof onRejected === 'function' && this.onRejectedArr.push(onRejected)
        }
        if(this.state === FULFILLED){
                typeof onFulfilled === 'function' && onFulfilled(this.value);
        }
        if(this.state === REJECTED){
                typeof onRejected === 'function' && onRejected(this.reason);
        }
};


var myP = new PromiseByHand(function(resolve, reject){
        console.log('执行')
        setTimeout(function(){
                resolve(4);
                reject(3)
        }, 1000)
});

myP.then(
  function (res) {
    console.log('成功',res);
  },
  function (err) {
    console.log('失败', err);
  }
);

// 打印 执行 成功4


/**
 * 目前发现的问题，then 不能链式调用
 * 
 * 【链式调用】在我们使用 Promise 的时候，当 then 函数中 return 了一个值，
 * 不管是什么值，我们都能在下一个 then 中获取到，这就是所谓的then 的链式调用
 */