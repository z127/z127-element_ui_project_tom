# element_ui_tom

> study element ui

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


1. 在package.json中scripts 自定义指令
>  npm run 自定义指令(dev)
>  npm run lintfix(自动按照规范修正全部(但是,多余的变量这个ERROR不会修正)的js代码)
>  关闭eslint  build/webpack.base.conf.js 注释掉42行

#### 1.element ui 安装及引入
在main.js 引入elementui
>npm i element-ui -S
>在main.js import
> Vue.use(ElementUI)
#### 2.简化模板
#### 3.git版本控制
> git/svn
1. git init -> .git
2. git status
3. git add .
4. git commit -m "zhushi "
5. 在代码托管平台新建远程仓库
6. git push 