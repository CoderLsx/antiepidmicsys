<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <tarbar-top>
          <!-- logo -->
          <template #logo>
            <span id="logo" @click="index">管理员平台</span>
          </template>

          <!-- 个人信息栏 -->
          <template #photo>
            <tarbar-photo>
              <template #pic>
                <img :src="this.$store.state.admintoken.photo" />
              </template>
              <template #username>
                {{ this.$store.state.admintoken.adminname }}
              </template>
              <template #status> 注销 </template>
            </tarbar-photo>
          </template>
        </tarbar-top>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <tarbar-left>
            <template #tarleft>
              <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                v-for="index in texticon"
                :key="index"
                :path="index.path"
                @click="itemClick(index)"
              >
                <el-menu-item
                  @mouseover="itemhover(index)"
                  @mouseleave="itemleave(index)"
                >
                  <img class="texticon" :src="index.picurl" alt="" />
                  <p class="text">{{ index.name }}</p>
                </el-menu-item>
              </el-menu>
            </template>
          </tarbar-left>
        </el-aside>
        <el-main> <router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import TarbarTop from "../../components/index-comp/tarbarTop.vue";
import TarbarLeft from "../../components/index-comp/tarbarLeft.vue";
import TarbarPhoto from "../../components/index-comp/tarbarPhoto.vue";
export default {
  el: "",
  components: { TarbarTop, TarbarLeft, TarbarPhoto },
  data() {
    return {
      texticon: [
        {
          name: "轮播图管理",
          picurl: require("../../assets/picture/admin/轮播图管理1.png"),
          path: "/adminIndex",
        },
        {
          name: "病毒路径管理",
          picurl: require("../../assets/picture/admin/病毒路径管理1.png"),
          path: "/adminIndex/adminWayManage",
        },
        {
          name: "病毒信息管理",
          picurl: require("../../assets/picture/admin/病毒信息管理1.png"),
          path: "/adminIndex/adminVirulsManage",
        },
        {
          name: "病毒上报管理",
          picurl: require("../../assets/picture/admin/病毒上报管理1.png"),
          path: "/adminIndex/adminVirulsReport",
        },
        {
          name: "防疫知识管理",
          picurl: require("../../assets/picture/admin/防疫知识管理1.png"),
          path: "/adminIndex/adminPrevention",
        },
        {
          name: "评论管理",
          picurl: require("../../assets/picture/admin/评论管理1.png"),
          path: "/adminIndex/adminCommunity",
        },
      ],
    };
  },
  methods: {
    itemhover(i) {
      i.picurl = require("../../assets/picture/admin/" + i.name + "2.png");
    },
    itemleave(i) {
      i.picurl = require("../../assets/picture/admin/" + i.name + "1.png");
    },
    itemClick(i) {
      if (this.$store.state.token.loginstate == "登录") {
        open3();
      } else {
        this.$router.replace(i.path);
      }
    },
    handleOpen() {},
    handleClose() {},
  },
  computed: {},
};
</script>

<style src="@/assets/css/user/index-page.css" scoped></style>
<style src="@/assets/css/user/tarbar-left.css" scoped></style>
