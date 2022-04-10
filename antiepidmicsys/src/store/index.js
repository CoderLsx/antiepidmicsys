import Getdate from "@/assets/js/class";
import { createStore } from "vuex";
import { ElMessage } from "element-plus";

const open4 = () => {
  ElMessage({
    message: "该简称已经存在，请修改",
    type: "error",
  });
};
const open2 = () => {
  ElMessage({
    message: "保存成功",
    type: "success",
  });
};

export default createStore({
  state: {
    user: JSON.parse(localStorage.getItem("user")),
    admin: JSON.parse(localStorage.getItem("admin")),
    comment: JSON.parse(localStorage.getItem("comment")),
    token: JSON.parse(localStorage.getItem("token")),
    admintoken: JSON.parse(localStorage.getItem("admintoken")),
    virulsInformation: JSON.parse(localStorage.getItem("virulsInformation")),
    virulstimelineData: JSON.parse(localStorage.getItem("waydata")),
  },
  getters: {
    myself: (state) => (username) => {
      return state.user.find((user) => user.username == username);
    },

    // 查看病毒详细信息
    lookDetailed: (state) => (id) => {
      return state.virulsInformation.find(
        (virulsInformation) => virulsInformation.id == id
      );
    },
  },
  mutations: {
    // 注册
    Register(state, { newUsername, newPassword, newEmail }) {
      state.user = JSON.parse(localStorage.getItem("user"));
      // 若没有数据新建一个user数组用于后续保存用户数据
      if (state.user == null) {
        state.user = new Array();
      }

      // 创建新用户数据对象user
      const user = {
        id: "",
        islogin: 0,
        username: "",
        userid: "",
        password: "",
        email: "",
        photo: require("../assets/picture/doge.png"),
        phone: "",
        sex: 3,
        birthday: "",
      };

      // 将新用户数据存入user
      user.username = newUsername;
      user.userid = newUsername;
      user.password = newPassword;
      user.email = newEmail;
      user.id = state.user.length;
      // console.log(user.id);

      // 将新用户数据添加进用户数据数组，并将该数组保存至localstorage
      state.user.push(user);
      localStorage.setItem("user", JSON.stringify(state.user));
    },

    // 登录成功
    nowLogin(state, username) {
      // 获取localstorage保存的数据
      state.user = JSON.parse(localStorage.getItem("user"));
      state.token = JSON.parse(localStorage.getItem("token"));

      // 若没有数据新建一个空的token
      if (state.token == null) {
        state.token = {
          loginstate: "",
          username: "",
          userid: "",
          photo: "",
        };
      }

      // 将user数据保存进token制作令牌
      for (let i = 0; i < state.user.length; i++) {
        if (username.username == state.user[i].username) {
          state.token.loginstate = "注销";
          state.token.username = state.user[i].username;
          state.token.userid = state.user[i].userid;
          state.user[i].islogin = 1;
          state.token.id = state.user[i].id;
          if (state.user[i].userid != "") {
            state.token.userid = state.user[i].userid;
          }
          if (state.user[i].photo != "") {
            state.token.photo = state.user[i].photo;
          }
        }
      }

      // 将新的令牌保存进token
      localStorage.setItem("user", JSON.stringify(state.user));
      localStorage.setItem("token", JSON.stringify(state.token));
    },

    // 注销
    Logout(state) {
      state.user = JSON.parse(localStorage.getItem("user"));
      state.token = JSON.parse(localStorage.getItem("token"));
      console.log("logout success1");
      for (let i = 0; i < state.user.length; i++) {
        if (state.token.username == state.user[i].username) {
          state.user[i].islogin = 0;
          state.token.loginstate = "";
          state.token.username = "";
          state.token.userid = "";
          state.token.photo = "";
        }
      }
      localStorage.setItem("user", JSON.stringify(state.user));
      localStorage.setItem("token", JSON.stringify(state.token));
    },

    // 发送信息
    sendComment(state, usercomment) {
      // 获取localstorage数据
      state.comment = JSON.parse(localStorage.getItem("comment"));
      state.user = JSON.parse(localStorage.getItem("user"));
      state.token = JSON.parse(localStorage.getItem("token"));

      // 若数据为空，新建comment发送数据
      if (state.comment == null) {
        state.comment = new Array();
      }
      let sendcomment = {
        photo: "",
        username: "",
        userid: "",
        usercomment: "",
        commentdate: "",
      };

      // 格式化发送时间
      let Minutes = () => {
        if (new Date().getMinutes() < 10) {
          return "0" + new Date().getMinutes();
        } else {
          return new Date().getMinutes();
        }
      };
      let Seconds = () => {
        if (new Date().getSeconds() < 10) {
          return "0" + new Date().getSeconds();
        } else {
          return new Date().getSeconds();
        }
      };
      let nowtime =
        new Date().getFullYear() +
        "-" +
        (new Date().getMonth() + 1) +
        "-" +
        new Date().getDate() +
        " " +
        new Date().getHours() +
        ":" +
        Minutes() +
        ":" +
        Seconds();

      // 将发送数据存入comment
      sendcomment.usercomment = usercomment;
      for (let i = 0; i < state.user.length; i++) {
        if (state.token.username == state.user[i].username) {
          sendcomment.userid = state.user[i].userid;
          sendcomment.photo = state.user[i].photo;
          sendcomment.username = state.user[i].username;
        }
      }
      sendcomment.commentdate = nowtime;
      state.comment.unshift(sendcomment);

      // 保存最新的comment数据至localstorage
      localStorage.setItem("comment", JSON.stringify(state.comment));
    },

    // 更新个人信息
    updata(state, { userid, email, phone, birthday, sex }) {
      state.user = JSON.parse(localStorage.getItem("user"));
      state.token = JSON.parse(localStorage.getItem("token"));
      state.comment = JSON.parse(localStorage.getItem("comment"));
      for (let i = 0; i < state.user.length; i++) {
        if (state.user[i].username == state.token.username) {
          state.user[i].userid = userid;
          state.user[i].email = email;
          state.user[i].phone = phone;
          state.user[i].birthday = birthday;
          state.user[i].sex = sex;
          state.token.userid = userid;
        }
        for (let j in state.comment) {
          if (state.user[i].username == state.comment[j].username) {
            state.comment[j].userid = userid;
          }
        }
      }
      localStorage.setItem("user", JSON.stringify(state.user));
      localStorage.setItem("token", JSON.stringify(state.token));
      localStorage.setItem("comment", JSON.stringify(state.comment));
    },

    // 管理员登录成功
    adminNowLogin(state, adminname) {
      // 获取localstorage保存的数据
      state.admintoken = JSON.parse(localStorage.getItem("admintoken"));

      // 若没有数据新建一个空的token
      if (state.admintoken == null) {
        state.admintoken = {
          loginstate: "",
          adminname: "admin",
          photo: require("../assets/picture/admin.png"),
        };
      }

      // 将user数据保存进token制作令牌
      for (let i = 0; i < state.admin.length; i++) {
        if (adminname.adminname == state.admin[i].adminname) {
          console.log(12);
          state.admintoken.adminname = state.admin[i].adminname;
          state.admintoken.loginstate = "注销";
          state.admin[i].islogin = 1;
        }
      }

      // 将新的令牌保存进token
      localStorage.setItem("admin", JSON.stringify(state.admin));
      localStorage.setItem("admintoken", JSON.stringify(state.admintoken));
    },

    // 管理员注销
    adminLogout(state) {
      state.admin = JSON.parse(localStorage.getItem("admin"));
      state.admintoken = JSON.parse(localStorage.getItem("admintoken"));
      for (let i in state.admin) {
        // console.log(1);
        if (state.admintoken.adminname == state.admin[i].adminname) {
          state.admin[i].islogin = 0;
          state.admintoken.loginstate = "";
          state.admintoken.adminname = "";
          // console.log(123);
        }
      }
      // console.log(234);
      localStorage.setItem("admin", JSON.stringify(state.admin));
      localStorage.setItem("admintoken", JSON.stringify(state.admintoken));
    },

    // 管理员密码修改
    adminpasswordReset(state, { adminname, newPassword }) {
      state.admin = JSON.parse(localStorage.getItem("admin"));
      for (let i in state.admin) {
        if (adminname == state.admin[i].adminname) {
          state.admin[i].adminpassword = newPassword;
        }
      }
      localStorage.setItem("admin", JSON.stringify(state.admin));
    },

    // 评论管理删除用户评论
    adminDelect(state, index) {
      state.comment = JSON.parse(localStorage.getItem("comment"));
      state.comment.splice(index, 1);
      localStorage.setItem("comment", JSON.stringify(state.comment));
    },

    // 编辑病毒信息
    setVirulsmessage(state, { id, Day, Name, Type, Message }) {
      let report_data = JSON.parse(localStorage.getItem("report_data"));
      let setdata = JSON.parse(localStorage.getItem("setdata"));
      for (let i in state.virulsInformation) {
        if (state.virulsInformation[i].id == id) {
          open4();
          return;
        }
      }
      for (let j in report_data) {
        console.log(234);
        if (report_data[j].id == setdata.id) {
          console.log(456);
          if (report_data[j].date != Day) {
            console.log(123);
            let Year = new Getdate(Day).getYear();
            let Month = new Getdate(Day).getMonth();
            let getDay = new Getdate(Day).getDate();
            let newDate = Year + "-" + Month + "-" + getDay;
            report_data[j].date = newDate;
          }
          report_data[j].name = Name;
          report_data[j].type = Type;
          report_data[j].message = Message;
          report_data[j].id = id;
          open2();
          localStorage.setItem("report_data", JSON.stringify(report_data));
          return;
        }
      }
      // state.date = Day;
      // state.name = Name;
      // state.type = Type;
      // state.message = Message;
    },

    // 病毒信息删除
    virulsDelect(state, index) {
      state.virulsInformation.splice(index, 1);
    },
  },

  actions: {},
  modules: {},
});
