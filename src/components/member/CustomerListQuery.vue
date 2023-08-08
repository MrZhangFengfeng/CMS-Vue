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
                        <el-select
                            v-model="crowdTag"
                            filterable
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
                </el-col>
                <el-col :span="8">
                    <div class="query-item">
                        <div class="label">顾客门店:</div>
                        <el-input
                            v-model="store"
                            class="small"
                            placeholder="请选择门店"
                        >
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
                        <el-button
                            type="primary"
                            icon="el-icon-search"
                            @click="queryCustomerList"
                            >查询</el-button
                        >
                        <el-button
                            icon="el-icon-refresh"
                            @click="clearQueryParams"
                            >重置</el-button
                        >
                    </div>
                </el-col>
            </el-row>
        </el-card>
    </div>
</template>

<script>
// @ is an alias to /src
import mockData from "@/mock/member.js";

export default {
    name: "CustomListQuery",
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
                            start.setTime(
                                start.getTime() - 3600 * 1000 * 24 * 7
                            );
                            picker.$emit("pick", [start, end]);
                        },
                    },
                    {
                        text: "最近一个月",
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(
                                start.getTime() - 3600 * 1000 * 24 * 30
                            );
                            picker.$emit("pick", [start, end]);
                        },
                    },
                    {
                        text: "最近三个月",
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(
                                start.getTime() - 3600 * 1000 * 24 * 90
                            );
                            picker.$emit("pick", [start, end]);
                        },
                    },
                ],
            },
            resourceList: [],
        };
    },
    mounted: function () {
        this.customerResource = mockData.customerResource;
    },
    methods: {
        queryCustomerList: function () {
            const params = {
                nameOrPhone: this.nameOrPhone,
                crowdTag: this.crowdTag,
                store: this.store,
                priceStart: this.priceStart,
                priceEnd: this.priceEnd,
                resource: this.resource,
                consumeTime: this.consumeTime,
            };
            this.$alert(`你查询的条件是：${JSON.stringify(params)}`, "查询", {
                confirmButtonText: "确定",
            });
        },
        clearQueryParams: function () {
            this.nameOrPhone = "";
            this.crowdTag = "";
            this.store = "";
            this.priceStart = undefined;
            this.priceEnd = undefined;
            this.resource = "";
            this.consumeTime = [];
        },
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
</style>
