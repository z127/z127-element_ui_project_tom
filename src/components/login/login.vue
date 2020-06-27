<template>
  <div class="login-wrap">
    <el-form class="login-form" label-position="top" label-width="80px" :model="formdata">
      <h2>用户登录</h2>
      <el-form-item label="用户名">
        <el-input v-model="formdata.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formdata.password"></el-input>
      </el-form-item>
      <el-button class="login-btn" type="primary" @click.prevent="handleLogin()">登录</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formdata: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    //  登录请求
    async handleLogin() {
      // 希望异步操作的代码看起来像同步代码
      // async+await
      const res = await this.$http.post('login', this.formdata);
      const {
        data,
        meta: { msg, status }
      } = res.data

      if (status === 200) {
        // login success
        // 0. store token
        localStorage.setItem('token',data.token)
        // 1. redirect to home 
        this.$router.push({ name: 'home' })

        this.$message.success(msg)
      } else {
        this.$message.warning(msg)
      }
    }
  }
}
</script>

<style>
.login-wrap {
  background-color: #324152;
  height: 100%;
  /**弹性盒布局 */
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-wrap .login-form {
  background-color: #fff;
  width: 400px;
  padding: 30px;
  border-radius: 5px;
}
.login-wrap .login-form .login-button {
  width: 100%;
}
</style>
