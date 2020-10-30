## 可实操的 Babel7 知识
> Babel 是一个工具链，主要用于将 ECMAScript 2015+ 版本的代码转换为向后兼容的 JavaScript 语法，以便能够运行在当前和旧版本的浏览器或其他环境中。

### 1、为什么项目中有那么多的 babel 插件？  
以支持箭头函数的插件 @babel/plugin-transform-arrow-functions 为例，如果我们 一个一个添加插件，会非常繁琐。那么有什么办法可以简化这个配置呢？

答案是有：”通过使用或创建一个 preset 即可轻松使用一组插件。“
- @babel/preset-env
- @babel/preset-flow
- @babel/preset-react
- @babel/preset-typescript

### @babel/preset-env 

### @babel/polyfill  
因为语法转换只是将高版本的语法转换成低版本的，但是新的内置函数、实例方法无法转换。这时，就需要使用 polyfill 上场了，顾名思义，polyfill的中文意思是垫片，所谓垫片就是垫平不同浏览器或者不同环境下的差异，让新的内置函数、实例方法等在低版本浏览器中也可以使用。

