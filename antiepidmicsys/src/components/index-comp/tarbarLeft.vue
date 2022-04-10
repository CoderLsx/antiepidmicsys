<template>
  <el-row class="tac" id="top-left">
    <el-col :span="12">
      <slot name="tarleft">
        <el-menu
          class="el-menu-vertical-demo"
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
      </slot>
    </el-col>
  </el-row>
</template>

<script>
import { ElMessage } from "element-plus";

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
    return {
      texticon: [
        {
          name: "病毒路径",
          picurl: require("../../assets/picture/病毒路径1.png"),
          path: "/index/way",
        },
        {
          name: "病毒信息",
          picurl: require("../../assets/picture/病毒信息1.png"),
          path: "/index/information",
        },
        {
          name: "病毒上报",
          picurl: require("../../assets/picture/病毒上报1.png"),
          path: "/index/report",
        },
        {
          name: "防疫知识",
          picurl: require("../../assets/picture/防疫知识1.png"),
          path: "/index/prevention",
        },
        {
          name: "社区",
          picurl: require("../../assets/picture/社区1.png"),
          path: "/index/community",
        },
      ],
    };
  },
  methods: {
    itemhover(i) {
      i.picurl = require("../../assets/picture/" + i.name + "2.png");
    },
    itemleave(i) {
      i.picurl = require("../../assets/picture/" + i.name + "1.png");
    },
    itemClick(i) {
      if (this.$store.state.token.loginstate == "登录") {
        open3();
      } else {
        this.$router.replace(i.path);
      }
    },
  },
};
</script>

<style src="@/assets/css/user/tarbar-left.css" scoped></style>
