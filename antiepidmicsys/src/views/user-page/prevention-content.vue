<template>
  <!-- <h2>{{ this.content[this.$route.params.id].name }}</h2>
  <span>{{ this.content[this.$route.params.id].createdate }}</span>
  <el-scrollbar>
    <pre class="message" wrap>
      <code>{{ this.content[this.$route.params.id].message }}</code>
    </pre>
  </el-scrollbar> -->
  <div class="common-layout">
    <el-container>
      <el-header>
        <h2>{{ this.content[this.$route.params.id].name }}</h2><br/>
        <span>发表日期:{{ this.content[this.$route.params.id].date }}</span>
      </el-header>
      <el-main>
        <pre class="message" wrap>
            <code>{{ this.content[this.$route.params.id].message }}</code>
        </pre>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  el: "",
  components: {},
  data() {
    return {
      content: JSON.parse(localStorage.getItem("preventiondata")),
    };
  },
  computed: {},
  methods: {},
};
</script>

<style scoped>
h2 {
  width: 200px;
  margin: 0 auto;
}
span {
  display: block;
  width: 270px;
  margin: 0 auto;
  font-size: 12px;
  color: gray;
}
pre {
  font-size: 20px;
  line-height: 30px;
  /* width: 900px; */
  white-space: pre-line;
}
.el-main {
  /* position: absolute; */
  margin: 0 auto;
  width: 900px;
  height: 70%;
}
</style>
