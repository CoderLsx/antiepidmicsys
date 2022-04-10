<template>
  <div id="bar">
    <slot name="subbtn">
      <!-- <div type="submit" id="barbtn"></div> -->
      <el-button circle id="barbtn"></el-button>
    </slot>
    <slot name="input">
      <input
        type="text"
        placeholder="搜索从这里开始..."
        id="barinp"
        v-model="searchInput"
      />
      <ul>
        <li v-for="(item, i) in Search" :key="i" :value="item.value">
          {{ item.name }}
        </li>
      </ul>
    </slot>
  </div>
</template>

<script>
export default {
  el: "",
  computed: {
    Search() {
      // let searchData = this.searchData;
      // let searchInput = this.searchInput;
      // let tableData = this.tableData;
      // console.log("a:" + searchInput);
      // tableData.map(function (item) {
      //   if (item.name.search(searchInput) != -1) {
      //     searchData.push(item);
      //   } else {
      //     searchData = [];
      //   }
      // });
      // console.log(tableData);
      // return searchData;
    },
  },
  data() {
    return {
      tableData: [
        {
          date: "2019-12-01",
          name: "新型冠状病毒肺炎",
          type: "RNA",
        },
        {
          date: "2016-05-03",
          name: "HIV病毒",
          type: "DNA",
        },
        {
          date: "2016-05-03",
          name: "埃博拉病毒",
          type: "DNA",
        },
        {
          date: "2016-05-03",
          name: "天花病毒",
          type: "DNA",
        },
        {
          date: "2016-05-03",
          name: "甲型H1N1病毒",
          type: "DNA",
        },
        {
          date: "2016-05-03",
          name: "西尼罗病毒",
          type: "DNA",
        },
        {
          date: "2016-05-03",
          name: "SARS冠状病毒",
          type: "DNA",
        },
        {
          date: "2016-05-03",
          name: "狂犬病病毒",
          type: "DNA",
        },
        {
          date: "2016-05-03",
          name: "马尔堡病毒",
          type: "DNA",
        },
        {
          date: "2016-05-03",
          name: "肝炎病毒",
          type: "DNA",
        },
        {
          date: "2016-05-03",
          name: "登革病毒",
          type: "DNA",
        },
        {
          date: "2016-05-03",
          name: "中东呼吸系统综合征冠状病毒",
          type: "DNA",
        },
        {
          date: "2016-05-03",
          name: "流行性感冒病毒",
          type: "RNA",
        },
        {
          date: "2016-05-03",
          name: "流行性感冒乙型脑炎",
          type: "RNA",
        },
        {
          date: "2016-05-03",
          name: "病毒性肝炎",
          type: "DNA",
        },
        {
          date: "2016-05-03",
          name: "肠道病毒感染",
          type: "DNA",
        },
        {
          date: "2016-05-03",
          name: "鼻病毒",
          type: "DNA",
        },
        {
          date: "2016-05-03",
          name: "普通冠状病毒",
          type: "DNA",
        },
        {
          date: "2016-05-03",
          name: "禽流感病毒",
          type: "DNA",
        },
        {
          date: "2016-05-03",
          name: "麻疹病毒",
          type: "DNA",
        },
        {
          date: "2016-05-03",
          name: "腮腺炎病毒",
          type: "DNA",
        },
        {
          date: "2016-05-03",
          name: "柯萨奇病毒",
          type: "DNA",
        },
        {
          date: "2016-05-03",
          name: "轮状病毒",
          type: "DNA",
        },
        {
          date: "2016-05-03",
          name: "单纯疱疹病毒",
          type: "DNA",
        },
      ],
      searchData: [],
      searchInput: "",
    };
  },
  methods: {},
};
</script>

<style src="@/assets/css/user/index-submit.css" scoped></style>
