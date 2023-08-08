<template>
    <div>
        <el-card>
            <el-table
                ref="multipleTable"
                :data="customerList"
                tooltip-effect="dark"
                style="width: 100%"
                @selection-change="handleSelectionChange"
            >
                <el-table-column type="selection" width="120">
                </el-table-column>
                <el-table-column label="顾客ID" width="120">
                    <template slot-scope="scope">{{ scope.row.cid }}</template>
                </el-table-column>
                <el-table-column prop="grade" label="会员等级" width="120">
                </el-table-column>
                <el-table-column
                    prop="count"
                    width="120"
                    label="消费次数"
                    show-overflow-tooltip
                >
                </el-table-column>
                <el-table-column
                    prop="price"
                    label="笔单价"
                    width="120"
                ></el-table-column>
                <el-table-column
                    prop="resource"
                    label="来源"
                    width="120"
                ></el-table-column>
                <el-table-column prop="tag" label="状态" width="120">
                    <template slot-scope="scope">
                        <el-tag
                            :type="
                                scope.row.tag === 'USE' ? 'primary' : 'success'
                            "
                            disable-transitions
                            >{{ scope.row.tag }}</el-tag
                        >
                    </template>
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button
                            size="mini"
                            @click="handleViewDetail(scope.$index, scope.row)"
                            >详情</el-button
                        >
                        <el-button
                            size="mini"
                            type="primary"
                            @click="handleAddTag(scope.$index, scope.row)"
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

        <el-dialog
            title="添加人群标签"
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose"
        >
            <div class="dialog-content">
                <div class="label">人群标签:</div>
                <el-select
                    v-model="crowdTagList"
                    filterable
                    multiple
                    placeholder="请选择"
                >
                    <el-option
                        v-for="item in crowdTagOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    >
                    </el-option>
                </el-select>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="cancelSubmitAddTag">取 消</el-button>
                <el-button type="primary" @click="submitAddTag"
                    >确 定</el-button
                >
            </span>
        </el-dialog>
    </div>
</template>

<script>
// @ is an alias to /src
import mockData from "@/mock/member.js";
import Bus from "@/utils/Bus";
import CONSTANT from "@/utils/constant";

export default {
    name: "CustomerList",
    components: {},
    data: function () {
        return {
            resourceList: [],
            customerList: [],
            currentPage: 1,
            pageSize: 10,
            pageSizeList: [10, 20, 30, 40],
            crowdTagOptions: [
                {
                    value: "1",
                    label: "foo",
                },
                {
                    value: "2",
                    label: "bar",
                },
            ],
            dialogVisible: false,
            currentCid: "",
            crowdTagList: [],
        };
    },
    mounted: function () {
        this.customerList = mockData.customerList;
        // 监听事件的触发
        Bus.$on(CONSTANT.SEND_CUSTOMER_QUERY_PARAMS, (params) => {
            console.log("这是接收到的数据：", params);
            this.$alert(
                `这是从兄弟组件中传递过来的查询参数：${JSON.stringify(params)}`,
                "EventBus 组件通信",
                {
                    confirmButtonText: "确定",
                }
            );
        });
    },
    beforeDestroy() {
        // 取消监听
        Bus.$off(CONSTANT.SEND_CUSTOMER_QUERY_PARAMS);
    },
    methods: {
        handleAddTag: function (index, row) {
            console.log("index", index);
            console.log("row", row);
            this.dialogVisible = true;
            this.currentCid = row.cid;
        },
        submitAddTag: function () {
            console.log("crowdTagList", this.crowdTagList);
            this.$notify({
                title: "添加标签",
                message: `给顾客${
                    this.currentCid
                }添加的标签ID是：${JSON.stringify(this.crowdTagList)}`,
                type: "success",
            });
            this.currentCid = "";
            this.crowdTagList = [];
            this.dialogVisible = false;
        },
        cancelSubmitAddTag: function () {
            this.currentCid = "";
            this.crowdTagList = [];
            this.dialogVisible = false;
        },
        handleViewDetail: function (index, row) {
            console.log("index", index);
            console.log("row", row);
            this.$router.push(
                `/member/member-list-detail?customerId=${row.cid}`
            );
        },
    },
};
</script>
<style scoped lang="scss">
.crowd-pageination {
    float: right;
    padding: 20px;
}
.dialog-content {
    display: flex;
    align-items: center;
    .label {
        margin-right: 10px;
    }
}
</style>
