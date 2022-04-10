<template>
  <el-page-header :icon="ArrowLeft" :content="this.data.name" @click="goBack" />
  <el-descriptions title="病毒路径">
    <el-descriptions-item label="发布时间：">
      <el-date-picker
        id="itemtext"
        v-model="date"
        type="date"
        placeholder="发布时间"
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
      >
      </el-input>
    </el-descriptions-item>
  </el-descriptions>
  <el-button type="primary" size="large" @click="save">发布</el-button>
</template>

<script>
import { ArrowLeft } from "@element-plus/icons-vue";
import { ElMessage } from "element-plus";
import getDate from "../../assets/js/class";

const open2 = () => {
  ElMessage({
    message: "发布成功",
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
      data: JSON.parse(localStorage.getItem("setwaydata")),
      id: JSON.parse(localStorage.getItem("setwaydata")).id,
      date: JSON.parse(localStorage.getItem("setwaydata")).date,
      message: JSON.parse(localStorage.getItem("setwaydata")).message,

      style: {
        width: "600px",
      },
    };
  },
  methods: {
    // 返回
    goBack() {
      this.$router.push("/adminIndex/adminWayManage");
      localStorage.removeItem("setwaydata", JSON.stringify(this.data));
    },

    // 上传
    save() {
      // 获取localstorage里存的数据
      let waydata = JSON.parse(localStorage.getItem("waydata"));
      // 如果数据为null就新建一个数组
      if (waydata == null) {
        waydata = [];
      }

      function compare(key) {
        return function (value1, value2) {
          var val1 = value1[key];
          var val2 = value2[key];
          return val1 - val2;
        };
      }

      // 若输入框为空
      if (this.date == "" && this.message == "") {
        open3();
      } else {
        // 如果临时对象里的id与存在本地数组某个元素的id相同，更新这个元素的所有信息
        for (let i in waydata) {
          if (this.id == waydata[i].id) {
            if (this.date != waydata[i].date) {
              // 格式化数据
              let Year = new getDate(this.date).getYear();
              let Month = new getDate(this.date).getMonth();
              let Day = new getDate(this.date).getDate();

              // 格式化数据
              let newdate = Year + "-" + Month + "-" + Day;
              waydata[i].date = newdate;
            }

            waydata[i].message = this.message;
            this.data = {
              id: "",
              date: "",
              message: "",
            };

            waydata.sort(compare("id"));
            waydata.reverse();

            localStorage.setItem("setwaydata", JSON.stringify(this.data));
            localStorage.setItem("waydata", JSON.stringify(waydata));
            open2();
            return;
          }
        }

        // 如果为新对象
        // 格式化数据
        let Year = new getDate(this.date).getYear();
        let Month = new getDate(this.date).getMonth();
        let Day = new getDate(this.date).getDate();
        let Hours = new getDate(this.date).getHours();
        let Minutes = new getDate(this.date).getMinutes();
        let Seconds = new getDate(this.date).getSeconds();

        // 格式化数据
        let newdate = Year + "-" + Month + "-" + Day;
        let data_id =
          Year + Month + Day + Hours + Minutes + Seconds;

        let newdata = {
          id: data_id,
          date: newdate,
          message: this.message,
        };
        waydata.push(newdata);

        waydata.sort(compare("id"));
        waydata.reverse();

        // 更新本地数据
        localStorage.setItem("setwaydata", JSON.stringify(this.data));
        localStorage.setItem("waydata", JSON.stringify(waydata));
        open2();
      }

      // 结果：新的数据不会添加进数组中，会将之前的数据覆盖
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
