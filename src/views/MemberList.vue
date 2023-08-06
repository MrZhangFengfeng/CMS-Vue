<template>
  <div>
    <el-card>
      <el-row :gutter="20" class="query-board-row">
        <el-col :span="8">
          <div class="query-item">
            <div class="label">顾客信息:</div>
            <el-input
              class="small"
              v-model="nameOrPhone"
              placeholder="请输入顾客姓名或者手机号"
            ></el-input>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="query-item">
            <div class="label">人群标签:</div>
            <el-select v-model="crowdTag" filterable placeholder="请选择">
              <el-option
                v-for="item in crowdTagOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="query-item">
            <div class="label">顾客门店:</div>
            <el-input v-model="store" class="small" placeholder="请选择门店">
              <template slot="append">Search</template>
            </el-input>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" class="query-board-row">
        <el-col :span="8">
          <div class="query-item">
            <div class="label">笔单价:</div>
            <el-input-number
              v-model="num"
              controls-position="right"
              @change="handleChange"
              :min="1"
              :max="100000"
              size="small"
            ></el-input-number>
            <div class="gap">至</div>
            <el-input-number
              v-model="num"
              controls-position="right"
              @change="handleChange"
              :min="1"
              :max="100000"
              size="small"
            ></el-input-number>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="query-item">
            <div class="label">上次消费:</div>
            <el-date-picker
              v-model="value2"
              type="daterange"
              align="right"
              unlink-panels
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :picker-options="pickerOptions"
            >
            </el-date-picker>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="query-item">
            <div class="label">顾客来源:</div>
            <el-select v-model="resource" placeholder="请选择">
              <el-option
                v-for="item in resourceList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </div>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "MemberList",
  components: {},
  data: function () {
    return {
      nameOrPhone: "",
      crowdTag: "",
      store: "",
      resource: "",
      crowdTagOptions: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            },
          },
        ],
      },
      resourceList: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
    };
  },
};
</script>
<style scoped lang="scss">
.query-board-row {
  margin-bottom: 20px;
  .query-item {
    display: flex;
    align-items: center;
    .label {
      font-size: 14px;
      color: #333333;
      margin-right: 10px;
    }
    .el-input {
      &.small {
        width: 60%;
      }
    }
    .gap {
      margin: 0 10px;
    }
  }
}
</style>
