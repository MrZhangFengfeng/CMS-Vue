<template>
  <div class="business-rec-view-box">
    <el-card class="box-card">
      <div slot="header" class="clearfix header-box">
        <div class="title" style="float: left">功能推荐</div>
      </div>

      <div class="business-rec-view-content">
        <div v-for="rec in recList" :key="rec.type" class="rec-item">
          <div class="rec-icon">
            <img :src="rec.icon" alt="" />
          </div>
          <div class="rec-info">
            <div class="title">{{ rec.title }}</div>
            <div class="desc">{{ rec.desc }}</div>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "BusinessRec",
  props: {
    msg: String,
  },
  data: function () {
    return {
      recList: [
        {
          type: "vip",
          icon: "https://img.alicdn.com/imgextra/i3/O1CN01ofDkss21uCjo35eKn_!!6000000007044-2-tps-105-105.png",
          title: "会员开卡礼",
          desc: "提升会员转化率",
          path: "",
        },
        {
          type: "dish",
          icon: "https://img.alicdn.com/imgextra/i2/O1CN01ORV9Bp1ubhQYCthMX_!!6000000006056-2-tps-102-105.png",
          title: "鸿雁特价菜",
          desc: "提升交易订单量",
          path: "",
        },
        {
          type: "coupon",
          icon: "https://img.alicdn.com/imgextra/i2/O1CN01ozjYeZ1xbeEAWUerz_!!6000000006462-2-tps-105-105.png",
          title: "鸿雁会员卡",
          desc: "提升会员交易频次",
          path: "",
        },
        {
          type: "data",
          icon: "https://img.alicdn.com/imgextra/i4/O1CN01AMHzw71sVcwVYnskp_!!6000000005772-2-tps-105-105.png",
          title: "用户洞察",
          desc: "数据洞察营销精准推送",
          path: "",
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.business-rec-view-box {
  .box-card {
    height: 200px;
  }
}
.header-box {
  height: 20px;
}
.business-rec-view-content {
  display: flex;
  justify-content: start;
  .rec-item {
    width: 200px;
    height: 100px;
    margin-right: 20px;
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 0px 20px;
    border-radius: 10px;
    position: relative;
    &:hover {
      background: #f9f9f9;
      box-shadow: 1px 3px 8px 0 rgba(155, 141, 132, 0.37);
      top: -4px;
      cursor: pointer;
    }
    .rec-icon {
      width: 60px;
      height: 60px;
      margin-right: 20px;
      img {
        width: 60px;
        height: 60px;
      }
    }
    .rec-info {
      .title {
        font-size: 16px;
        font-weight: 400;
        color: #000;
        margin-top: 2px;
        margin-bottom: 1px;
      }
      .desc {
        font-size: 12px;
        color: #888;
        margin-bottom: 0;
      }
    }
  }
}
</style>
