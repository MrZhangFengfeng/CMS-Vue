<template>
  <div class="business-over-view-box">
    <el-card class="box-card">
      <div slot="header" class="clearfix header-box">
        <div class="title" style="float: left">营销日历</div>
      </div>

      <div class="business-clendar-view-content">
        <el-empty :image-size="100" description="暂无数据"></el-empty>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "BusinessClendar",
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
    height: 220px;
  }
}
.header-box {
  height: 20px;
}
.business-clendar-view-content {
  text-align: center;
  .el-empty {
    padding: 0;
    transform: translateY(-20px);
  }
}
</style>
