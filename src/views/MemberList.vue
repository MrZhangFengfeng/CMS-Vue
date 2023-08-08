<template>
  <div>
    <el-card>
      <el-row :gutter="10" class="query-board-row">
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
      <el-row :gutter="10" class="query-board-row">
        <el-col :span="8">
          <div class="query-item">
            <div class="label">笔单价:</div>
            <el-input-number
              v-model="priceStart"
              controls-position="right"
              @change="handleChange"
              :min="0"
              :max="100000"
              size="small"
            ></el-input-number>
            <div class="gap">至</div>
            <el-input-number
              v-model="priceEnd"
              controls-position="right"
              @change="handleChange"
              :min="0"
              :max="100000"
              size="small"
            ></el-input-number>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="query-item">
            <div class="label">上次消费:</div>
            <el-date-picker
              v-model="consumeTime"
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
      <el-row :gutter="10" class="query-board-row">
        <el-col :span="24">
          <div class="query-item right">
            <el-button type="primary" icon="el-icon-search">查询</el-button>
            <el-button icon="el-icon-refresh">重置</el-button>
          </div>
        </el-col>
      </el-row>
    </el-card>

    <el-card>
      <el-table
        ref="multipleTable"
        :data="customerList"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column label="顾客ID" width="120">
          <template slot-scope="scope">{{ scope.row.cid }}</template>
        </el-table-column>
        <el-table-column prop="grade" label="会员等级" width="120">
        </el-table-column>
        <el-table-column prop="count" label="消费次数" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="price" label="笔单价"></el-table-column>
        <el-table-column prop="resource" label="来源"></el-table-column>
        <el-table-column
          prop="tag"
          label="状态"
          width="100"
          :filters="[
            { text: '启用中', value: 'USE' },
            { text: '未启用', value: 'UN_USE' },
          ]"
          :filter-method="filterTag"
          filter-placement="bottom-end"
        >
          <template slot-scope="scope">
            <el-tag
              :type="scope.row.tag === 'USE' ? 'primary' : 'success'"
              disable-transitions
              >{{ scope.row.tag }}</el-tag
            >
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
              >详情</el-button
            >
            <el-button
              size="mini"
              type="primary"
              @click="handleDelete(scope.$index, scope.row)"
              >添加人群标签</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <div class="crowd-pageination">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="pageSizeList"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="customerList.length"
        >
        </el-pagination>
      </div>
    </el-card>
  </div>
</template>

<script>
// @ is an alias to /src
import mockData from "@/mock/member.js";

export default {
  name: "MemberList",
  components: {},
  data: function () {
    return {
      nameOrPhone: "",
      crowdTag: "",
      store: "",
      priceStart: undefined,
      priceEnd: undefined,
      resource: "",
      consumeTime: [],
      crowdTagOptions: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
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
      resourceList: [],
      customerList: [],
      currentPage: 1,
      pageSize: 10,
      pageSizeList: [10, 20, 30, 40],
    };
  },
  mounted: function () {
    this.customerList = mockData.customerList;
    this.customerResource = mockData.customerResource;
  },
};
</script>
<style scoped lang="scss">
.query-board-row {
  margin-bottom: 20px;
  .query-item {
    display: flex;
    align-items: center;
    &.right {
      justify-content: end;
    }
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
.crowd-pageination {
  float: right;
  padding: 20px;
}
</style>
