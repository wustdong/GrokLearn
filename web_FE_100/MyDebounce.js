/**
 * 防抖
 * 王者荣耀游戏来说，防抖就好比游戏里面的回城。
 * 如果在回城时间内再次点击回城（回城被打断），则会重新计算回城时间。
 */

function MyDebounce(fn, delay) {
    let timer;

    return function() {
        const context = this;
        const args = arguments;
        if (timer) {
            clearTimeout(timer);
        }
        
        timer = setTimeout(() => {
            fn.apply(context, args)
        }, delay)
    }
}