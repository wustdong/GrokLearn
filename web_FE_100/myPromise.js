// 三个状态：PENDING、FULFILLED、REJECTED
const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';

class MyPromise {
  constructor(executor) {
    this.status = PENDING;
    // this.value = undefined;
    // this.reason = undefined;
    this.promiseResult = undefined;
    // 存放成功的回调
    this.onResolvedCallbacks = [];
    // 存放失败的回调
    this.onRejectedCallbacks= [];

    let resolve = (value) => {
      if(this.status ===  PENDING) {
        this.status = FULFILLED;
        // this.value = value;
        this.promiseResult = value;
        // 依次将对应的函数执行
        this.onResolvedCallbacks.forEach(fn=>fn());
      }
    } 

    let reject = (reason) => {
      if(this.status ===  PENDING) {
        this.status = REJECTED;
        // this.reason = reason;
        this.promiseResult = reason;
        // 依次将对应的函数执行
        this.onRejectedCallbacks.forEach(fn=>fn());
      }
    }

    try {
      executor(resolve,reject)
    } catch (error) {
      reject(error)
    }
  }

  then(onFulfilled, onRejected) {
    // console.log('in then-----')
    // 参数校验，规范参数为函数
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : val => val;
    onRejected = typeof onRejected === 'function' ? onRejected : reason => {throw reason};

    let thenPromise =  new MyPromise((resolve, reject) => {

      // 链式调用核心逻辑
      let resolvePromise = cb => {
        try {
          let x = cb(this.promiseResult);
          // console.log('x---', x)
          if (x instanceof MyPromise) {
            x.then(resolve, reject);
          } else {
            resolve(x);
          }
        } catch (err) {
          reject(err);
        }
        
      }
      if (this.status === FULFILLED) {
        // onFulfilled(this.value)
        setTimeout(() => resolvePromise(onFulfilled));
      }

      if (this.status === REJECTED) {
        // onRejected(this.reason)
        setTimeout(() => resolvePromise(onRejected));
      }

      if (this.status === PENDING) {
        // 如果promise的状态是 pending，需要将 onFulfilled 和 onRejected 函数存放起来，等待状态确定后，再依次将对应的函数执行
        this.onResolvedCallbacks.push(() => 
          setTimeout(() => resolvePromise(onFulfilled))
        );

        // 如果promise的状态是 pending，需要将 onFulfilled 和 onRejected 函数存放起来，等待状态确定后，再依次将对应的函数执行
        this.onRejectedCallbacks.push(()=> 
          setTimeout(() => resolvePromise(onRejected))
        )
      }
    });
    
    return thenPromise;
    
  }
}
//【测试用例 004】
const promise4 = new MyPromise((resolve, reject) => {
  console.log('promise executor');
  resolve('成功');
}).then((res) => {
  console.log('promise then res:', res);
  return new MyPromise((resolve) => {
      setTimeout(() => {
          resolve('异步成功');
      }, 1000);
  });
}).then((res) => {
  console.log('promise then then res:', res);
});
// 【测试用例 003】
// const promise3 = new MyPromise((resolve, reject) => {
//   console.log('promise exectuor')
//   resolve('成功');
// }).then(22).then(res => console.log('promise then then res:', res))
// // 【测试用例 001】
// const promise1 = new MyPromise((resolve, reject) => {
//     resolve('成功');
//   }).then(
//     (data) => {
//       console.log('success', data)
//     },
//     (err) => {
//       console.log('faild', err)
//     }
//   )


// // 【测试用例 002】
//   const promise2 = new MyPromise((resolve, reject) => {
//     // 传入一个异步操作
//     setTimeout(() => { 
//       resolve('成功');
//     },1000);
//   }).then( // 因为是在settimeout 中调用的，一开始then 时，还没有resolve, then 中的state 是pending 状态
//     (data) => {
//       console.log('success', data) // 此时无返回
//     },
//     (err) => {
//       console.log('faild', err)
//     }
//   )
    









/**
 * 参考文章
 * https://juejin.cn/post/6994594642280857630
 * 
 * https://juejin.cn/post/6850037281206566919
 */