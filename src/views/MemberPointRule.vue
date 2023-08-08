<template>
    <div class="">
        <div class="header">
            <div class="title">积分规则</div>
            <div class="desc">
                设置人群的规则，根据多条规则圈定符合这些规则的人群，让营销活动更有针对性。您可以设置品牌的积分规则，积分和积分规则在品牌下是通用的
            </div>
        </div>

        <el-card class="form-item">
            <div class="title">
                <div class="title-text">积分名称</div>
                <div class="title-desc">用于顾客侧界面展示，比如1金币</div>
            </div>
            <div class="content">
                <div class="content-item">
                    <div class="sub-label">单位</div>
                    <el-input
                        v-model="unit"
                        maxlength="3"
                        class="sub-content-input"
                        placeholder="请输入单位"
                    ></el-input>
                </div>
            </div>
        </el-card>

        <el-card class="form-item">
            <div class="title">
                <div class="title-text">积分增加</div>
                <div class="title-desc">设置什么情况下会增加积分</div>
            </div>
            <div class="content">
                <div class="content-item">
                    <el-table :data="pointPlusData" style="width: 100%">
                        <el-table-column
                            label="会员等级"
                            width="180"
                            prop="grade"
                        ></el-table-column>
                        <el-table-column label="消费金额" width="260">
                            <template slot-scope="scope">
                                <el-input-number
                                    v-model="scope.row.consumptionAmount"
                                    :disabled="!scope.row.isOpen"
                                    controls-position="right"
                                    :min="0"
                                    :max="10000"
                                ></el-input-number>
                            </template>
                        </el-table-column>
                        <el-table-column label="赠送积分" width="260">
                            <template slot-scope="scope">
                                <el-input-number
                                    v-model="scope.row.point"
                                    :disabled="!scope.row.isOpen"
                                    controls-position="right"
                                    :min="0"
                                    :max="10000"
                                ></el-input-number>
                            </template>
                        </el-table-column>
                        <el-table-column label="是否允许积分">
                            <template slot-scope="scope">
                                <el-switch
                                    v-model="scope.row.isOpen"
                                    active-color="#13ce66"
                                    inactive-color="#ff4949"
                                    @change="
                                        handleSwitchChange(
                                            scope.$index,
                                            scope.row
                                        )
                                    "
                                >
                                </el-switch>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
                <div class="content-item">
                    <div class="sub-label">消费送积分渠道</div>
                    <el-select
                        v-model="pointChannel"
                        multiple
                        placeholder="请选择"
                    >
                        <el-option
                            class="sub-content-input"
                            v-for="item in pointChannelList"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        >
                        </el-option>
                    </el-select>
                </div>
            </div>
        </el-card>

        <el-card class="form-item">
            <div class="title">
                <div class="title-text">积分抵现</div>
                <div class="title-desc">设置什么情况下会减少积分</div>
            </div>
            <div class="content">
                <div class="content-item">
                    <el-table :data="pointReduceData" style="width: 100%">
                        <el-table-column
                            label="会员等级"
                            width="180"
                            prop="grade"
                        ></el-table-column>
                        <el-table-column label="使用积分" width="260">
                            <template slot-scope="scope">
                                <el-input-number
                                    v-model="scope.row.usePoint"
                                    controls-position="right"
                                    :min="0"
                                    :max="10000"
                                ></el-input-number>
                            </template>
                        </el-table-column>
                        <el-table-column label="抵扣金钱" width="260">
                            <template slot-scope="scope">
                                <el-input-number
                                    v-model="scope.row.point2money"
                                    controls-position="right"
                                    :min="0"
                                    :max="10000"
                                ></el-input-number>
                            </template>
                        </el-table-column>
                        <el-table-column label="是否有抵扣上限">
                            <template slot-scope="scope">
                                <el-switch
                                    v-model="scope.row.isMax"
                                    active-color="#13ce66"
                                    inactive-color="#ff4949"
                                    @change="
                                        handleSwitchChange(
                                            scope.$index,
                                            scope.row
                                        )
                                    "
                                >
                                </el-switch>
                            </template>
                        </el-table-column>
                        <el-table-column label="单词最多使用积分" width="260">
                            <template slot-scope="scope">
                                <el-input-number
                                    v-model="scope.row.maxPoint"
                                    :disabled="!scope.row.isMax"
                                    controls-position="right"
                                    :min="0"
                                    :max="10000"
                                ></el-input-number>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
                <div class="content-item">
                    <div class="sub-label">积分抵现与优惠券同享</div>
                    <el-switch
                        v-model="isPointAndCoupon"
                        active-color="#13ce66"
                        inactive-color="#ff4949"
                        @change="handleSwitchChange"
                    >
                    </el-switch>
                </div>
            </div>
        </el-card>

        <el-card class="form-item">
            <div class="title">
                <div class="title-text">积分有效期</div>
                <div class="title-desc">
                    获得的积分具有有效期，你可以设置积分失效时间，注意！调整有效期仅对新获得的积分生效。
                </div>
            </div>
            <div class="content">
                <div class="content-item">
                    <div class="sub-label">积分有效期</div>
                    <el-radio v-model="periodOfValidity" label="1"
                        >无限</el-radio
                    >
                    <el-radio v-model="periodOfValidity" label="2"
                        >固定日期失效</el-radio
                    >
                    <el-radio v-model="periodOfValidity" label="3"
                        >固定时长失效</el-radio
                    >
                </div>
                <div class="content-item" v-if="periodOfValidity == 2">
                    <div class="sub-label">失效日期</div>
                    <el-radio v-model="InvalidityDate" label="1"
                        >每月最后一天失效</el-radio
                    >
                    <el-radio v-model="InvalidityDate" label="2"
                        >每季度最后一天失效</el-radio
                    >
                    <el-radio v-model="InvalidityDate" label="3"
                        >每年最后一天失效</el-radio
                    >
                </div>
                <div class="content-item" v-if="periodOfValidity == 3">
                    <div class="sub-label">失效周期</div>
                    <el-radio v-model="InvalidityCycle" label="1"
                        >一月后失效</el-radio
                    >
                    <el-radio v-model="InvalidityCycle" label="2"
                        >一季度后失效</el-radio
                    >
                    <el-radio v-model="InvalidityCycle" label="3"
                        >一年后失效</el-radio
                    >
                    <el-radio v-model="InvalidityCycle" label="4"
                        >其他天数</el-radio
                    >
                </div>
                <div
                    class="content-item"
                    v-if="periodOfValidity == 3 && InvalidityCycle == 4"
                >
                    <div class="sub-label">失效天数</div>
                    <el-input-number
                        v-model="expirationDays"
                        controls-position="right"
                        :min="0"
                        :max="10000"
                    ></el-input-number>
                </div>
            </div>
        </el-card>

        <div class="footer">
            <el-button type="primary" @click="handleSave">保存</el-button>
            <el-button @click="handleCancel">取消</el-button>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
    name: "MemberPointRule",
    components: {},
    data: function () {
        return {
            unit: "积分",
            pointPlusData: [
                {
                    grade: "普通会员",
                    consumptionAmount: 1,
                    point: 1,
                    isOpen: true,
                },
                {
                    grade: "贵宾会员",
                    consumptionAmount: 1,
                    point: 2,
                    isOpen: true,
                },
                {
                    grade: "黑金会员",
                    consumptionAmount: 1,
                    point: 4,
                    isOpen: true,
                },
            ],
            pointReduceData: [
                {
                    grade: "普通会员",
                    usePoint: 1,
                    point2money: 1,
                    isMax: true,
                    maxPoint: 50,
                },
                {
                    grade: "贵宾会员",
                    usePoint: 1,
                    point2money: 1,
                    isMax: true,
                    maxPoint: 100,
                },
                {
                    grade: "黑金会员",
                    usePoint: 1,
                    point2money: 1,
                    isMax: true,
                    maxPoint: 150,
                },
            ],
            pointChannel: [],
            pointChannelList: [
                {
                    value: "a",
                    label: "堂食",
                },
                {
                    value: "b",
                    label: "外卖",
                },
            ],
            isPointAndCoupon: false,
            periodOfValidity: "",
            InvalidityDate: "",
            InvalidityCycle: "",
            expirationDays: "",
        };
    },
    mounted: function () {},
    methods: {
        handleSwitchChange(index) {
            const _pointPlusData = JSON.parse(
                JSON.stringify(this.pointPlusData)
            );
            _pointPlusData[index].isOpen = !!_pointPlusData[index].isOpen;
            this.pointPlusData = _pointPlusData;
        },
        handleSave() {
            const params = JSON.stringify({
                unit: this.unit,
                isPointAndCoupon: this.isPointAndCoupon,
                pointPlusData: this.pointPlusData,
                pointReduceData: this.pointReduceData,
                periodOfValidity: this.periodOfValidity,
                InvalidityDate: this.InvalidityDate,
                InvalidityCycle: this.InvalidityCycle,
                expirationDays: this.expirationDays,
            });
            this.$alert(params, "保存的数据", {
                confirmButtonText: "确定",
            });
        },
        handleCancel() {},
    },
};
</script>
<style scoped lang="scss">
.header {
    margin-bottom: 20px;
    .title {
        color: #333;
        font-weight: 600;
        font-size: 20px;
        line-height: 32px;
        margin-bottom: 20px;
    }
    .desc {
        color: #333;
        font-size: 14px;
    }
}
.form-item {
    margin-bottom: 20px;
    .title {
        display: flex;
        margin-bottom: 20px;
        .title-text {
            color: #333333;
            font-size: 16px;
            font-weight: 500;
            margin-right: 10px;
        }
        .title-desc {
            color: #cccccc;
            font-size: 14px;
            font-weight: normal;
        }
    }
}
.content {
    .content-item {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        .sub-label {
            color: #333333;
            margin-right: 10px;
        }
        .sub-content-input {
            width: 200px;
        }
    }
}
.footer {
    float: right;
}
</style>
