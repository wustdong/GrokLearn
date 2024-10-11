/**
 * new 
 * [类型]操作符
 * [使用]执行构造函数并返回新对象
 * [参考]https://juejin.cn/post/6844903704663949325
 */

/**
 * 手写模拟 new 操作符
 * @param {Function} ctor 
 * @returns {Object|Function|Regex|Date|Error}
 */
function MyNew(ctor) {
    if (typeof ctor !== 'function') {
        throw 'newOperator function the first param must be a function';
    }
    // 生成一个新对象
    let newObj = Object.create(ctor.prototype);
    // 绑定this 到新对象后，执行构造函数
    // console.log('arguments', arguments)
    // console.log('Array.prototype.slice(arguments, 1)', Array.prototype.slice.apply(arguments,[1]))
    let res = ctor.apply(newObj, Array.prototype.slice.apply(arguments,[1]));// 相当于 arguments.slice(1);
    
    // 校验返回
    if (res instanceof Object) { // 当返回结果是非基础类型，返回执行结果，否则返回新创建的对象
        return res;
    }
    
    // 返回新对象
    return newObj;
}

function Student(name) {
    console.log('this  aa', this);
    this.name = name;
    console.log('this bb', this);

    // 构造函数有返回值
    return {'a': '我是垃圾老A'}
}

Student.prototype.doSomething = function () {
    console.log('dosome', this.name);
}

let student1 = new Student('11');
console.log('s1', student1);
// student1.doSomething();


let student2 = MyNew(Student, '22');
console.log('s2', student2)
// student2.doSomething();