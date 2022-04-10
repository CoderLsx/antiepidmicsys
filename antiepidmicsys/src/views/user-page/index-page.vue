<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <tarbar-top>
          <!-- logo -->
          <template #logo>
            <span id="logo" @click="index">疫情防控宣传交流平台</span>
          </template>

          <!-- 个人信息栏 -->
          <template #photo>
            <tarbar-photo>
              <template #pic>
                <img :src="this.$store.state.token.photo" @click="myself" />
              </template>
              <template #username>
                <span @click="myself">{{
                  this.$store.state.token.userid
                }}</span>
              </template>
              <template #status> 注销 </template>
            </tarbar-photo>
          </template>
        </tarbar-top>
      </el-header>
      <el-container>
        <el-aside width="200px"> <tarbar-left></tarbar-left></el-aside>
        <el-main> <router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import TarbarTop from "../../components/index-comp/tarbarTop.vue";
import TarbarSubmit from "../../components/index-comp/tarbarSubmit.vue";
import TarbarPhoto from "../../components/index-comp/tarbarPhoto.vue";
import TarbarLeft from "../../components/index-comp/tarbarLeft.vue";
import Carousel from "./Carousel.vue";

export default {
  data() {
    return {
    };
  },
  created() {
    document.title = "疫情防控宣传交流平台";
  },
  components: {
    TarbarTop,
    TarbarSubmit,
    TarbarPhoto,
    TarbarLeft,
    Carousel,
  },
  computed: {},
  methods: {
    index() {
      this.$router.push("/index/Carousel");
    },
    myself() {
      this.$router.push("/personal/" + this.$store.state.token.username);
      this.$route.params.userid;
    },
  },
};
</script>

<style src="@/assets/css/user/index-page.css" scoped></style>
<style scoped>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>
