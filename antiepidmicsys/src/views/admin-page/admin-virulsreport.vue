<template>
  <h2>病毒上报管理</h2>
  <el-table :data="filterTableData" style="width: 100%" height="90%">
    <el-table-column
      label="上报人"
      prop="report_userid"
      sortable
      min-width="200px"
      align="center"
    />
    <el-table-column
      label="发现时间"
      prop="date"
      sortable
      min-width="200px"
      align="center"
    />
    <el-table-column
      label="病毒名称"
      prop="name"
      min-width="200px"
      align="center"
    />
    <el-table-column
      label="病毒类型"
      prop="type"
      min-width="200px"
      align="center"
    />
    <el-table-column
      type="expand"
      label="详细内容"
      width="200px"
      align="center"
      show-overflow-tooltip
    >
      <template #default="props">
        <p>{{ props.row.name }}: {{ props.row.message }}</p>
      </template>
    </el-table-column>
    <el-table-column label="详细信息" align="center" min-width="200px">
      <template #header>
        <el-input v-model="search" size="small" placeholder="Type to search" />
      </template>
      <template #default="scope">
        <el-button size="small" @click="Clicklongin(scope.$index)"
          >编辑</el-button
        >
        <el-button size="small" type="primary" @click="send(scope.$index)"
          >发布</el-button
        >
        <el-button
          size="small"
          type="danger"
          @click="reportDelect(scope.$index)"
          >删除</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { ElMessage } from "element-plus";

const open2 = () => {
  ElMessage({
    message: "发布成功",
    type: "success",
  });
};
export default {
  el: "",
  components: {},
  data() {
    return {
      tableData: JSON.parse(localStorage.getItem("report_data")),
      search: "",
    };
  },
  methods: {
    Clicklongin(index) {
      let setdata = {
        id: this.tableData[index].id,
        date: this.tableData[index].date,
        name: this.tableData[index].name,
        type: this.tableData[index].type,
        message: this.tableData[index].message,
        path: this.$route,
      };
      localStorage.setItem("setdata", JSON.stringify(setdata));
      this.$router.push("/adminIndex/adminVirulsSet/" + setdata.id);
    },
    reportDelect(index) {
      this.tableData.splice(index, 1);
      localStorage.setItem("report_data", JSON.stringify(this.tableData));
    },
    send(index) {
      let virulsInformation = this.$store.state.virulsInformation;
      if (virulsInformation == null) {
        virulsInformation = [];
      }
      let newdata = {
        id: "",
        date: "",
        name: "",
        type: "",
        message: "",
      };

      newdata.id = this.tableData[index].id;
      newdata.date = this.tableData[index].date;
      newdata.name = this.tableData[index].name;
      newdata.type = this.tableData[index].type;
      newdata.message = this.tableData[index].message;

      virulsInformation.push(newdata);
      localStorage.setItem(
        "virulsInformation",
        JSON.stringify(virulsInformation)
      );
      open2();
      this.tableData.splice(index, 1);
      localStorage.setItem("report_data", JSON.stringify(this.tableData));
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
