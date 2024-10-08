// 三个状态：PENDING、FULFILLED、REJECTED
const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';

class Promise {
  constructor(executor) {
    this.status = PENDING;
    this.value = undefined;
    this.reason = undefined;
    // 存放成功的回调
    this.onResolvedCallbacks = [];
    // 存放失败的回调
    this.onRejectedCallbacks= [];

    let resolve = (value) => {
      if(this.status ===  PENDING) {
        this.status = FULFILLED;
        this.value = value;
        // 依次将对应的函数执行
        this.onResolvedCallbacks.forEach(fn=>fn());
      }
    } 

    let reject = (reason) => {
      if(this.status ===  PENDING) {
        this.status = REJECTED;
        this.reason = reason;
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
    if (this.status === FULFILLED) {
      onFulfilled(this.value)
    }

    if (this.status === REJECTED) {
      onRejected(this.reason)
    }

    if (this.status === PENDING) {
      // 如果promise的状态是 pending，需要将 onFulfilled 和 onRejected 函数存放起来，等待状态确定后，再依次将对应的函数执行
      this.onResolvedCallbacks.push(() => {
        onFulfilled(this.value)
      });

      // 如果promise的状态是 pending，需要将 onFulfilled 和 onRejected 函数存放起来，等待状态确定后，再依次将对应的函数执行
      this.onRejectedCallbacks.push(()=> {
        onRejected(this.reason);
      })
    }
  }
}

// const promise1 = new Promise((resolve, reject) => {
//     resolve('成功');
//   }).then(
//     (data) => {
//       console.log('success', data)
//     },
//     (err) => {
//       console.log('faild', err)
//     }
//   )


  const promise2 = new Promise((resolve, reject) => {
    // 传入一个异步操作
    setTimeout(() => { 
      resolve('成功');
    },1000);
  }).then( // 因为是在settimeout 中调用的，一开始then 时，还没有resolve, then 中的state 是pending 状态
    (data) => {
      console.log('success', data) // 此时无返回
    },
    (err) => {
      console.log('faild', err)
    }
  )
    
/**
 * https://juejin.cn/post/6994594642280857630
 * 
 * https://juejin.cn/post/6850037281206566919
 */