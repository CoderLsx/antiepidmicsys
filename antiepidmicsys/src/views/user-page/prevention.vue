<template>
  <h2>防疫知识</h2>
  <el-table
    :data="filterTableData"
    :cell-style="headerStyle"
  >
    <el-table-column prop="name" label="标题" size="large" min-width="500" />
    <el-table-column label="详细信息" min-width="220" align="center" prop="name">
      <template #header>
        <el-input v-model="search" size="small" placeholder="Type to search" />
      </template>
      <template #default="scope">
        <el-button type="text" size="	large" @click="Clicklongin(scope.$index)">
          查看
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { ref } from "vue";
export default {
  el: "",
  components: {},
  data() {
    return {
      count: ref(0),
      tableData: JSON.parse(localStorage.getItem("preventiondata")),
      search: "",
    };
  },
  computed: {
    filterTableData() {
      return this.tableData.filter(
        (data) =>
          !this.search ||
          data.name.toLowerCase().includes(this.search.toLowerCase()) ||
          data.date.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
  methods: {
    load() {
      if (this.count <= this.preventiondata.length) {
        this.count += 2;
      }
    },
    Clicklongin(data) {
      this.$router.push("/index/preventionContent/"+data);
    },
  },
  mounted: function () {
    console.log(this.count);
  },
};
</script>

<style src="@/assets/css/user/prevention.css" scoped></style>
<style scoped>
.el-table {
  /* position: absolute;
  top: 15%;
  left: 35%; */
  width: 80%;
  margin: 0 auto;
}
</style>
