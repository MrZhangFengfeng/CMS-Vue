<template>
    <div class="main-wrap">
        <el-row :gutter="20" class="member-card-row">
            <el-col :span="18">
                <div class="member-card-step">
                    <div class="step-header">
                        <div class="step-title">配置会员卡基础信息</div>
                        <div class="step-progress">
                            <el-progress
                                :text-inside="false"
                                :stroke-width="10"
                                :percentage="70"
                            ></el-progress>
                        </div>
                    </div>
                    <el-card>
                        <div class="step-content">
                            <div>
                                可配置会员卡名称、会员卡卡面、适用门店等信息
                            </div>
                            <el-button type="primary">去配置</el-button>
                        </div>
                    </el-card>
                </div>
                <div class="member-card-step">
                    <div class="step-header">
                        <div class="step-title">开启全渠道会员通</div>
                    </div>
                    <el-card>
                        <div class="step-content">
                            <div>
                                <div class="main-text">鸿雁线上渠道会员通</div>
                                <div class="desc-text">
                                    支持饿了么、美团，入会后可加入饿了么、美团卡券包
                                </div>
                            </div>
                            <el-switch
                                style="display: block"
                                v-model="value2"
                                active-color="#13ce66"
                                inactive-color="#ff4949"
                                active-text="开启"
                                inactive-text="关闭"
                            >
                            </el-switch>
                        </div>

                        <div class="step-content inner-card">
                            <div>
                                部分门店未入鸿，影响对应饿了么、美团门店线上入会入口透出
                            </div>
                            <el-button type="text">详情</el-button>
                        </div>

                        <div class="step-content">
                            <div>
                                <div class="step-content-sub">
                                    <span class="desc-text">授权账号：</span
                                    >张记状元品牌商
                                </div>
                                <div class="step-content-sub">
                                    <span class="desc-text">到期时间：</span
                                    >2023-12-30
                                </div>
                            </div>
                            <el-button type="text"
                                >同步更新会员卡信息</el-button
                            >
                        </div>
                    </el-card>
                </div>
                <div class="member-card-step">
                    <div class="step-header">
                        <div class="step-title">
                            配置入会开卡礼，吸引顾客入会
                        </div>
                        <div class="step-progress">
                            <el-progress
                                :text-inside="false"
                                :stroke-width="10"
                                :percentage="100"
                            ></el-progress>
                        </div>
                    </div>
                    <el-card>
                        <div class="step-content">
                            <div>可配置顾客入会享受的优惠券权益</div>
                            <el-button type="primary">去配置</el-button>
                        </div>
                        <el-divider></el-divider>
                        <div class="step-content">
                            <div class="step-content-sub-card-item">
                                <img
                                    src="https://img.alicdn.com/imgextra/i1/O1CN01rhZaG71E5tuXEieHX_!!6000000000301-55-tps-48-48.svg"
                                    alt=""
                                    class="icon"
                                />
                                <div class="info">
                                    <div class="main-info">团购代金券</div>
                                    <div class="desc-info">
                                        吸引顾客在鸿雁场景购买团购
                                    </div>
                                </div>
                            </div>
                            <div class="step-content-sub-card-item">
                                <img
                                    src="https://img.alicdn.com/imgextra/i3/O1CN01QBum9b1cEBrFp4XvL_!!6000000003568-55-tps-48-48.svg"
                                    alt=""
                                    class="icon"
                                />
                                <div class="info">
                                    <div class="main-info">配送费满减券</div>
                                    <div class="desc-info">
                                        吸引顾客在饿了么场景下单
                                    </div>
                                </div>
                            </div>
                            <div class="step-content-sub-card-item">
                                <img
                                    src="https://img.alicdn.com/imgextra/i1/O1CN01uwmNlZ26keOhocD8k_!!6000000007700-55-tps-48-48.svg"
                                    alt=""
                                    class="icon"
                                />
                                <div class="info">
                                    <div class="main-info">
                                        当面付全场代金券
                                    </div>
                                    <div class="desc-info">
                                        吸引顾客线下支付场景到店消费
                                    </div>
                                </div>
                            </div>
                        </div>
                    </el-card>
                </div>
                <div class="member-card-step">
                    <div class="step-header">
                        <div class="step-title">
                            配置会员专属特权，提升会员活跃度
                        </div>
                        <div class="step-progress">
                            <el-progress
                                :text-inside="false"
                                :stroke-width="10"
                                :percentage="90"
                            ></el-progress>
                        </div>
                    </div>

                    <div class="step-content">
                        <el-card>
                            <div class="flex w500">
                                <div class="step-content-sub-card-item">
                                    <img
                                        src="https://img.alicdn.com/imgextra/i3/O1CN01QBum9b1cEBrFp4XvL_!!6000000003568-55-tps-48-48.svg"
                                        alt=""
                                        class="icon"
                                    />
                                    <div class="info">
                                        <div class="main-info">
                                            外卖特价菜<el-tag
                                                type="info"
                                                size="small"
                                                >已配置</el-tag
                                            >
                                        </div>
                                        <div class="desc-info">
                                            提升外卖菜品销量
                                        </div>
                                    </div>
                                </div>
                                <el-button type="primary">去配置</el-button>
                            </div>
                        </el-card>
                        <el-card>
                            <div class="flex w500">
                                <div class="step-content-sub-card-item">
                                    <img
                                        src="https://img.alicdn.com/imgextra/i3/O1CN01QBum9b1cEBrFp4XvL_!!6000000003568-55-tps-48-48.svg"
                                        alt=""
                                        class="icon"
                                    />
                                    <div class="info">
                                        <div class="main-info">
                                            团购特价商品<el-tag
                                                type="warning"
                                                size="small"
                                                >未配置</el-tag
                                            >
                                        </div>
                                        <div class="desc-info">
                                            促进下单购买团购
                                        </div>
                                    </div>
                                </div>
                                <el-button type="primary">去配置</el-button>
                            </div>
                        </el-card>
                    </div>
                    <div class="text-center mt20">
                        <el-link type="primary">查看更多会员营销</el-link>
                    </div>
                </div>
            </el-col>
            <el-col :span="6" class="member-index-preview-wrap">
                <div class="text-center">顾客端会员页预览图</div>
                <img
                    src="../assets/member-index-preview.jpg"
                    alt=""
                    class="member-index-preview"
                />
            </el-col>
        </el-row>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
    name: "MemberCardIndex",
    components: {},
    data: function () {
        return {};
    },
    mounted: function () {},
    methods: {},
};
</script>
<style scoped lang="scss">
.member-card-step {
    margin-bottom: 50px;
    .step-header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 16px;
        .step-title {
            line-height: 18px;
            white-space: nowrap;
            color: #333;
            font-size: 20px;
            font-weight: 600;
        }
        .step-progress {
            width: 300px;
        }
    }
    .step-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .main-text {
            color: #000;
            font-size: 16px;
            margin-bottom: 5px;
        }
        .desc-text {
            color: #666;
            font-size: 14px;
        }
        &.inner-card {
            background-color: #fffbe6;
            border: 1px solid #ffe27a;
            margin: 20px 0;
            box-sizing: border-box;
            color: #666;
            font-size: 14px;
            font-variant: tabular-nums;
            line-height: 1.5;
            list-style: none;
            font-feature-settings: "tnum";
            position: relative;
            padding: 8px 15px 8px 37px;
            border-radius: 4px;
        }
        &.space-around {
            justify-content: space-around;
        }
        .step-content-sub {
            margin-bottom: 10px;
        }
        .step-content-sub-card-item {
            margin-bottom: 20px;
            display: flex;
            .icon {
                margin-right: 15px;
                width: 48px;
                height: 48px;
            }
            .info {
                .main-info {
                    color: #333;
                    font-size: 14px;
                    font-weight: 500;
                    margin-bottom: 10px;
                    .el-tag {
                        margin-left: 10px;
                    }
                }
                .desc-info {
                    color: #333;
                    opacity: 0.45;
                    font-size: 14px;
                    font-weight: 400;
                }
            }
        }
    }
}
.flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.w500 {
    width: 410px;
}
.text-center {
    width: 100%;
    text-align: center;
}
.mt20 {
    margin-top: 20px;
}
.member-index-preview-wrap {
    text-align: center;
    .member-index-preview {
        width: 250px;
        margin-top: 30px;
        border-radius: 10px;
    }
}
</style>
