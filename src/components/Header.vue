<template>
    <div class="header">
        <div class="header-left">
            <img src="../assets/logo.png" alt="" />
            <div class="user-info">
                <div class="brand-name">[品牌] {{ user.brandName }}</div>
                <div class="toggle-btn">切换</div>
                <div class="user-phone">{{ user.phone }}</div>
            </div>
        </div>
        <div class="header-right">消息和帮助</div>
    </div>
</template>

<script>
export default {
    name: "CRMHeader",
    props: {
        msg: String,
    },
    data: function () {
        return {
            user: {
                brandName: "东吴面馆",
                phone: "188****6076",
            },
        };
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    box-shadow: 0 1px 4px 0 rgba(0, 21, 41, 0.12);
    .header-left {
        display: flex;
        justify-content: space-between;
        flex: 5;
        line-height: 26px;
        padding-right: 20px;
        img {
            width: 85px;
            height: 30px;
        }
        .user-info {
            display: flex;
            justify-content: end;
            align-items: center;
            color: rgba(0, 0, 0, 0.65);
            font-size: 14px;
            .toggle-btn {
                color: #108ee9;
                margin: 0 10px;
                cursor: pointer;
            }
        }
    }
    .header-right {
        flex: 1;
        align-items: center;
        font-size: 14px;
        line-height: 26px;
        height: 26px;
        border-left: 2px solid #cccccc80;
        padding-left: 20px;
    }
}
</style>
