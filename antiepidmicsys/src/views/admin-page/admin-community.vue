<template>
  <h2>评论管理</h2>
  <el-table :data="filterTableData" style="width: 100%" height="(0%">
    <el-table-column
      label="评论时间"
      prop="commentdate"
      sortable
      min-width="200px"
      align="center"
    />
    <el-table-column
      label="评论人id"
      prop="userid"
      min-width="200px"
      align="center"
    />
    <el-table-column
      label="评论人用户名"
      prop="username"
      min-width="200px"
      align="center"
    />
    <el-table-column
      type="expand"
      label="评论内容"
      width="200px"
      align="center"
      show-overflow-tooltip
    >
      <template #default="props">
        <p>{{ props.row.userid }}: {{ props.row.usercomment }}</p>
      </template>
    </el-table-column>
    <el-table-column label="Operations" align="center" min-width="200px">
      <template #header>
        <el-input v-model="search" size="small" placeholder="Type to search" />
      </template>
      <template #default="scope">
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index)"
          >删除</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  el: "",
  components: {},
  data() {
    return {
      tableData: JSON.parse(localStorage.getItem("comment")),
      search: "",
    };
  },
  methods: {
    handleDelete(index) {
      this.$store.commit("adminDelect", index);
      this.tableData = JSON.parse(localStorage.getItem("comment"));
    },
  },
  computed: {
    filterTableData() {
      return this.tableData.filter(
        (data) =>
          !this.search ||
          data.userid.toLowerCase().includes(this.search.toLowerCase()) ||
          data.username.toLowerCase().includes(this.search.toLowerCase()) ||
          data.commentdate.toLowerCase().includes(this.search.toLowerCase()) ||
          data.usercomment.toLowerCase().includes(this.search.toLowerCase())
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
  left: 365px; */
  margin: 10px auto;
  /* border: 1px solid; */
}
</style>
