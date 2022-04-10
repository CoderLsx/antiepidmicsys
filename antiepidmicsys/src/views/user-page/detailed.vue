<template>
  <el-page-header :icon="ArrowLeft" :content="this.data.name" @click="goBack" />
  <el-descriptions title="病毒信息">
    <el-descriptions-item label="发现时间："
      ><span class="itemtext">{{ this.data.date }}</span></el-descriptions-item
    >
    <el-descriptions-item label="病毒名称："
      ><span class="itemtext">{{ this.data.name }}</span></el-descriptions-item
    >
    <el-descriptions-item label="病毒类型："
      ><span class="itemtext">{{ this.data.type }}</span></el-descriptions-item
    >
    <el-descriptions-item label="详细信息">
      <pre class="virulsmessage">{{ this.data.message }}</pre>
    </el-descriptions-item>
  </el-descriptions>
</template>

<script>
import { ArrowLeft } from "@element-plus/icons-vue";
export default {
  el: "",
  components: {},
  data() {
    return {
      ArrowLeft,
      data: this.$store.getters.lookDetailed(this.$route.params.id),
    };
  },
  methods: {
    goBack() {
      this.$router.push("/index/information");
    },
  },
};
</script>

<style scoped>
.el-page-header {
  position: absolute;
  top: 64px;
  left: 200px;
}
.el-descriptions {
  position: absolute;
  top: 150px;
  left: 500px;
}

.itemtext {
  padding-right: 20px;
  font-weight: 600;
}
.virulsmessage {
  font-family: PingFang SC;
  width: 500px;
}
</style>
