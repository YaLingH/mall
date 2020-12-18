<template>
  <div id="app">
    <router-link to="/home" tag="button" replace>Home</router-link>
    <router-link to="/about" tag="button" replace>About</router-link>
    <router-link v-bind:to="'/user/' + username" tag="button" replace
      >User</router-link
    >
    <!-- <router-link
      v-bind:to="{
        path: '/profile',
        query: { name: 'hyl', age: 18, height: 160 },
      }"
      tag="button"
      >Profile</router-link
    > -->
    <button @click="proClick">档案</button>
    <keep-alive><router-view></router-view></keep-alive>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      username: "hyl",
    };
  },
  methods: {
    proClick() {
      // this.$router.replace("/profile");
      this.$router.replace({
        path: "/profile",
        query: {
          name: "hyl",
          age: 18,
          height: "160",
        },
      });
    },
  },
};
</script>

<style>
.router-link-active {
  color: red;
}
</style>
