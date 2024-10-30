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

        for(var i = 0; i < fns.length;i++) {
            fn.apply(this,arguments);
        }
    }

};
