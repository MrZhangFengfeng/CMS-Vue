<template>
    <div class="member-card-edit-wrap">
        <div>
            <el-breadcrumb separator="/" class="breadcrumb">
                <el-breadcrumb-item :to="{ path: '/#/' }"
                    >首页</el-breadcrumb-item
                >
                <el-breadcrumb-item
                    ><a href="/#/member/member-card"
                        >会员卡</a
                    ></el-breadcrumb-item
                >
                <el-breadcrumb-item>编辑基本信息</el-breadcrumb-item>
            </el-breadcrumb>

            <el-row :gutter="20">
                <el-col :span="16">
                    <el-card>
                        <el-form
                            ref="memberCardForm"
                            :model="memberCardForm"
                            :rules="memberCardFormRules"
                            label-width="80px"
                        >
                            <el-form-item label="卡名称" prop="cardName">
                                <el-input
                                    v-model="memberCardForm.cardName"
                                ></el-input>
                            </el-form-item>
                            <el-form-item label="卡面样式" prop="cardBgType">
                                <el-radio
                                    v-model="memberCardForm.cardBgType"
                                    label="1"
                                    >统一卡面</el-radio
                                >
                                <el-radio
                                    v-model="memberCardForm.cardBgType"
                                    label="2"
                                    >按等级不同卡面</el-radio
                                >
                                <div>
                                    <el-upload
                                        class="member-card-bg-uploader"
                                        action="https://jsonplaceholder.typicode.com/posts/"
                                        :show-file-list="false"
                                        :on-success="handleMemberCardBgSuccess"
                                        :before-upload="
                                            beforeMemberCardBgUpload
                                        "
                                    >
                                        <img
                                            v-if="memberCardBgImgUrl"
                                            :src="memberCardBgImgUrl"
                                            class="avatar"
                                        />
                                        <i
                                            v-else
                                            class="el-icon-plus avatar-uploader-icon"
                                        ></i>
                                    </el-upload>
                                </div>
                            </el-form-item>
                            <el-form-item label="适用门店">
                                <div>点击打开门店选择器</div>
                            </el-form-item>
                            <el-form-item
                                label="入会信息"
                                prop="joinMemberInfo"
                            >
                                <el-checkbox-group
                                    v-model="memberCardForm.joinMemberInfo"
                                >
                                    <el-checkbox label="phone" disabled
                                        >手机号</el-checkbox
                                    >
                                    <el-checkbox label="name">姓名</el-checkbox>
                                    <el-checkbox label="sex">性别</el-checkbox>
                                    <el-checkbox label="birthday"
                                        >生日</el-checkbox
                                    >
                                </el-checkbox-group>
                                <div>
                                    会员入会时必填的信息，为了避免影响入会的效率尽量减少必填项，其中生日信息可用于生日礼营销活动
                                </div>
                            </el-form-item>
                            <el-form-item label="入会协议" prop="agreement">
                            </el-form-item>
                            <el-form-item>
                                <el-button
                                    type="primary"
                                    @click="submitForm('memberCardForm')"
                                    >立即创建</el-button
                                >
                                <el-button>取消</el-button>
                            </el-form-item>
                        </el-form>
                    </el-card>
                </el-col>
                <el-col :span="8">
                    <el-card>
                        <el-tabs v-model="previewStyle">
                            <el-tab-pane label="入会前" name="noMember"
                                >用户管理</el-tab-pane
                            >
                            <el-tab-pane label="入会后" name="Member"
                                >配置管理</el-tab-pane
                            >
                        </el-tabs>
                    </el-card>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
    name: "MemberCardEdit",
    components: {},
    data: function () {
        return {
            previewStyle: "noMember",
            memberCardForm: {
                cardName: "",
                joinMemberInfo: ["phone"],
                cardBgType: "",
            },
            memberCardBgImgUrl: "",
            memberCardFormRules: {
                cardName: {
                    required: true,
                    message: "请输入会员卡名称",
                    trigger: "blur",
                },
                cardBgType: {
                    required: true,
                    message: "请选择会员卡背景样式",
                    trigger: "change",
                },
                agreement: {
                    required: true,
                    message: "请配置入会协议",
                    trigger: "blur",
                },
            },
        };
    },
    mounted: function () {},
    methods: {
        handleMemberCardBgSuccess(res) {
            console.log("sss", res);
        },
        beforeMemberCardBgUpload(file) {
            const isJPG = file.type === "image/jpeg";
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
                this.$message.error("上传头像图片只能是 JPG 格式!");
            }
            if (!isLt2M) {
                this.$message.error("上传头像图片大小不能超过 2MB!");
            }
            return isJPG && isLt2M;
        },
        submitForm() {
            this.$refs["memberCardForm"].validate((valid) => {
                if (valid) {
                    alert("submit!");
                } else {
                    console.log("error submit!!");
                    return false;
                }
            });
        },
    },
};
</script>
<style scoped lang="scss">
.breadcrumb {
    margin-bottom: 20px;
}
.member-card-bg-uploader {
    .el-upload {
        border-radius: 6px;
        position: relative;
        overflow: hidden;
    }
    .el-upload:hover {
        border-color: #409eff;
    }
    .avatar-uploader-icon {
        cursor: pointer;
        border: 1px dashed #d9d9d9;
        font-size: 28px;
        color: #8c939d;
        width: 320px;
        height: 128px;
        line-height: 128px;
        text-align: center;
    }
    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }
}
</style>
