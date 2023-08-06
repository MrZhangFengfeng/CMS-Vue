<template>
  <div class="business-over-view-box">
    <el-card class="box-card">
      <div slot="header" class="clearfix header-box">
        <div class="title" style="float: left">运营开启指引</div>
      </div>

      <div class="business-over-view-content"></div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "BusinessGuide",
  props: {
    msg: String,
  },
  data: function () {
    return {
      updateTime: "2023/08/05 21:00",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.business-over-view-box {
  .box-card {
    height: 440px;
  }
}
.header-box {
  height: 20px;
}
.business-over-view-content {
  display: flex;
  justify-content: space-between;
}
</style>
