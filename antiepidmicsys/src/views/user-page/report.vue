<template>
  <el-form id="reportTable">
    <h2>病毒上报</h2>
    <el-row>
      <!-- <span class="el-span"> 发现日期 </span> -->
      <el-form-item label="发现日期">
        <el-date-picker
          id="itemtext"
          v-model="dateInput"
          type="date"
          placeholder="请输入发现日期"
          :style="pickerstyle"
        />
      </el-form-item>
      <!-- <span class="el-span"> 病毒名称 </span> -->
      <el-form-item label="病毒名称">
        <el-input
          :input-style="inputStyle"
          v-model="nameInput"
          placeholder="请输入病毒名称"
        ></el-input>
      </el-form-item>
      <el-form-item label="病毒简称">
        <el-input
          :input-style="inputStyle"
          v-model="idInput"
          placeholder="请输入病毒简称(例:XGFY(新冠肺炎))"
        ></el-input>
      </el-form-item>
      <!-- <span class="el-span"> 病毒类型 </span> -->
      <el-form-item label="病毒类型">
        <el-input
          :input-style="inputStyle"
          v-model="typeInput"
          placeholder="请输入病毒类型"
        ></el-input>
      </el-form-item>
      <el-form-item label="详细信息">
        <el-input
          v-model="textarea"
          :input-style="inputStyle"
          :rows="10"
          resize="none"
          type="textarea"
          placeholder="请输入详细信息"
        />
      </el-form-item>
      <!-- <span class="el-span"> 详细信息 </span> -->
    </el-row>
    <el-button type="primary" size="large" @click="send">上报</el-button>
  </el-form>
</template>

<script>
import { ElMessage } from "element-plus";

const open2 = () => {
  ElMessage({
    message: "上报成功",
    type: "success",
  });
};
const open3 = () => {
  ElMessage({
    message: "所有输入框不能为空",
    type: "error",
  });
};
const open4 = () => {
  ElMessage({
    message: "该简称已经存在，请修改",
    type: "error",
  });
};
export default {
  el: "",
  components: {},
  data() {
    return {
      data: [],
      inputStyle: {
        width: "300px",
        top: "-20px",
      },
      pickerstyle: {
        top: "-10px",
        left: "10px",
        width: "300px",
      },
      dateInput: "", // 日期
      nameInput: "", // 名称
      idInput: "",
      typeInput: "", // 类型
      textarea: "", // 详细信息
    };
  },
  methods: {
    send() {
      if (
        this.dateInput == "" ||
        this.nameInput == "" ||
        this.idInput == "" ||
        this.typeInput == "" ||
        this.textarea == ""
      ) {
        open3();
      } else {
        this.data = JSON.parse(localStorage.getItem("report_data"));
        if (this.data == null) {
          this.data = [];
        }
        for (let i in JSON.parse(localStorage.getItem("virusInformation"))) {
          if (JSON.parse(localStorage.getItem("virusInformation")) == null) {
            break;
          } else if (
            this.idInput ==
            JSON.parse(localStorage.getItem("virusInformation"))[i].id 
          ) {
            open4();
            return;
          }
        }
        const newdata = {
          report_userid: "",
          date: "",
          name: "",
          id: "",
          type: "",
          message: "",
        };

        let getMonth = () => {
          if (new Date().getMonth() < 10) {
            return "0" + (new Date().getMonth() + 1);
          } else {
            return new (new Date().getMonth() + 1)();
          }
        };
        let getDate = () => {
          if (new Date().getDate() < 10) {
            return "0" + new Date().getDate();
          } else {
            return new Date().getDate();
          }
        };

        let nowtime =
          this.dateInput.getFullYear() + "-" + getMonth() + "-" + getDate();

        newdata.report_userid = JSON.parse(
          localStorage.getItem("token")
        ).userid;
        newdata.date = nowtime;
        newdata.name = this.nameInput;
        newdata.id = this.idInput;
        newdata.type = this.typeInput;
        newdata.message = this.textarea;

        this.data.push(newdata);
        localStorage.setItem("report_data", JSON.stringify(this.data));
        this.dateInput = "";
        this.nameInput = "";
        this.idInput = "";
        this.typeInput = "";
        this.textarea = "";
        open2();
      }
    },
  },
};
</script>

<style scoped>
h2 {
  position: absolute;
  left: 200px;
}
#reportTable {
  position: absolute;
  display: inline-block;
  top: 100px;
  left: 40%;
  width: 500px;
  height: 85%;
  border: 1px solid #dcdfe6;
  border-radius: 10px;
  box-shadow: 5px 5px #dcdfe6;
}
.el-input,
.el-textarea,
.el-date-picker {
  margin: 10px;
  margin-bottom: 0px;
  width: 300px;
}
.el-span,
.el-form-item {
  position: relative;
  top: 8%;
  left: 25px;
}

.el-button {
  position: relative;
  width: 150px;
  top: 20%;
  left: 35%;
}

.el-row {
  position: relative;
  top: 10%;
  height: 70%;
}
.el-form-item--default {
  --font-size: 17px !important;
}
</style>
