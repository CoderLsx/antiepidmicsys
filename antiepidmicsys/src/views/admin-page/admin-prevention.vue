<template>
  <h2>防疫知识管理</h2>
  <el-table :data="filterTableData" style="width: 100%" height="80%">
    <el-table-column
      label="发布时间"
      prop="date"
      sortable
      min-width="100px"
      align="center"
    />
    <el-table-column
      type="date"
      label="文章标题"
      prop="name"
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
  <el-button id="add" type="primary" @click="add">发表新文章</el-button>
</template>

<script>
export default {
  el: "",
  components: {},
  data() {
    return {
      tableData: JSON.parse(localStorage.getItem("preventiondata")),
      search: "",
      message: "",
    };
  },
  methods: {
    // 编辑
    Clicklongin(index) {
      let setnewessay = {
        id: this.tableData[index].id,
        date: this.tableData[index].date,
        name: this.tableData[index].name,
        message: this.tableData[index].message,
      };
      localStorage.setItem("setnewessay", JSON.stringify(setnewessay));
      this.$router.push(
        "/adminIndex/adminPreventionSet/" + this.tableData[index].id
      );
    },

    // 删除
    handleDelete(index) {
      this.tableData.splice(index, 1);
      localStorage.setItem("preventiondata", JSON.stringify(this.tableData));
    },

    // 添加
    add() {
      let setnewessay = {
        id: "new",
        date: "",
        name: "",
        message: "",
      };
      localStorage.setItem("setnewessay", JSON.stringify(setnewessay));
      this.$router.push("/adminIndex/adminPreventionSet/" + setnewessay.id);
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
  /* position: absolute;
  top: 50px;
  left: 50%; */
  width: 200px;
  margin: 0 auto;
}
.el-table {
  /* position: absolute;
  top: 100px;
  left: 370px; */
  display: block;
  margin: 10px auto;
  /* border: 1px solid; */
}
#add {
  /* position: absolute;
  top: 630px;
  left: 50%;
  width: 150px; */
  display: block;
  width: 150px;
  margin: 0 auto;
}
</style>
