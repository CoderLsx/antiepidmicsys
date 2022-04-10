<template>
  <div id="background">
    <div class="login-page">
      <!-- <from> -->
      <login-tittle>
        <template v-slot:tittle>
          <h2 id="tittle">登录</h2>
        </template>
      </login-tittle>

      <login-input>
        <template #input>
          <input
            type="text"
            name="Username"
            required=""
            id="number"
            autocomplete="off"
            v-model="Username"
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
            id="password"
            autocomplete="off"
            v-model="Password"
          />
          <label :class="{ error: passwordIserror }">{{ passwordText }}</label>
        </template>
      </login-input>

      <login-button @click="Logining">
        <template v-slot:button>
          <input
            type="submit"
            class="log-btn log-btn-isround"
            id="log-btn-login"
            value="登录"
            action=""
          />
        </template>
      </login-button>

      <login-button>
        <template v-slot:button>
          <button
            class="log-btn log-btn-isround"
            id="log-btn-register"
            type="button"
            @click="registerClick"
          >
            注册
          </button>
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
import Check from "../../assets/js/Check";
import { ElMessage } from "element-plus";

const open2 = () => {
  ElMessage({
    message: "登录成功",
    type: "success",
  });
};

const open4 = () => {
  ElMessage.error("用户名或密码错误");
};

export default {
  // name: "login-page",
  components: {
    loginInput,
    loginTittle,
    loginButton,
  },
  data() {
    return {
      Username: "",
      Password: "",
      tip: "",
      tipTop: "",
      tip: ["用户名", "密码", "请输入用户名", "请输入密码"],
      usernameIserror: false,
      passwordIserror: false,
      usernameText: "用户名",
      passwordText: "密码",
    };
  },
  methods: {
    Logining() {
      let User = this.$store.state.user;

      if (this.Username == "") {
        this.usernameText = this.tip[2];
        this.usernameIserror = true;
        setTimeout(() => {
          this.usernameText = this.tip[0];
          this.usernameIserror = false;
        }, 10000);
        return;
      } else {
        this.usernameText = this.tip[0];
        this.usernameIserror = false;
      }

      if (this.Password == "") {
        this.passwordText = this.tip[3];
        this.passwordIserror = true;
        setTimeout(() => {
          this.passwordText = this.tip[1];
          this.passwordIserror = false;
        }, 10000);
        return;
      } else if (Check(this.$store.state.user, this.Username, this.Password)) {
        open4();
        this.passwordText = this.tip[1];
        this.passwordIserror = true;
        setTimeout(() => {
          this.passwordText = this.tip[1];
          this.passwordIserror = false;
        }, 10000);
      } else {
        this.passwordText = this.tip[1];
        this.passwordIserror = false;
        this.$store.commit({
          type: "nowLogin",
          username: this.Username,
        });
        this.$router.push("/index");
        document.title = "疫情防控宣传交流平台";
        open2();
      }
    },
    registerClick() {
      this.$router.push("/register");
    },
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
.login-page >>> #log-btn-login {
  top: 260px;
}

/* 注册按钮位置 */
.login-page >>> #log-btn-register {
  top: 320px;
}

/* 管理员登录入口 */
#admin {
  position: absolute;
  color: #fff;
  top: 390px;
  left: 180px;
}
#admin:hover {
  color: #03a9f4;
  cursor: pointer;
}
</style>
