<template>
  <div>
    <p>我的</p>
    <div v-for="user in users" :key="users.id">{{user.id}} - {{user.name}}</div>
    <el-button @click="fetchUsers">获取用户列表</el-button>
    <input type="text" v-model="keyWord">
    <div>{{keyWord}}</div>
    <div>{{reversedMessage}}</div>
    <div v-show="checkShow">显示</div>
    <div><button @click="changeView()">切换显示</button></div>
    <div>
      千米 : <input type = "text" v-model = "kilometers">
      米 : <input type = "text" v-model = "meters">
    </div>
    <div id="info"></div>
  </div>
</template>
<script type="text/javascript">
  export default {
    data() {
      return {
        users: [],
        keyWord: '关键词检索',
        checkShow: true,
        kilometers : 0,
        meters:0
      }
    },
    methods: {
      fetchUsers: function () {
        const baseURI = 'https://jsonplaceholder.typicode.com/users'
        this.$http.get(baseURI)
        .then((result) => {
          this.users = result.data
        })
      },
      changeView: function () {
        this.checkShow = !this.checkShow
      }
    },
    computed: {
      reversedMessage: function () {
        // `this` 指向 vm 实例
        return this.keyWord.split('').reverse().join('')
      }
    },
    watch: {
      kilometers:function(val) {
        this.kilometers = val;
        this.meters = this.kilometers * 1000
      },
      meters : function (val) {
        this.kilometers = val / 1000;
        this.meters = val;
      },
    },
    mounted () {
      const baseURI = 'https://jsonplaceholder.typicode.com/users'
      this.$http.get(baseURI)
      .then((result) => {
        this.users = result.data
      })
    }
  }

</script>
