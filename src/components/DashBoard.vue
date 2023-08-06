<template>
  <div class="dash-board">
    <el-row :gutter="20" class="dash-board-row">
      <el-col :span="18"><BusinessOverView /></el-col>
      <el-col :span="6"><BusinessClendar /></el-col>
    </el-row>

    <el-row :gutter="20" class="dash-board-row">
      <el-col :span="10"><BusinessMap /></el-col>
      <el-col :span="8"><BusinessData /></el-col>
      <el-col :span="6"><BusinessGuide /></el-col>
    </el-row>

    <BusinessRec />
  </div>
</template>

<script>
import BusinessOverView from "@/components/home/BusinessOverView.vue";
import BusinessClendar from "@/components/home/BusinessClendar.vue";
import BusinessGuide from "@/components/home/BusinessGuide.vue";
import BusinessMap from "@/components/home/BusinessMap.vue";
import BusinessData from "@/components/home/BusinessData.vue";
import BusinessRec from "@/components/home/BusinessRec.vue";

export default {
  name: "DashBoard",
  components: {
    BusinessOverView,
    BusinessClendar,
    BusinessMap,
    BusinessData,
    BusinessGuide,
    BusinessRec,
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.dash-board {
  width: 100%;
  .dash-board-row {
    margin-bottom: 20px;
  }
}
</style>
