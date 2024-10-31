var event = {
    clientList: {},
    listen: function(key,fn) {
        if(!this.clientList[key]) {
            this.clientList[key] = fn;
        }
        this.clientList[key].push(fn);
    },
    trigger: function() {
        var key = Array.prototype.shift.call(arguments);
        fns = this.clientList[key];

        if(!fns || fns.length === 0) {
            return false;
        }

        for(var i = 0, fn; i < fns.length;i++) {
            fn = fns[i+1];
            fn.apply(this,arguments);
        }
    }

};

// 赋予对象事件（event）能力
var eventObj = (function() {
    let newEventObj = {};
    for(var key in event) {
        newEventObj[key] = event[key];
    }
    // // 拷贝 event 的属性和方法
    // for (let key in event) {
    //     if (typeof event[key] === 'function') {
    //         // 绑定正确的上下文，使方法可以使用 newEventObj 作为 this
    //         newEventObj[key] = event[key].bind(newEventObj);
    //     } else {
    //         newEventObj[key] = event[key];
    //     }
    // }
    return newEventObj
})();
console.log('event', event)
console.log('eventObj', JSON.stringify(eventObj))

var installEvent = function(obj) {
    for (var i in event) {
        obj[i] = event[i];
    }
}
var salesOffices = {}
var sales = installEvent(salesOffices);

console.log('sales', sales)
console.log('salesOffices', salesOffices)