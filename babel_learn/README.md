## 可实操的 Babel7 知识
> Babel 是一个工具链，主要用于将 ECMAScript 2015+ 版本的代码转换为向后兼容的 JavaScript 语法，以便能够运行在当前和旧版本的浏览器或其他环境中。

### 为什么项目中有那么多的 babel 插件？  
以支持箭头函数的插件 @babel/plugin-transform-arrow-functions 为例，如果我们 一个一个添加插件，会非常繁琐。那么有什么办法可以简化这个配置呢？

答案是有：”通过使用或创建一个 preset 即可轻松使用一组插件。“
- @babel/preset-env
- @babel/preset-flow
- @babel/preset-react
- @babel/preset-typescript

### @babel/preset-env 

### @babel/polyfill  
因为语法转换只是将高版本的语法转换成低版本的，但是新的内置函数、实例方法无法转换。这时，就需要使用 polyfill 上场了，顾名思义，polyfill的中文意思是垫片，所谓垫片就是垫平不同浏览器或者不同环境下的差异，让新的内置函数、实例方法等在低版本浏览器中也可以使用。  
@babel/preset-env 提供了一个 useBuiltIns 参数，设置值为 usage 时，就只会包含代码需要的 polyfill

### @babel/plugin-transform-runtime  
> @babel/plugin-transform-runtime 是一个可以重复使用 Babel 注入的帮助程序，以节省代码大小的插件。  

以上useBuiltes 引入需要的转换函数时，是通过注入转换函数的方式实现。但是你想一下，如果你有10个文件中都使用了这个 class，是不是意味着 _classCallCheck、_defineProperties、_createClass 这些方法被 inject 了10次。这显然会导致包体积增大，最关键的是，我们并不需要它 inject 多次。  
这个时候，就是 @babel/plugin-transform-runtime 插件大显身手的时候了，使用 @babel/plugin-transform-runtime 插件，所有帮助程序都将引用模块 @babel/runtime，这样就可以避免编译后的代码中出现重复的帮助程序，有效减少包体积。    
另外，除了可以减少编译后代码的体积外，我们使用它还有一个好处，它可以为代码创建一个沙盒环境，如果使用 @babel/polyfill 及其提供的内置程序（例如 Promise ，Set 和 Map ），则它们将污染全局范围。虽然这对于应用程序或命令行工具可能是可以的，但是如果你的代码是要发布供他人使用的库，或者无法完全控制代码运行的环境，则将成为一个问题。

