<template>
    <div class="page-wrap">
        <el-card class="card-wrap" style="">
            <el-link type="primary" href="/#/demo/life-cycle"
                ><i class="el-icon-ice-cream-round"></i> 生命周期</el-link
            >
        </el-card>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
    name: "DemoView",
    components: {},
    data: function () {
        return {
            instanceList: [
                {
                    imageUrl:
                        "https://gw.alicdn.com/imgextra/i2/O1CN01TxWlTn1knvrWtaM1Z_!!6000000004729-2-tps-1000-450.png",
                },
            ],
        };
    },
};
</script>
<style scoped lang="scss">
.page-wrap {
    display: flex;
    flex-wrap: wrap;
    .card-wrap {
        margin-bottom: 20px;
    }
}
</style>
