<!--  -->
<template>
  <div>
    <h1>我是home页面</h1>
    <p>{{ msg }}</p>
    <button @click="btnClick">按钮</button>
    <router-link to="/home/homenews">新闻</router-link>
    <router-link to="/home/homemessage">消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "我是home组件",
    };
  },
  methods: {
    btnClick() {
      console.log(this.$route);
    },
  },
  created() {
    console.log("home create");
  },
  destroyed() {
    console.log("home destory");
  },
  activated() {
    console.log("home activated");
  },
};
</script>

<style  scoped>
</style>
