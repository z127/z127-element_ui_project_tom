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
> git config --global user.email "你的邮箱"
> git config --global user.name "你的名字"
5. 在代码托管平台新建远程仓库
6. git push 

#### 4.login，create git branch
> create a new branch, just for login module
> git branch
> git checkout -b dev-login :create a login branch
> create component+  deploy router

#### 5.login import form component
> el-form
1. import 
2. adjust label(h2+el-button)
> label-position='top'

#### 6. adjust css
> height:100%
> tips: div#app height:100%

#### 7.login-axios
> axios is not the native plugins- Vue.use(axios)

// 插件模块
import axios from 'axios'

const MyServerHttp = {}

MyServerHttp.install = function (Vue) {
  // 4. 添加实例方法
  Vue.prototype.$http = axios
}

export default MyServerHttp
> in main.js -> Vue.use(plugins name)
> then : this.$http.get

#### username:tom123456
#### password:tom123456

#### 8.send post query
> login.vue methods handleLogin()
1. this.$http.post('login',this.formdata).then((res)=>{})
2. object parse value res.data
```js
    const {
        data,
        meta:{msg,status}
    }=res.data
const {meta:{msg,status}}={meta:{msg:"11",status:200}}
obj={masg:"11",status:200}
{msg,status}={msg:"11",status:200}
msg:11 status:200
```
> login success -> redirect to home page
1. js programming grammer 
  tis.$router.push({name:'home'})
2. APP.vue router-view
3. create home component in src/components/home/home.vue
4. src/router/index.js configure home component


> orginal data
```js
   this.$http.post("login", this.formdata).then(res => {
        // alert(JSON.stringify(res.data))
        // login success
        // 1.route to home
        // 2. inform success
        const {
          data,
          meta: { msg, status }
        } = res.data
        // login failed
        // 1. send message
        if (status === 200) {
          this.$router.push({name:'home'})
          this.$message.success(msg)
        } else {
          this.$message.warning(msg)
        }
      })
```
### 9.login simplify login request async and await
> use async and wait 
> let 

```js
  async handleLogin() {
      // 希望异步操作的代码看起来像同步代码
      // async+await
      const res = await this.$http.post('login', this.formdata);
      const {
        data ,
        meta: { msg, status }
      } = res.data

      if (status === 200) {
        this.$router.push({ name: 'home' })
        this.$message.success(msg)
      } else {
        this.$message.warning(msg)
      }
    }
  }
```

### 10.login success and store token 
> purpose: user don't need to  login > url direct to home
> login success, store right user token

```js
  localStorage.setItem( 'token' ,data.token)
```

### 11.sidebar -navagation dashboard
> el-menu
 configuration 
1.router true index value=path value  start router schema 
router	是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转
2.unique-opened	
是否只保持一个子菜单的展开 

### 12.进入首页的权限验证 
> 如果没有登录过 就不能进入到home组件
```js
 beforeCreate () {
    // newVue之前自动触发改方法

    // 获取token
    const token = localStorage.getItem("token");
    if (!token) {
      // token 没有->登录
      this.$router.push({ name: "login" });
    }
    // if token 有-> 继续渲染组件
  }
```

### 12.退出功能 
> 如果没有登录过 就不能进入到home组件
```js
 handleSignout () {
      // 1. 清除token
      localStorage.clear();
      // 2. 提示
      this.$message.success("退出成功")
      // 3. 来到login组件
      this.$router.push({ name: "login" })
    }
  }
```