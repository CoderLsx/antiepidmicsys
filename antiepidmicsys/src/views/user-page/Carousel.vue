<template>
  <el-carousel indicator-position="outside">
    <el-carousel-item v-for="item in Carousel" :key="item">
      <div class="Carouselpic">
        <img :src="item.Picture" alt="" />
      </div>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  el: "",
  components: {},
  data() {
    return {
      Carousel: [
        {
          Picture: require("../../assets/picture/致敬英雄.jpg"),
        },
        {
          Picture: require("../../assets/picture/抗击疫情.jpg"),
        },
        {
          Picture: require("../../assets/picture/防止新冠.webp"),
        },
        {
          Picture: require("../../assets/picture/新冠病毒.webp"),
        },
      ],
    };
  },
  methods: {
  },
};
</script>

<style src="@/assets/css/user/Carousel.css" scoped></style>
