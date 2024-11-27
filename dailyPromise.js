/**
 * const promise1 = new DailyPromise((reslove, reject) => {
 *  let answer = 'do you love me'
 *   if(answer = 'yes') {
 *      resolve('success')   
 *   } else (answer = 'no') {
 *      resolve('fail')   
 *  }
 * })
 * 
 * 
 * promise1.then(2).then((res) => {
 *      console.log('then then res', res)
 * })
 */
const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

function DailyPromise(executor) {
    // 定义状态
    this.status = '';
    this.result = '';// 记录一下结果
    this.onFullFilledArr = [];
    this.onFailedArr = [];
    function resolve(result) {
        if( this.status === PENDING) {
            this.status = FULFILLED;
            this.result = result;
            this.onFullFilledArr.forEach(fn => fn());
        }
    }

    function reject(reson) {
        if( this.status === PENDING) {
            this.status = REJECTED;
            this.result = reson;
            this.onFailedArr.forEach(fn => fn());
        }
    }
    // 执行传参函数
    try {
         executor(resolve, reject);
    } catch(e){
        throw('promise error') // or reject ?
    }
}

DailyPromise.prototype.then = function(onFullied, onFailed) {
    onFullied = typeof onFullied === 'function' ? onFullied : val => val;
    onFailed = typeof onFailed === 'function' ? onFailed : () => {throw new Error(onFailed)};

    return new DailyPromise(function (resolve, reject)  {

        // 定义一个函数，检测 then 函数的回调参数是否为promise,如果为promise 则用链式调用传递下去
        let resolvePromise = cb => {
            const res = cb(this.result);
            if( typeof res === DailyPromise) {
                res.then(resolve, reject)
            } else {
                resolve()
            }
        }
      
        if(this.status === PENDING) {
            this.onFullFilledArr.push(onFullied);
            this.onFailedArr.push(onFailed);
        } else if(this.status === FULFILLED) {
            resolvePromise(onFullied)
        } else {
            resolvePromise(onFailed);
        }
    })
}


const promise3 = new DailyPromise((resolve, reject) => {
    console.log('promise exectuor')
    resolve('成功');
  }).then(22).then(res => console.log('promise then then res:', res))