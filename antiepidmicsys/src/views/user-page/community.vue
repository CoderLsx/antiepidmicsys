<template>
  <div class="common-layout">
    <el-container>
      <el-header><h2>社区</h2></el-header>
      <el-main>
        <div class="main">
          <el-avatar id="userphoto">
            <img :src="this.$store.state.token.photo" />
          </el-avatar>
          <el-input
            v-model="Text"
            :rows="5"
            resize="none"
            type="textarea"
            placeholder="Please input"
          />
          <el-button type="primary" @click="send">发送</el-button>
        </div>
      </el-main>
      <el-footer>
        <div class="footer">
          <ul
            v-infinite-scroll="load"
            class="infinite-list"
            style="overflow: auto"
          >
            <el-scrollbar height="">
              <li
                v-for="(item, index) in count"
                :key="item"
                :index="index"
                class="infinite-list-item scrollbar-demo-item"
              >
                <div>
                  <el-avatar>
                    <img :src="item.photo" alt="" />
                  </el-avatar>
                  <span class="username">{{ item.userid }}</span>
                  <div class="text">
                    {{ item.usercomment }}
                  </div>
                  <div class="date">{{ item.commentdate }}</div>
                </div>
              </li>
            </el-scrollbar>
          </ul>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import { ElMessage } from "element-plus";

const open4 = () => {
  ElMessage.error("发送信息不能为空");
};
const open5 = () => {
  ElMessage.error("请先登录");
};
export default {
  el: "",
  components: {},
  data() {
    return {
      count: this.$store.state.comment,
      Text: "",
    };
  },
  computed: {},
  methods: {
    load() {},
    send() {
      if (this.Text == "") {
        open4();
      } else if (this.$store.state.token.username == "") {
        open5();
        this.Text = "";
      } else {
        this.$store.commit("sendComment", this.Text);
        this.count = JSON.parse(localStorage.getItem("comment"));
        this.Text = "";
      }
    },
    UserFilled() {},
  },
};
</script>

<style src="@/assets/css/user/community.css" scoped></style>
