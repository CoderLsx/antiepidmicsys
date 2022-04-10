<template>
  <el-page-header :icon="ArrowLeft" :content="this.data.name" @click="goBack" />
  <el-descriptions title="病毒信息">
    <el-descriptions-item label="发现时间：">
      <el-date-picker
        id="itemtext"
        v-model="date"
        type="date"
        placeholder="Pick a day"
      />
    </el-descriptions-item>
    <el-descriptions-item label="病毒名称：">
      <el-input v-model="name" placeholder="Please input" />
    </el-descriptions-item>
    <el-descriptions-item label="病毒简称：">
      <el-input v-model="id" placeholder="Please input" />
    </el-descriptions-item>
    <el-descriptions-item label="病毒类型：">
      <el-input v-model="type" placeholder="Please input" />
    </el-descriptions-item>
    <el-descriptions-item />
    <el-descriptions-item />
    <el-descriptions-item label="详细信息">
      <el-input
        v-model="message"
        :rows="17"
        resize="none"
        type="textarea"
        placeholder="Please input"
      >
      </el-input>
    </el-descriptions-item>
  </el-descriptions>
  <el-button type="primary" size="large" @click="save">保存</el-button>
</template>

<script>
import { ArrowLeft } from "@element-plus/icons-vue";

export default {
  el: "",
  components: {},
  data() {
    return {
      ArrowLeft,
      data: JSON.parse(localStorage.getItem("setdata")),
      id: JSON.parse(localStorage.getItem("setdata")).id,
      date: JSON.parse(localStorage.getItem("setdata")).date,
      name: JSON.parse(localStorage.getItem("setdata")).name,
      type: JSON.parse(localStorage.getItem("setdata")).type,
      message: JSON.parse(localStorage.getItem("setdata")).message,
    };
  },
  methods: {
    goBack() {
      this.$router.push(JSON.parse(localStorage.getItem("setdata")).path.href);
    },
    save() {
      this.$store.commit({
        type: "setVirulsmessage",
        id: this.id,
        Day: this.date,
        Name: this.name,
        Type: this.type,
        Message: this.message,
      });
      localStorage.setItem("setdata", JSON.stringify(this.data));
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
.el-date-picker {
  width: 200px;
}
.el-input {
  position: relative;
  width: 200px;
  padding-right: 10px;
}

#itemtext {
  padding-right: 20px;
  font-weight: 600;
}
.virulsmessage {
  font-family: PingFang SC;
  width: 500px;
}

.el-button {
  position: absolute;
  top: 680px;
  left: 880px;
  width: 150px;
}
</style>
