var event = {
    clientList: {},
    listen: function(key,fn) {
        if(!this.clientList[key]) {
            this.clientList[key] = [];
        }
        this.clientList[key].push(fn);
    },
    trigger: function() {
        var key = Array.prototype.shift.call(arguments);
        var fns = this.clientList[key];

        if(!fns || fns.length === 0) {
            return false;
        }

        for(var i = 0, fn; i < fns.length;i++) {
            fn = fns[i];
            fn.apply(this,arguments);
        }
    }

};


var installEvent = function(obj) {
    for (var i in event) {
        obj[i] = event[i];
    }
}
var salesOffices = {}
installEvent(salesOffices);
console.log('salesOffices', salesOffices)
salesOffices.listen('squre90', function() {
    console.log('99方放盘11')
})
salesOffices.listen('squre90', function() {
    console.log('99方放盘22')
})
salesOffices.trigger('squre90')

/**
 * 类比已知知识 document.body.listen
 * document.body.addEventListener('click', function () {
 * // doSomething
 * })
 *  document.body.trigger
 * document.body.click();
 */


// 赋予对象事件（event）能力
/**
 * 匿名函数不好复用 
 */
// var eventObj = (function() {
//     let newEventObj = {};
//     for(var key in event) {
//         newEventObj[key] = event[key];
//     }
    
//     console.log('newEventObj', newEventObj);
    
//     return newEventObj
// })();
// console.log('event', event)
// console.log('eventObj', eventObj)