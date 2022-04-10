<template>
  <h2>病毒信息管理</h2>
  <el-table :data="filterTableData" style="width: 100%" height="500">
    <el-table-column
      label="发现时间"
      prop="date"
      sortable
      min-width="100"
      align="center"
    />
    <el-table-column
      label="病毒名称"
      prop="name"
      min-width="100"
      align="center"
    />
    <el-table-column
      label="病毒类型"
      prop="type"
      min-width="100"
      align="center"
    />
    <el-table-column
      type="expand"
      label="详细内容"
      width="100"
      align="center"
      show-overflow-tooltip
    >
      <template #default="props">
        <p>{{ props.row.name }}: {{ props.row.message }}</p>
      </template>
    </el-table-column>
    <el-table-column label="详细信息" align="center" min-width="100">
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
      tableData: this.$store.state.virulsInformation,
      search: "",
      message: "",
    };
  },
  methods: {
    handleDelete(index) {
      this.$store.commit("virulsDelect", index);
    },
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
  width: 200px;
  margin: 0 auto;
}
.el-table {
  margin: 10px auto;
}
</style>
