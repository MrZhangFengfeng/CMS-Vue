<template>
  <div class="dash-board">
    <el-row :gutter="20">
      <el-col :span="16"><BusinessOverView /></el-col>
      <el-col :span="8"><BusinessOverView /></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8"><BusinessMap /></el-col>
      <el-col :span="6">1</el-col>
      <el-col :span="6">1</el-col>
    </el-row>
  </div>
</template>

<script>
import BusinessOverView from "@/components/home/BusinessOverView.vue";
import BusinessMap from "@/components/home/BusinessMap.vue";

export default {
  name: "DashBoard",
  components: {
    BusinessOverView,
    BusinessMap,
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
}
</style>
