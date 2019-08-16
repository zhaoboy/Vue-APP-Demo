<template>
  <div class="container">
    <p>{{ greeting }} footerNav!</p>
    <div class="row">
      <!-- 使用 router-link 组件来导航. -->
      <!-- 通过传入 `to` 属性指定链接. -->
      <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
      <router-link to='/' message1="hello!" class="col-md-4">home</router-link>
      <router-link to='/found' class="col-md-4">found</router-link>
      <router-link to='/mine' class="col-md-4">mine</router-link>
      <!-- 路由匹配到的组件将渲染在这里 -->
    </div>
  </div>
</template>

<script>

export default {
  name: 'footerNav',
  data: function () {
    return {
      greeting: 'Hello'
    }
  }
}
</script>

<style scoped>
.router-link-exact-active {
  color: red !important;
  font-weight: bold;
  outline: none;
}
.container {
  position: fixed;
  bottom: 0;
}
</style>
