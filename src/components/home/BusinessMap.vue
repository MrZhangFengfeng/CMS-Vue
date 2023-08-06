<template>
  <el-card class="map-box">
    <div id="main" class="o-echarts"></div>
  </el-card>
</template>

<script>
import * as echarts from "echarts";
import chinaJson from "../../assets/map/china.json";
export default {
  data() {
    return {
      dataList: [
        { name: "南海诸岛" },
        { ename: "beijing", name: "北京", value: "8" },
        { ename: "tianjin", name: "天津", value: "3" },
        { ename: "shanghai", name: "上海", value: "6" },
        { ename: "chongqing", name: "重庆", value: "3" },
        { ename: "hebei", name: "河北", value: "2" },
        { ename: "henan", name: "河南", value: "1" },
        { ename: "yunnan", name: "云南", value: "1" },
        { ename: "liaoning", name: "辽宁" },
        { ename: "heilongjiang", name: "黑龙江" },
        { ename: "hunan", name: "湖南" },
        { ename: "anhui", name: "安徽" },
        { ename: "shandong", name: "山东" },
        { ename: "xinjiang", name: "新疆" },
        { ename: "jiangsu", name: "江苏", value: "5" },
        { ename: "zhejiang", name: "浙江", value: "8" },
        { ename: "jiangxi", name: "江西" },
        { ename: "hubei", name: "湖北" },
        { ename: "guangxi", name: "广西" },
        { ename: "gansu", name: "甘肃" },
        { ename: "shanxi", name: "山西" },
        { ename: "neimenggu", name: "内蒙古" },
        { ename: "shanxi1", name: "陕西" },
        { ename: "jilin", name: "吉林" },
        { ename: "fujian", name: "福建", value: "2" },
        { ename: "guizhou", name: "贵州" },
        { ename: "guangdong", name: "广东", value: "10" },
        { ename: "qinghai", name: "青海" },
        { ename: "xizang", name: "西藏" },
        { ename: "sichuan", name: "四川", value: "6" },
        { ename: "ningxia", name: "宁夏" },
        { ename: "hainan", name: "海南" },
        { name: "台湾" },
        { ename: "xianggang", name: "香港" },
        { ename: "aomen", name: "澳门" },
      ],
    };
  },
  methods: {
    initEchart() {
      var myChart = echarts.init(document.getElementById("main"));
      echarts.registerMap("china", chinaJson);
      var option = {
        tooltip: {
          //数据格式化
          formatter: function (params) {
            return (
              params.seriesName +
              "<br />" +
              params.name +
              "：" +
              (params.value || 0) +
              "家店"
            );
          },
        },
        visualMap: {
          min: 0,
          max: 16,
          left: "left",
          top: "bottom",
          text: ["高", "低"], //取值范围的文字
          inRange: {
            color: ["#e0ffff", "#409EFF"], //取值范围的颜色
          },
          show: true, //图注
        },
        geo: {
          map: "china", //引入地图数据
          roam: true, //不开启缩放和平移
          zoom: 1, //视角缩放比例
          label: {
            normal: {
              show: true,
              fontSize: "10",
              color: "rgba(0,0,0,0.7)",
            },
          },
          itemStyle: {
            normal: {
              borderColor: "rgba(0, 0, 0, 0.2)",
            },
            emphasis: {
              //高亮的显示设置
              areaColor: "skyblue", //鼠标选择区域颜色
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowBlur: 20,
              borderWidth: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
        // 鼠标悬浮提示框
        series: [
          {
            name: "省份",
            type: "map",
            geoIndex: 0,
            data: this.dataList,
          },
        ],
      };
      myChart.setOption(option);
      myChart.on("click", function (params) {
        if (!params.data.ename) {
          alert("暂无" + params.name + "地图数据");
          return;
        }
      });
    },
  },
  mounted() {
    this.initEchart();
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.o-echarts {
  height: 400px;
  width: 600px;
  margin: auto;
}
</style>
