### fronted 项目初始化记录：

1. 新建并初始化项目
   pnpm create vue@latest ai-assistant

2. 安装依赖
   cd ai-assistant
   pnpm install
   
3. 启动项目
   pnpm dev

### 插件说明：
eslint-plugin-vue 插件，用于在 Vue 项目中使用 eslint 检查代码规范。
- 要求vue 文件中，通常会强制要求在 <script> 标签中显式声明语言类型。如果漏写了 lang="ts" ，Linter 就会报错提示 The 'lang' attribute of '<script>' is missing. 。

### 常见问题
#### 1、关于项目使用了 ts 后
  - 项目中使用了 ts 后，会导致 eslint 报错提示 The 'lang' attribute of '<script>' is missing. 。
  -在 tsconfig.app.json 文件名和内容的开始大括号上出现红色波浪线，主要是由于 TypeScript 语言服务的缓存滞后 导致的。【解决方案：通过对 tsconfig.app.json 进行了一次微小的、无损的修改（顺便添加了标准的 baseUrl: "." 配置），这强制触发了 TypeScript 语言服务的 重新评估 】

#### 2、在浏览器应该如何实现向server 发起请求呢？
- 后端（NestJS） ：配置允许跨域请求。
- 前端（Vite） ：配置一个代理（Proxy），将 /api 请求转发到后端服务。

### Todo:
- 1、安装 vite-plugin-vue-setup-extend 插件，支持在 setup 函数中使用 name 选项
  - pnpm install vite-plugin-vue-setup-extend -D
  - 配置 vite.config.ts 文件，添加插件
    import vueSetupExtend from 'vite-plugin-vue-setup-extend'
    export default defineConfig({
      plugins: [
        vueSetupExtend(),
      ],
    })
