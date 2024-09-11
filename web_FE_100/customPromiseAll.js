/**
 * 实现promise.all 函数
 * @param {*} arr 
 * @returns 
 * @abstract
 * // 使用 Promise.all 来同时执行这三个异步任务
    Promise.all([asyncTask1(), asyncTask2(), asyncTask3()])
        .then(results => {
            // 当所有任务都完成时，这个 then 会被调用
            console.log('All tasks completed');
            console.log(results); // ['Result of Task 1', 'Result of Task 2', 'Result of Task 3']
        })
        .catch(error => {
            // 如果任何一个任务失败，这个 catch 会被调用
            console.error('An error occurred:', error);
        });
 */
function customPromiseAll (arr) {

    return new Promise((resolve, reject) => {
        if (!arr || !arr.length || arr.length === 0) {
            // 任务数组为空
            console.log('arr is null')
            resolve();
        }
        const arrResult = [];
        let arrResultLen = 0;
        for( let i = 0; i< arr.length; i++ ) {
            arrResult[i] = eval(arr[i]);
            console.log('第', i, '个任务执行', JSON.stringify(arrResult[i])); // 打印是{}
            arrResult[i].then(res => {
                console.log('第', i, '个任务执行成功', res);
                arrResultLen++;
                // console.log('arrResultLen' , arrResultLen)
                if (arrResultLen === arr.length) {
                    console.log('all task completed--')
                    resolve('all task completed')
                }
            }).catch(err => {
                console.log('第', i, '个任务执行失败', err);
                arrResultLen++;
                reject('an error occurred');
            })
        }

    });

}
// 定义两个异步操作，这里使用 setTimeout 来模拟
const asyncTask1 = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('Task 1 completed');
        resolve('Result of Task 1');
      }, 2000);
    });
  };
  
  const asyncTask2 = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('Task 2 completed');
        // resolve('Result of Task 2');
        reject('reject Result of Task 2')
      }, 1000);
    });
  };
  
customPromiseAll([asyncTask1(), asyncTask2()]).then(res => {
    console.log('customPromiseAll res', res)
}).catch(err => {
    console.log('customPromiseAll err', err)
})
/**
 * done: 目前解决了全部完成才可以 promise.all 的功能
 * 待定: 但是如果其中一个任务失败了，剩下的任务不能继续执行了，目前先于失败的任务之前执行的任务会继续执行
 */
// // 对比测试
// Promise.all([asyncTask1(), asyncTask2()]).then(res => {
//   console.log('customPromiseAll res ', res)
// }).catch(err => {
//   console.log('customPromiseAll err', err)
// })