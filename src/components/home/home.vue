<template>
  <el-container class="container">
    <el-header class="header">
      <el-row>
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <img src alt="无法显示图片" />
          </div>
        </el-col>
        <el-col :span="18" class="middle">
          <h3>电商后台管理系统</h3>
        </el-col>
        <el-col :span="2">
          <div class="grid-content bg-purple">
            <a class="loginout" @click.prevent="handleSignout()" href="#">退出</a>
          </div>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside class="aside" width="300px">
        <!-- 侧边栏导航-->
        <el-row class="tac">
          <el-col :span="12">
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
            >
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>导航一</span>
                </template>
                <el-menu-item index="1-1">
                  <i class="el-icon-location"></i>
                  <span>选项一</span>
                </el-menu-item>
              </el-submenu>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-main class="main">main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  beforeCreate () {
    // newVue之前自动触发改方法

    // 获取token
    const token = localStorage.getItem("token");
    if (!token) {
      // token 没有->登录
      this.$router.push({ name: "login" });
    }
    // if token 有-> 继续渲染组件
  },
  methods: {
    handleSignout () {
      // 1. 清除token
      localStorage.clear();
      // 2. 提示
      this.$message.success("退出成功");
      // 3. 来到login组件
      this.$router.push({ name: "login" });
    }
  }
};
</script>

<style >
.container {
  height: 100%;
}
.header {
  background-color: #b3c0d1;
}
.aside {
  background-color: #d3dce6;
}
.main {
  background-color: #e9eef3;
  height: 100%;
}

.middle {
  text-align: center;
}
.loginout {
  line-height: 56px;
  text-decoration: none;
}
</style>