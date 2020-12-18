<!--  -->
<template>
  <div>
    <h1>我是用户界面</h1>
    <p>{{ username }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: this.$route.params.username,
    };
  },
};
</script>

<style  scoped>
</style>
