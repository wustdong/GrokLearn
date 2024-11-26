/**
 * @description 职责链模式
 */
const NEXT_SUCCESSOR = 'nextSuccessor';
const Chain = function (fn){
    this.fn = fn;
    this.next = null;      
}
// 传递节点：同步、异步
Chain.prototype.setNextSuccessor = function (successor){
    return this.next = successor;
}

Chain.prototype.passRequest = function() {
    const res = this.fn.apply(this, arguments); 

    if(res === NEXT_SUCCESSOR) {
        return this.next && this.next.passRequest.apply(this.next, arguments)
    }

    //?
    return res;
}


const fn1 = new Chain(() => {
    console.log('fn 111')

    return NEXT_SUCCESSOR
})


const fn2 = new Chain(() => {
    console.log('fn 2222')
    return NEXT_SUCCESSOR;
})

const fn3 = new Chain(() => {
    console.log('fn 333')
})


fn1.setNextSuccessor(fn2).setNextSuccessor(fn3);
fn1.passRequest()



// nextSuccessor 
// function chainof55() {
//     console.log('chainof55')
// }

// function chainof22() {
//     console.log('chainof22')
// }