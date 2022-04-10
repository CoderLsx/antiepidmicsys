<template>
  <h2>病毒信息</h2>
  <el-table :data="filterTableData" :cell-style="headerStyle" height="800">
    <!-- <el-scrollbar height="400px"> -->
    <el-table-column
      prop="date"
      label="发现时间"
      sortable
      min-width="220"
      align="center"
    />
    <el-table-column
      prop="name"
      label="病毒名称"
      min-width="220"
      align="center"
    />
    <el-table-column
      prop="type"
      label="病毒类型"
      min-width="220"
      align="center"
    />
    <el-table-column label="详细信息" min-width="220" align="center">
      <template #header>
        <el-input v-model="search" size="small" placeholder="Type to search" />
      </template>
      <template #default="scope">
        <el-button type="text" size="small" @click="Clicklongin(scope.row)">
          查看
        </el-button>
      </template>
    </el-table-column>
    <!-- </el-scrollbar> -->
  </el-table>
</template>

<script>
import report from "./report.vue";
export default {
  el: "",
  components: {
    report,
  },
  data() {
    return {
      // tableData: this.$store.state.virulsInformation,
      tableData: [
        {
          date: "2019-12-01",
          name: "新型冠状病毒肺炎",
          type: "RNA",
        },
        {
          date: "2016-05-03",
          name: "HIV病毒",
          type: "DNA",
        },
        {
          date: "2016-05-03",
          name: "埃博拉病毒",
          type: "DNA",
        },
        {
          date: "2016-05-03",
          name: "天花病毒",
          type: "DNA",
        },
        {
          date: "2016-05-03",
          name: "甲型H1N1病毒",
          type: "DNA",
        },
        {
          date: "2016-05-03",
          name: "西尼罗病毒",
          type: "DNA",
        },
        {
          date: "2016-05-03",
          name: "SARS冠状病毒",
          type: "DNA",
        },
        {
          date: "2016-05-03",
          name: "狂犬病病毒",
          type: "DNA",
        },
        {
          date: "2016-05-03",
          name: "马尔堡病毒",
          type: "DNA",
        },
        {
          date: "2016-05-03",
          name: "肝炎病毒",
          type: "DNA",
        },
        {
          date: "2016-05-03",
          name: "登革病毒",
          type: "DNA",
        },
        {
          date: "2016-05-03",
          name: "中东呼吸系统综合征冠状病毒",
          type: "DNA",
        },
        {
          date: "2016-05-03",
          name: "流行性感冒病毒",
          type: "RNA",
        },
        {
          date: "2016-05-03",
          name: "流行性感冒乙型脑炎",
          type: "RNA",
        },
        {
          date: "2016-05-03",
          name: "病毒性肝炎",
          type: "DNA",
        },
        {
          date: "2016-05-03",
          name: "肠道病毒感染",
          type: "DNA",
        },
        {
          date: "2016-05-03",
          name: "鼻病毒",
          type: "DNA",
        },
        {
          date: "2016-05-03",
          name: "普通冠状病毒",
          type: "DNA",
        },
        {
          date: "2016-05-03",
          name: "禽流感病毒",
          type: "DNA",
        },
        {
          date: "2016-05-03",
          name: "麻疹病毒",
          type: "DNA",
        },
        {
          date: "2016-05-03",
          name: "腮腺炎病毒",
          type: "DNA",
        },
        {
          date: "2016-05-03",
          name: "柯萨奇病毒",
          type: "DNA",
        },
        {
          date: "2016-05-03",
          name: "轮状病毒",
          type: "DNA",
        },
        {
          date: "2016-05-03",
          name: "单纯疱疹病毒",
          type: "DNA",
        },
      ],
      newdata: "",
      headerStyle: { borderTop: "1px soild black" },
      search: "",
    };
  },
  props: ["cname"],
  methods: {
    Clicklongin(data) {
      this.$router.push("/index/detailed/" + data.id);
    },
    getdata() {},
  },
  computed: {
    filterTableData() {
      return this.tableData.filter(
        (data) =>
          !this.search ||
          data.id.toLowerCase().includes(this.search.toLowerCase()) ||
          data.date.toLowerCase().includes(this.search.toLowerCase()) ||
          data.name.toLowerCase().includes(this.search.toLowerCase()) ||
          data.type.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
};
</script>

<style scoped>
h2 {
  /* position: absolute;
  top: 50px;
  left: 50%; */
  width: 100px;
  margin: 0 auto;
}
.el-table {
  width: 100vh;
  margin: 0 auto;
  /* position: absolute;
  top: 15%;
  left: 30%; */
}
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
}
</style>
