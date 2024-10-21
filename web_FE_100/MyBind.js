/**
 * 【react DOM 事件对象】中需要将事件绑定this 对象：
 * this.handleClick = this.handleClick.bind(this);
 * onClick={handleClick}
 * @return 改变了this 的新函数
 * @attention 若要兼容new, this 需要指向新创建的对象，而不是绑定的对象
 */

function MyBind() {

}
/**
 * why we need change this？
 */
var name ="lucy";
var obj ={
    name: "martin'",
    say: function(){
        console.log(this.name);
    }
};
obj.say(); 
setTimeout(obj.say,0);

/**
 * how to fix obj.say in settimeout to martin?
 */
// use bind
setTimeout(obj.say.bind(obj),0);

// use arrow function
setTimeout(()=>obj.say(),0);