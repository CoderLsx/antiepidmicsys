<template>
  <h2>病毒路径</h2>
  <el-timeline>
    <ul v-infinite-scroll="load" class="infinite-list" style="overflow: auto">
      <el-scrollbar height="">
        <el-timeline-item
          center
          v-for="item in timelineData"
          :key="item"
          :timestamp="item.date"
          placement="top"
        >
          <el-card>
            <h4>
              <pre>{{ item.message }}</pre>
            </h4>
          </el-card>
        </el-timeline-item>
      </el-scrollbar>
    </ul>
  </el-timeline>
</template>

<script>
import { ref } from "vue";
const count = ref(0);
export default {
  el: "",
  components: {},
  data() {
    return {
      timelineData: this.$store.state.virulstimelineData,
    };
  },
  methods: {
    load() {
      {
        count.value += 2;
      }
    },
  },
};
</script>

<style scoped>
h2 {
  /* position: absolute;
  top: 50px;
  left: 950px; */
  width: 100px;
  margin: 0 auto;
}
.el-timeline {
  position: absolute;
  top: 115px;
  left: 400px;
}
.el-scrollbar {
  width: 1000px;
  height: 700px;
}
</style>
