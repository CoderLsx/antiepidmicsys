<template>
  <div id="profile_photo">
    <el-avatar>
      <slot name="pic"></slot>
    </el-avatar>
    <span class="usertext" id="userid">
      <slot name="username"></slot>
    </span>
    <span class="usertext" id="userstatus" @click="Quit">
      <slot name="status"></slot>
    </span>
  </div>
</template>

<script>
import { ElMessage } from "element-plus";

const open2 = () => {
  ElMessage({
    message: "注销成功",
    type: "success",
  });
};
const open3 = () => {
  ElMessage({
    message: "请先登录",
    type: "warning",
  });
};

export default {
  el: "",
  components: {},
  data() {
    return {};
  },
  methods: {
    Quit() {
      if (this.$store.state.token.loginstate == "注销") {
        open2();
        this.$store.commit("Logout");
        this.$router.push("/login");
      } else if(this.$store.state.admintoken.loginstate == "注销"){
        open2();
        this.$store.commit("adminLogout");
        this.$router.push("/admin");
      }
    },
  },
};
</script>

<style src="@/assets/css/user/index-photo.css" scoped></style>
