<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import IndexPage from "./views/user-page/index-page.vue";
import LoginPage from "./views/user-page/login-page.vue";

export default {
  name: "App",
  data() {
    return {
      toLogin: false,
    };
  },
  components: {
    IndexPage,
    LoginPage,
  },
  methods: {},
  watch: {
    // 观察用户是否登录
    "$route.path": function (newValue, oldValue) {
      if (
        newValue != "/login" &&
        newValue != "/register" &&
        newValue != "/admin"
      ) {
        if (newValue.indexOf("/index") != -1 || newValue == "/personal/" + this.$store.state.token.username) {
          if (JSON.parse(localStorage.getItem("user")) != null) {
            for (let i in JSON.parse(localStorage.getItem("user"))) {
              if (JSON.parse(localStorage.getItem("user"))[i].islogin == 1) {
                return;
              }
            }
            this.$router.replace("/login");
          }
        }
        if (newValue.indexOf("/admin") != -1) {
          for (let i in this.$store.state.admin) {
            if (this.$store.state.admin[i].islogin == 1) {
              return;
            }
          }
          this.$router.replace("/admin");
        }
      }
    },
  },
};
</script>

<style scoped>
@import "../public/css/el-message.css";
</style>
