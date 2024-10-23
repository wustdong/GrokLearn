/**
 * 【react DOM 事件对象】中需要将事件绑定this 对象：
 * this.handleClick = this.handleClick.bind(this);
 * onClick={handleClick}
 * @return 改变了this 的新函数
 * @attention 若要兼容new, this 需要指向新创建的对象，而不是绑定的对象
 * https://github.com/Jacky-Summer/personal-blog/blob/master/%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3JavaScript%E7%B3%BB%E5%88%97/%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3JavaScript%E4%B9%8B%E6%89%8B%E5%86%99call%2C%20apply%2C%20bind%E6%96%B9%E6%B3%95.md
 */
Function.prototype.MyBind = function (context) {
    // 因为是Function原型上的方法，调用 mybind 的需要时函数
    if (typeof this  !=='function') {
        return new TypeError('Error')
    }
    console.log('my bind arg', arguments);
    console.log('array arg', [...arguments])
    const args = [...arguments].slice(1);
    const self = this;

    function boundFn() {
        console.log('Fn arg', arguments);
        const isNew = this instanceof boundFn;
        return self.apply(isNew ? this : context, args.concat(...arguments))
    }
    boundFn.prototype = Object.create(self.prototype);
    return boundFn;
}

function Person(name) {
    this.name = name;
}
  
const obj = { name: 'Lucy' };
const BoundPerson = Person.MyBind(obj); // 将Person 的this 改为obj

const instance = new BoundPerson('Martin'); // 这里是new ，新生成一个对象，而不是继续指向obj
console.log(instance.name);  // 输出 'Martin'
/**
 * why we need change this？
 */
// var name ="lucy";
// var obj ={
//     name: "martin'",
//     say: function(){
//         console.log(this.name);
//     }
// };
// obj.say(); 
// setTimeout(obj.say,0);

// /**
//  * how to fix obj.say in settimeout to martin?
//  */
// // use bind
// setTimeout(obj.say.bind(obj),0);

// // use arrow function
// setTimeout(()=>obj.say(),0);

  