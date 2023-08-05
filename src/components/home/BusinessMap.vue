<template>
  <el-card>
    <div id="map" style="width: 300px; height: 400px"></div>
  </el-card>
</template>

<script>
import * as echarts from "echarts";

export default {
  name: "BusinessMap",
  props: {
    msg: String,
  },
  data: function () {
    return {};
  },
  mounted: function () {
    var myChart = echarts.init(document.getElementById("map"));
    myChart.setOption({
      title: {
        text: "ECharts 入门示例",
      },
      tooltip: {},
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
      },
      yAxis: {},
      series: [
        {
          name: "销量",
          type: "bar",
          data: [5, 20, 36, 10, 10, 20],
        },
      ],
    });
    this.$nextTick(function () {
      // 仅在整个视图都被渲染之后才会运行的代码
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
