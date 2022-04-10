<template>
  <el-page-header :icon="ArrowLeft" :content="this.data.name" @click="goBack" />
  <el-descriptions title="防疫知识">
    <!-- <el-descriptions-item label="发布时间：">
      <el-date-picker
        id="itemtext"
        v-model="date"
        type="date"
        :disabled="isdisabled"
        placeholder="发布时间"
      />
    </el-descriptions-item> -->
    <el-descriptions-item label="文章标题：">
      <el-input
        id="itemtext"
        v-model="name"
        type="text"
        placeholder="文章标题"
      />
    </el-descriptions-item>
    <el-descriptions-item />
    <el-descriptions-item />
    <el-descriptions-item>
      <el-input
        v-model="message"
        :rows="17"
        :style="style"
        resize="none"
        type="textarea"
        placeholder="详细内容"
        wrap="hard"
      >
      </el-input>
    </el-descriptions-item>
  </el-descriptions>
  <el-button type="primary" size="large" @click="save">发布</el-button>
</template>

<script>
import { ArrowLeft } from "@element-plus/icons-vue";
import { ElMessage } from "element-plus";
import getDate from "../../assets/js/class.js";

const open2 = () => {
  ElMessage({
    message: "发表成功",
    type: "success",
  });
};
const open3 = () => {
  ElMessage({
    message: "输入框不能为空",
    type: "error",
  });
};
export default {
  el: "",
  components: {},
  data() {
    return {
      ArrowLeft,
      // 获取临时对象里的数据,初始化输入框值
      data: JSON.parse(localStorage.getItem("setnewessay")),
      id: JSON.parse(localStorage.getItem("setnewessay")).id,
      date: JSON.parse(localStorage.getItem("setnewessay")).date,
      name: JSON.parse(localStorage.getItem("setnewessay")).name,
      message: JSON.parse(localStorage.getItem("setnewessay")).message,

      isdisabled: false,
      style: {
        width: "600px",
      },
    };
  },
  methods: {
    // 返回
    goBack() {
      this.$router.push("/adminIndex/adminPrevention");
      if (JSON.parse(localStorage.getItem("setnewessay")) != null) {
        localStorage.removeItem("setnewessay", JSON.stringify(this.data));
      }
    },

    // 上传
    save() {
      // 获取localstorage里存的数据
      let preventiondata = JSON.parse(localStorage.getItem("preventiondata"));
      // 如果数据为null就新建一个数组
      if (preventiondata == null) {
        preventiondata = [];
      }

      function compare(key) {
        return function (value1, value2) {
          var val1 = value1[key];
          var val2 = value2[key];
          return val1 - val2;
        };
      }

      // 若输入框为空
      if (this.message == "" || this.name == "") {
        console.log(this.date, this.message, this.name);
        open3();
      } else {
        // 如果临时对象里的id与存在本地数组某个元素的id相同，更新这个元素的所有信息
        for (let i in preventiondata) {
          if (this.id == preventiondata[i].id) {
            // 更新发布时间
            let nowdate = new Date();
            console.log(nowdate);
            // 格式化数据
            let Year = new getDate(nowdate).getYear();
            let Month = new getDate(nowdate).getMonth();
            let Day = new getDate(nowdate).getDate();

            // 格式化数据
            let newdate = Year + "-" + Month + "-" + Day;
            preventiondata[i].date = newdate;

            preventiondata[i].name = this.name;
            preventiondata[i].message = this.message;
            this.data = {
              id: "",
              date: "",
              name: "",
              message: "",
            };

            preventiondata.sort(compare("id"));
            preventiondata.reverse();

            localStorage.setItem("setnewessay", JSON.stringify(this.data));
            localStorage.setItem(
              "preventiondata",
              JSON.stringify(preventiondata)
            );
            open2();
            return;
          }
        }

        // 如果为新对象
        let nowdate = new Date();
        // 格式化数据
        let Year = new getDate(nowdate).getYear();
        let Month = new getDate(nowdate).getMonth();
        let Day = new getDate(nowdate).getDate();
        let Hours = new getDate(nowdate).getHours();
        let Minutes = new getDate(nowdate).getMinutes();
        let Seconds = new getDate(nowdate).getSeconds();

        // 格式化数据
        let newdate = Year + "-" + Month + "-" + Day;
        let data_id = Year + Month + Day + Hours + Minutes + Seconds;

        let newdata = {
          id: data_id,
          date: newdate,
          name: this.name,
          message: this.message,
        };
        preventiondata.push(newdata);

        preventiondata.sort(compare("id"));
        preventiondata.reverse();

        // 更新本地数据
        localStorage.setItem("setnewessay", JSON.stringify(this.data));
        localStorage.setItem("preventiondata", JSON.stringify(preventiondata));
        open2();
      }

      // 结果：新的数据不会添加进数组中，会将之前的数据覆盖
    },
  },
  mounted: function () {
    let preventiondata = JSON.parse(localStorage.getItem("preventiondata"));
    for (let i in preventiondata) {
      if (this.id == preventiondata[i].id) {
        this.isdisabled = true;
        break;
      } else {
        this.isdisabled = false;
      }
    }
  },
};
</script>

<style src="@/assets/css/admin/preventionset.css" scoped></style>
