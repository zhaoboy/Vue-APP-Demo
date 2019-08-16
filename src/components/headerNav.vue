<template>
<div>
<el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-menu-item index="1"><router-link to='/'>首页</router-link></el-menu-item>
  <el-submenu index="2">
    <template slot="title">菜单</template>
    <el-menu-item index="2-1"><router-link to='/found'>发现</router-link></el-menu-item>
    <el-submenu index="2-4">
      <template slot="title">选项2</template>
      <el-menu-item index="2-4-1">选项2-1</el-menu-item>
      <el-menu-item index="2-4-2">选项2-2</el-menu-item>
      <el-menu-item index="2-4-3">选项2-3</el-menu-item>
    </el-submenu>
  </el-submenu>
  <el-menu-item index="3" disabled>消息中心</el-menu-item>
  <el-menu-item index="4"><router-link to='/mine'>我的</router-link></el-menu-item>
</el-menu>
<router-view></router-view>
</div>
</template>
<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
