<template>
  <div id="background">
    <div class="login-page">
      <!-- <form> -->
      <login-tittle>
        <template v-slot:tittle>
          <h2 id="tittle">注册</h2>
        </template>
      </login-tittle>
      <login-input>
        <template #input>
          <input
            type="text"
            name="Username"
            required=""
            id="registernumber"
            autocomplete="off"
            v-model="Username"
            @blur="userBlur"
          />
          <label
            :class="{ success: usernameIssuccess, error: usernameIserror }"
            >{{ usernameText }}</label
          >
        </template>
      </login-input>

      <login-input>
        <template #input>
          <input
            type="password"
            name="Password"
            required=""
            id="registerpassword"
            autocomplete="off"
            v-model="Password"
            @blur="passBlur"
          />
          <label
            :class="{ success: passwordIssuccess, error: passwordIserror }"
            >{{ passwordText }}</label
          >
        </template>
      </login-input>

      <login-input>
        <template #input>
          <input
            type="password"
            name="Passwordagin"
            required=""
            id="password-again"
            autocomplete="off"
            v-model="Passwordagain"
            @blur="passAgainBlur"
          />
          <label
            :class="{
              success: passwordagainIssuccess,
              error: passwordagainIserror,
            }"
            >{{ passwordagainText }}</label
          >
        </template>
      </login-input>

      <login-input>
        <template #input>
          <input
            type="text"
            name="Email"
            required=""
            id="email"
            autocomplete="off"
            v-model="Email"
            @blur="emailBlur"
          />
          <label :class="{ success: emailIssuccess, error: emailIserror }">{{
            emailText
          }}</label>
        </template>
      </login-input>

      <login-button>
        <template v-slot:button>
          <input
            type="submit"
            class="log-btn log-btn-isround"
            id="register-btn-reg"
            value="注册"
            @click="register"
          />
        </template>
      </login-button>

      <login-button>
        <template v-slot:button>
          <button
            class="log-btn log-btn-isround"
            id="register-btn-back"
            type="button"
            @click="backClick"
          >
            返回登录
          </button>
        </template>
      </login-button>
    </div>
    <!-- </form> -->
  </div>
</template>

<script>
import loginInput from "../../components/login-comp/input.vue";
import loginTittle from "../../components/login-comp/tittle.vue";
import loginButton from "../../components/login-comp/button.vue";
import { ElMessage } from "element-plus";
import request from "../../utils/http";

const open2 = () => {
  ElMessage({
    message: "注册成功",
    type: "success",
  });
};

const open4 = () => {
  ElMessage.error("请将信息填写完整");
};

const open5 = () => {
  ElMessage.error("填写信息有误，请确认填写信息");
};

const open6 = () => {
  ElMessage.error("操作失败");
};

// 正则表达式
const user = /^[a-zA-Z][a-zA-Z0-9]{3,15}$/;
const pass = /^[a-zA-Z0-9]{4,10}$/;
const email = /^\w+@\w+(\.[a-zA-Z]{2,3}){1,2}$/;

