<template>
  <div id="background"/>
    <tarbar-top>
      <template #logo>
        <span id="logo" @click="index">疫情防控宣传交流平台</span>
      </template>

      <template #photo>
        <tarbar-photo>
          <template #pic>
            <img :src="this.$store.state.token.photo" />
          </template>
          <template #username @click="myself">
            {{ this.$store.state.token.userid }}
          </template>
          <template #status>
            {{ this.$store.state.token.loginstate }}
          </template>
        </tarbar-photo>
      </template>
    </tarbar-top>
    <div id="table">
      <div id="table-1">
        <div
          class="avatar-uploader"
          ref="uploada"
          :action="url"
          :file-list="fileList"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <el-icon v-else class="avatar-uploader-icon"><plus /></el-icon>
        </div>

        <el-form ref="ruleFormRef" label-width="120px" class="demo-ruleForm">
          <el-form-item label="昵称" prop="name">
            <el-input v-model="userid" />
          </el-form-item>
          <el-form-item label="用户名">
            <span>{{ this.$store.state.token.username }}</span>
          </el-form-item>
          <el-form-item label="邮箱">
            <el-input v-model="email" />
          </el-form-item>
          <el-form-item label="手机号">
            <el-input v-model="phone" />
          </el-form-item>
          <div class="block">
            <span class="demonstration">出生日期</span>
            <el-date-picker
              v-model="birthday"
              type="date"
              placeholder="Pick a day"
            >
            </el-date-picker>
          </div>
          <el-form-item label="性别">
            <el-radio-group v-model="sex">
              <el-radio :label="3">男</el-radio>
              <el-radio :label="6">女</el-radio>
              <el-radio :label="9">保密</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-button type="primary" @click="update">保存</el-button>
        </el-form>
      </div>
    </div>
  <!-- </div> -->
</template>

<script>
import { ElMessage } from "element-plus";
import TarbarTop from "../../components/index-comp/tarbarTop.vue";
import TarbarSubmit from "../../components/index-comp/tarbarSubmit.vue";
import TarbarPhoto from "../../components/index-comp/tarbarPhoto.vue";

const open2 = () => {
  ElMessage({
    message: "修改成功",
    type: "success",
  });
};
const open3 = () => {
  ElMessage({
    message: "请先登录",
    type: "warning",
  });
};
const open4 = () => {
  ElMessage({
    showClose: true,
    message: "昵称不能为空",
    type: "error",
  });
};
export default {
  el: "",
  components: {
    TarbarTop,
    TarbarSubmit,
    TarbarPhoto,
  },
  data() {
    return {
      userid: this.$store.getters.myself(this.$route.params.username).userid,
      email: this.$store.getters.myself(this.$route.params.username).email,
      phone: this.$store.getters.myself(this.$route.params.username).phone,
      birthday: this.$store.getters.myself(this.$route.params.username)
        .birthday,
      sex: this.$store.getters.myself(this.$route.params.username).sex,
      imageUrl: this.$store.getters.myself(this.$route.params.username).photo,
    };
  },
  methods: {
    update() {
      if (this.$store.state.token.loginstate == "登录") {
        open3();
      } else if (this.userid == "") {
        open4();
      } else {
        this.$store.commit({
          type: "updata",
          userid: this.userid,
          email: this.email,
          phone: this.phone,
          birthday: this.birthday,
          sex: this.sex,
        });
        open2();
      }
    },
    index() {
      this.$router.push("/index/Carousel");
    },
  },
};
</script>

<style src="@/assets/css/user/personal.css" scoped></style>
<style src="@/assets/css/user/index-page.css" scoped></style>
<style scoped>

</style>
