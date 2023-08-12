<template>
    <div>
        <el-card class="card-wrap">
            <el-carousel :interval="5000" arrow="always">
                <el-carousel-item
                    v-for="instance in instanceList"
                    :key="instance.name"
                >
                    <img :src="instance.imageUrl" />
                </el-carousel-item>
            </el-carousel>
        </el-card>

        <el-card class="card-wrap">
            <el-link type="primary" href="/#/demo/life-cycle">生命周期</el-link>
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
            instanceList: [],
        };
    },
};
</script>
<style scoped lang="scss">
.card-wrap {
    margin-bottom: 20px;
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
}
</style>
