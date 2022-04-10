<template>
  <div id="background">
    <div class="login-page">
      <!-- <from> -->
      <login-tittle>
        <template v-slot:tittle>
          <h2 id="tittle">管理员密码修改</h2>
        </template>
      </login-tittle>

      <login-input>
        <template #input>
          <input
            type="text"
            name="Username"
            required=""
            id="adminnumber"
            autocomplete="off"
            v-model="Username"
            @blur="userBlur"
          />
          <label :class="{ error: usernameIserror }">{{ usernameText }}</label>
        </template>
      </login-input>

      <login-input>
        <template #input>
          <input
            type="password"
            name="Password"
            required=""
            id="adminpassword"
            v-model="Password"
            @blur="passBlur"
          />
          <label :class="{ error: passwordIserror }">{{ passwordText }}</label>
        </template>
      </login-input>

      <login-input>
        <template #input>
          <input
            type="password"
            name="Password"
            required=""
            id="adminpassword"
            v-model="newPassword"
            @blur="passAgainBlur"
          />
          <label :class="{ error: newpasswordIserror }">{{
            newpasswordText
          }}</label>
        </template>
      </login-input>

      <login-button>
        <template v-slot:button>
          <input
            type="submit"
            class="log-btn log-btn-isround"
            id="admin-btn-login"
            value="修改"
            action=""
            @click="reset"
          />
        </template>
      </login-button>
      <!-- </from> -->
      <span id="admin" @click="adminClick">管理员登录</span>
    </div>
  </div>
</template>

<script>
import loginInput from "../../components/login-comp/input.vue";
import loginTittle from "../../components/login-comp/tittle.vue";
import loginButton from "../../components/login-comp/button.vue";
import { ElMessage } from "element-plus";
const newpass = /^[a-zA-Z0-9]{4,10}$/;

let adminnameTrue = (arr, data) => {
  for (let i in arr) {
    if (data == arr[i].adminname) {
      return false;
    } else {
      return true;
    }
  }
};
let passwordTrue = (arr, data) => {
  for (let i in arr) {
    if (data == arr[i].adminpassword) {
      return false;
    } else {
      return true;
    }
  }
};

const open2 = () => {
  ElMessage({
    message: "密码修改成功",
    type: "success",
  });
};

const open4 = () => {
  ElMessage.error("请将信息填写完整");
};

const open5 = () => {
  ElMessage.error("填写信息有误，请确认填写信息");
};

export default {
  el: "",
  components: {
    loginInput,
    loginTittle,
    loginButton,
  },
  data() {
    return {
      Username: "",
      Password: "",
      newPassword: "",
      tip: [
        "用户名",
        "原密码",
        "新密码（4-10位英文字母或数字）",
        "用户名不存在",
        "原密码错误",
        "新密码格式错误",
      ],
      usernameIserror: false,
      passwordIserror: false,
      newpasswordIserror: false,
      usernameText: "用户名",
      passwordText: "原密码",
      newpasswordText: "新密码（4-10位英文字母或数字）",
    };
  },
  methods: {
    // 用户名检验
    userBlur() {
      // 若用户名为空
      if (this.Username == "") {
        this.usernameText = this.tip[0];
        this.usernameIssuccess = false;
        this.usernameIserror = false;
      } 
      // 若用户名不存在
      else if (adminnameTrue(this.$store.state.admin, this.Username)) {
        this.usernameText = this.tip[3];
        this.usernameIserror = true;
        this.usernameIssuccess = false;
      } 
      // 成功
      else {
        this.usernameText = this.tip[0];
        this.usernameIssuccess = true;
        this.usernameIserror = false;
      }
    },

    // 原密码检验
    passBlur() {
      // 若原密码为空
      if (this.Password == "") {
        this.passwordText = this.tip[1];
        this.passwordIssuccess = false;
        this.passwordIserror = false;
      } 
      // 若原密码错误
      else if (passwordTrue(this.$store.state.admin, this.Password)) {
        this.passwordText = this.tip[4];
        this.passwordIssuccess = false;
        this.passwordIserror = true;
      } 
      // 成功
      else {
        this.passwordText = this.tip[1];
        this.passwordIssuccess = true;
        this.passwordIserror = false;
      }
    },

    // 新密码检验
    passAgainBlur() {
      // 若新密码为空
      if (this.newPassword == "") {
        this.newpasswordText = this.tip[2];
        // this.passwordagainIssuccess = false;
        this.newpasswordIserror = false;
      } 
      // 若新密码格式错误
      else if (newpass.test(this.newPassword) == false) {
        this.newpasswordText = this.tip[5];
        // this.passwordagainIssuccess = false;
        this.newpasswordIserror = true;
      } 
      // 成功
      else {
        this.newpasswordText = this.tip[2];
        // this.passwordagainIssuccess = true;
        this.newpasswordIserror = false;
      }
    },

    // 修改密码
    reset() {
      // 若所有输入框为空
      if (
        this.Username == "" ||
        this.Password == "" ||
        this.newPassword == ""
      ) {
        open4();
      } 
      // 若有输入框输入错误
      else if (
        this.usernameIserror == true ||
        this.passwordIserror == true ||
        this.newpasswordIserror == true
      ) {
        open5();
      } 
      // 成功
      else {
        open2();
        this.$store.commit({
          type: "adminpasswordReset",
          adminname: this.Username,
          newPassword: this.newPassword,
        });
        this.$router.push("/admin");
      }
    },

    // 跳转到管理员登录页面事件
    adminClick() {
      this.$router.push("/admin");
    },
  },
};
</script>

<style src="@/assets/css/user/button.css" scoped></style>
<style src="@/assets/css/user/login-input.css" scoped></style>
<style src="@/assets/css/user/login-tittle.css" scoped></style>
<style src="@/assets/css/user/login-page.css" scoped></style>
<style scoped>
/* 登录按钮位置 */
.login-page >>> #admin-btn-login {
  top: 320px;
}

/* 管理员登录入口 */
#admin {
  position: absolute;
  color: #fff;
  top: 390px;
  left: 178px;
}
#admin:hover {
  color: #03a9f4;
  cursor: pointer;
}
</style>
