<template>
  <h2>病毒路径管理</h2>
  <el-table :data="filterTableData" style="width: 100%" height="80%">
    <el-table-column
      label="发布时间"
      prop="date"
      sortable
      min-width="200px"
      align="center"
    />
    <el-table-column
      type="date"
      label="详细内容"
      prop="message"
      min-width="500px"
      align="left"
      show-overflow-tooltip
    />
    <el-table-column align="center" min-width="200px">
      <template #header>
        <el-input v-model="search" size="small" placeholder="Type to search" />
      </template>
      <template #default="scope">
        <el-button size="small" @click="Clicklongin(scope.$index)"
          >编辑</el-button
        >
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index)"
          >删除</el-button
        >
      </template>
    </el-table-column>
  </el-table>
  <el-button id="add" type="primary" @click="add">添加病毒路径</el-button>
</template>

<script>
export default {
  el: "",
  components: {},
  data() {
    return {
      tableData: JSON.parse(localStorage.getItem("waydata")),
      search: "",
      message: "",
    };
  },
  methods: {
    // 编译
    Clicklongin(index) {
      let setwaydata = {
        id: this.tableData[index].id,
        date: this.tableData[index].date,
        message: this.tableData[index].message,
      };
      localStorage.setItem("setwaydata", JSON.stringify(setwaydata));
      this.$router.push("/adminIndex/adminWaySet/" + this.tableData[index].id);
    },

    // 删除
    handleDelete(index) {
      this.tableData.splice(index, 1);
      localStorage.setItem("waydata", JSON.stringify(this.tableData));
    },

    // 添加
    add() {
      let setwaydata = {
        id: "new",
        date: "",
        message: "",
      };
      localStorage.setItem("setwaydata", JSON.stringify(setwaydata));
      this.$router.push("/adminIndex/adminWaySet/" + setwaydata.id);
    },
  },
  computed: {
    filterTableData() {
      return this.tableData.filter(
        (data) =>
          !this.search ||
          data.date.toLowerCase().includes(this.search.toLowerCase()) ||
          data.message.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
};
</script>

<style scoped>
h2 {
  width: 200px;
  margin: 0 auto;
}
.el-table {
  display: block;
  margin: 10px auto;
}
#add {
  /* position: absolute; */
  /* top: 630px; */
  /* left: 50%; */
  display: block;
  width: 150px;
  margin: 0 auto;
}
</style>
