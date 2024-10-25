/**
 * 节流
 * 
 * lodash 中使用
 * throttle(fn, 300)
 * 【固定时间】内控制执行次数的场景，eg: 游戏中的普通攻击
 * [是什么]在某个事件持续触发时，限制一定时间间隔只执行一次回调函数
 */

function MyThrottle(fn, delay) {
    console.log('my throttle this', this)
    let lastT;
    return function() {
        let context = this,
            args = arguments;
        if(!lastT || Date.now() - lastT > delay) {
            fn.apply(context, [...args]);
            lastT = Date.now();
        } 
        // 否则就不做响应
    }   
}

// 验证
function btnClick() {
    console.log('啊，我被点击了')
    console.log('this in btnclick', this)
}
let fnCb = MyThrottle(btnClick, 3000);
fnCb();
fnCb();
