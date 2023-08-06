<template>
  <div>
    <el-card class="business-data-box trend">
      <div id="trend" class="trend-echarts"></div>
    </el-card>
    <el-card class="business-data-box resource">
      <div id="resource" class="resource-echarts"></div>
    </el-card>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  data() {
    return {};
  },
  mounted() {
    this.initTrendEchart();
    this.initResourceEchart();
  },
  methods: {
    initTrendEchart() {
      var TrendChart = echarts.init(document.getElementById("trend"));
      TrendChart.setOption({
        title: {
          text: "消费趋势",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: { type: "cross" },
        },
        legend: {
          data: ["总金额", "客单价"],
        },
        xAxis: [
          {
            type: "category",
            axisTick: {
              alignWithLabel: true,
            },
            data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月"],
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "客单价/元",
            min: 0,
            max: 250,
            position: "right",
            axisLabel: {
              formatter: "{value}",
            },
          },
          {
            type: "value",
            name: "总金额/元",
            min: 0,
            max: 25,
            position: "left",
            axisLabel: {
              formatter: "{value}",
            },
          },
        ],
        series: [
          {
            name: "总金额",
            type: "bar",
            yAxisIndex: 0,
            data: [6, 32, 70, 86, 68.7, 100.7, 125.6],
            color: ["#409EFF"],
          },
          {
            name: "客单价",
            type: "line",
            smooth: true,
            yAxisIndex: 1,
            data: [6.0, 10.2, 10.3, 11.5, 10.3, 13.2, 14.3],
            color: ["#67C23A"],
          },
        ],
      });
    },
    initResourceEchart() {
      var TrendChart = echarts.init(document.getElementById("resource"));
      TrendChart.setOption({
        title: {
          text: "消费来源",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: { type: "cross" },
        },
        xAxis: [
          {
            type: "category",
            axisTick: {
              alignWithLabel: true,
            },
            data: ["微信", "支付宝", "抖音", "美团", "其他"],
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "笔数",
            min: 0,
            max: 100,
            position: "left",
            axisLabel: {
              formatter: "{value}",
            },
          },
        ],
        series: [
          {
            name: "笔数",
            type: "bar",
            yAxisIndex: 0,
            data: [55, 42, 50, 76, 32],
            color: ["#409EFF"],
          },
        ],
      });
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.business-data-box {
  height: 210px;
  width: 400px;
  margin: auto;
  margin-bottom: 20px;
  .trend-echarts {
    height: 210px;
    width: 380px;
  }
  .resource-echarts {
    height: 210px;
    width: 380px;
  }
}
</style>
