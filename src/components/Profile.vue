<!--  -->
<template>
  <div>
    <span>我是档案页面</span>
    <ul>
      <li>{{ $route.query.name }}</li>
      <li>{{ $route.query.age }}</li>
      <li>{{ $route.query.height }}</li>
    </ul>
    <button @click="btnClick">点击</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    btnClick() {
      console.log(this.$router);
      console.log(this.$route);
    },
  },
};
</script>

<style  scoped>
</style>
