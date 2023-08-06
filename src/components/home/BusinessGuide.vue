<template>
  <div class="business-over-view-box">
    <el-card class="box-card">
      <div slot="header" class="clearfix header-box">
        <div class="title" style="float: left">运营开启指引</div>
      </div>

      <div class="business-guide-view-content">
        <div v-for="guide in guideList" :key="guide.type" class="guide-item">
          <div class="label">
            <i :class="guide.icon" style="color: #409eff"></i>
            {{ guide.label }}
          </div>
          <div
            v-for="manage in guide.manageList"
            :key="manage.id"
            class="manage-item"
          >
            <div class="text">{{ manage.text }}</div>
            <div :class="{ active: manage.status === 'UN_DONE', status: true }">
              {{ statusMap[manage.status] }}
            </div>
          </div>
        </div>
      </div>
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
      statusMap: {
        DONE: "已完成",
        UN_DONE: "未完成",
      },
      guideList: [
        {
          type: "manage",
          label: "运营管理",
          icon: "el-icon-eleme",
          manageList: [
            {
              id: "1",
              text: "创建会员营销方案",
              status: "DONE",
            },
            {
              id: "2",
              text: "创建消费激励营销方案",
              status: "UN_DONE",
            },
            {
              id: "3",
              text: "开通全渠道会员",
              status: "DONE",
            },
          ],
        },
        {
          type: "manage",
          label: "基础设置",
          icon: "el-icon-setting",
          manageList: [
            {
              id: "1",
              text: "门店绑定",
              status: "UN_DONE",
            },
            {
              id: "2",
              text: "产品签约",
              status: "DONE",
            },
          ],
        },
        {
          type: "manage",
          label: "会员管理",
          icon: "el-icon-user",
          manageList: [
            {
              id: "1",
              text: "创建会员卡",
              status: "DONE",
            },
            {
              id: "2",
              text: "开启会员积分",
              status: "UN_DONE",
            },
            {
              id: "3",
              text: "会员导入",
              status: "DONE",
            },
          ],
        },
      ],
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
.business-guide-view-content {
  .guide-item {
    .label {
      padding: 10px 0;
      font-size: 14px;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.85);
      line-height: 22px;
    }
    .manage-item {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
      .text {
        font-size: 14px;
        color: #888;
      }
      .status {
        font-size: 14px;
        color: #888;
        &.active {
          color: #e6a23c;
        }
      }
    }
  }
}
</style>
