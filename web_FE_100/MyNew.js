/**
 * new 
 * [类型]操作符
 * [使用]执行构造函数并返回新对象
 * [参考]https://juejin.cn/post/6844903704663949325
 */

function MyNew(ctor) {
    // 生成一个新对象
    let newObj = Object.create(ctor.prototype);
    // 绑定this 到新对象后，执行构造函数
    console.log('arguments', arguments)
    console.log('Array.prototype.slice(arguments, 1)', Array.prototype.slice.apply(arguments,[1]))
    ctor.apply(newObj, Array.prototype.slice.apply(arguments,[1]));// 相当于 arguments.slice(1);
    // 返回新对象
    return newObj;
}

function Student(name) {
    console.log('this  aa', this);
    this.name = name;
    console.log('this bb', this);
}

let student1 = new Student('11');
console.log('s1', student1);

let student2 = MyNew(Student, '22');
console.log('s2', student2)