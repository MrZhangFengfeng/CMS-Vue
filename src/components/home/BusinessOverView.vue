<template>
  <div class="business-over-view-box">
    <el-card class="box-card">
      <div slot="header" class="clearfix header-box">
        <div class="title" style="float: left">
          经营概况数据截止到 {{ updateTime }}
        </div>
        <el-button style="float: right; padding: 3px 0" type="text"
          >今日</el-button
        >
        <el-button style="float: right; padding: 3px 0" type="text"
          >近三日</el-button
        >
        <el-button style="float: right; padding: 3px 0" type="text"
          >近七日</el-button
        >
      </div>

      <div class="business-over-view-content">
        <div class="business-over-view-content-item">
          <div class="title">交易大盘</div>
          <div class="detail">
            <div class="detail-item">
              <div class="detail-item-label">消费会员(人)</div>
              <div class="detail-item-count">66</div>
              <div class="detail-item-money">金额4784</div>
            </div>
            <div class="detail-item">
              <div class="detail-item-label">消费顾客(人)</div>
              <div class="detail-item-count">166</div>
              <div class="detail-item-money">金额14784</div>
            </div>
          </div>
        </div>
        <div class="business-over-view-content-item middle">
          <div class="title">新客分析</div>
          <div class="detail">
            <div class="detail-item">
              <div class="detail-item-label">新增会员(人)</div>
              <div class="detail-item-count">3</div>
            </div>
            <div class="detail-item">
              <div class="detail-item-label">新增顾客(人)</div>
              <div class="detail-item-count">25</div>
            </div>
          </div>
        </div>
        <div class="business-over-view-content-item">
          <div class="title">营销效果</div>
          <div class="detail">
            <div class="detail-item">
              <div class="detail-item-label">带动消费(元)</div>
              <div class="detail-item-count">956</div>
              <div class="detail-item-money">进行中活动 6</div>
            </div>
            <div class="detail-item">
              <div class="detail-item-label">验券人数(人)</div>
              <div class="detail-item-count">5</div>
            </div>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "BusinessOverView",
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
.business-over-view-content {
  display: flex;
  justify-content: space-between;
  .business-over-view-content-item {
    width: 25%;
    padding-left: 4%;
    padding-right: 4%;
    &.middle {
      border-left: 2px solid #cccccc;
      border-right: 2px solid #cccccc;
    }
    .title {
      font-size: 16px;
      color: #333;
      padding-bottom: 8px;
    }
    .detail {
      font-size: 14px;
      padding-bottom: 8px;
      opacity: 0.8;
      display: flex;
      justify-content: space-between;
      .detail-item {
        .detail-item-label {
          font-size: 14px;
          padding-bottom: 8px;
          opacity: 0.8;
        }
        .detail-item-count {
          font-size: 28px;
          color: #333;
          padding-bottom: 8px;
          line-height: 30px;
        }
        .detail-item-money {
          font-size: 12px;
        }
      }
    }
  }
}
</style>