export default {
  components: {
    loginInput,
    loginTittle,
    loginButton,
  },
  data() {
    return {
      Username: "",
      Password: "",
      Passwordagain: "",
      Email: "",
      photo: "",
      usernameText:
        "请输入用户名（用户名由英文字母和数字组成的4-16位字符，以字母开头）",
      passwordText: "请输入密码（密码由英文字母和数字组成的4-10位字符）",
      passwordagainText: "请再次输入密码",
      emailText: "请输入邮箱",

      tip: [
        "请输入用户名（用户名由英文字母和数字组成的4-16位字符，以字母开头）",
        "请输入密码（密码由英文字母和数字组成的4-10位字符）",
        "请再次输入密码",
        "请输入邮箱",
        "用户名可用",
        "用户名不正确",
        "密码格式正确",
        "密码格式错误",
        "两次输入密码一致",
        "两次输入密码不一致",
        "邮箱格式正确",
        "邮箱格式错误",
        "用户名已存在",
      ],

      usernameIssuccess: false,
      usernameIserror: false,
      passwordIssuccess: false,
      passwordIserror: false,
      passwordagainIssuccess: false,
      passwordagainIserror: false,
      emailIssuccess: false,
      emailIserror: false,
    };
  },
  methods: {
    userBlur() {
      if (this.Username == "") {
        this.usernameText = this.tip[0];
        this.usernameIssuccess = false;
        this.usernameIserror = false;
      } else if (user.test(this.Username) == false) {
        this.usernameText = this.tip[5];
        this.usernameIserror = true;
        this.usernameIssuccess = false;
      } else if (this.Username != "") {
        request.get({
          url: "/userJudge/" + this.Username,
          success: (res) => {
            console.log(res);
            if (res.data.retCode != "999997") {
              this.usernameText = this.tip[12];
              this.usernameIserror = true;
              this.usernameIssuccess = false;
            } else {
              this.usernameText = this.tip[4];
              this.usernameIssuccess = true;
              this.usernameIserror = false;
            }
          },
          fail: (err) => {
            console.log(err);
          },
        });
      }
    },
    passBlur() {
      if (this.Password == "") {
        this.passwordText = this.tip[1];
        this.passwordIssuccess = false;
        this.passwordIserror = false;
      } else if (pass.test(this.Password) == false) {
        this.passwordText = this.tip[7];
        this.passwordIssuccess = false;
        this.passwordIserror = true;
        // return false;
      } else if (this.Password != this.Passwordagain) {
        this.passwordagainText = this.tip[9];
        this.passwordText = this.tip[6];
        this.passwordIssuccess = true;
        this.passwordIserror = false;
        this.passwordagainIssuccess = false;
        this.passwordagainIserror = true;
        // return false;
      } else {
        this.passwordText = this.tip[6];
        this.passwordIssuccess = true;
        this.passwordIserror = false;
        // return true;
      }
    },
    passAgainBlur() {
      if (this.Passwordagain == "") {
        this.passwordagainText = this.tip[2];
        this.passwordagainIssuccess = false;
        this.passwordagainIserror = false;
      } else if (this.Passwordagain != this.Password) {
        this.passwordagainText = this.tip[9];
        this.passwordagainIssuccess = false;
        this.passwordagainIserror = true;
        // return false;
      } else {
        this.passwordagainText = this.tip[8];
        this.passwordagainIssuccess = true;
        this.passwordagainIserror = false;
        // return true;
      }
    },
    emailBlur() {
      if (this.Email == "") {
        this.emailText = this.tip[3];
        this.emailIssuccess = false;
        this.emailIserror = false;
      } else if (email.test(this.Email) == false) {
        this.emailText = this.tip[11];
        this.emailIssuccess = false;
        this.emailIserror = true;
        // return false;
      } else {
        this.emailText = this.tip[10];
        this.emailIssuccess = true;
        this.emailIserror = false;
        // return true;
      }
    },
    backClick() {
      this.$router.push("/login");
    },
    register() {
      if (
        this.Username == "" ||
        this.Password == "" ||
        this.Passwordagain == "" ||
        this.Email == ""
      ) {
        open4();
      } else if (
        this.usernameIserror == true ||
        this.passwordIserror == true ||
        this.Passwordagain != this.Password ||
        this.emailIserror == true
      ) {
        if (this.Passwordagain != this.Password) {
          this.passwordagainText = this.tip[9];
          this.passwordagainIssuccess = false;
          this.passwordagainIserror = true;
          // return false;
        }
        open5();
      } else {
        request.post({
          url: "/userRegister",
          data: {
            email: this.Email,
            isLogin: "0",
            password: this.Password,
            phone: "",
            photo: "../../assets/picture/admin/防疫知识管理2.png",
            sex: 3,
            userId: this.Username,
            username: this.Username,
            birthday: "",
          },
          success: (res) => {
            console.log(res);
            if (res.data.retCode == "999999") {
              open6();
            } else {
              open2();
              this.$router.push("/login");
            }
          },
          fail: (err) => {
            console.log(err);
            open5();
          },
        });
      }
    },
  },
};
</script>

<style src="@/assets/css/user/login-input.css" scoped></style>
<style src="@/assets/css/user/login-tittle.css" scoped></style>
<style src="@/assets/css/user/button.css" scoped></style>
<style src="@/assets/css/user/register-page.css" scoped></style>
<style scoped>
/* 登录按钮位置 */
.login-page >>> #register-btn-reg {
  top: 410px;
  left: 240px;
}

/* 注册按钮位置 */
.login-page >>> #register-btn-back {
  top: 470px;
  left: 240px;
}
</style>
