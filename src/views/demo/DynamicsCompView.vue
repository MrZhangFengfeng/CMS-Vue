<template>
    <div class="demo-view">
        <div class="label">异步加载组件</div>
        <el-card class="card-item">
            <component :is="DynamicComp1" v-if="DynamicComp1" />
        </el-card>
        <el-card class="card-item">
            <component :is="DynamicComp2" v-if="DynamicComp2" />
            <el-button
                type="primary"
                v-on:click="handleImportComp('DynamicComp2')"
                >点击按钮动态引入组件</el-button
            >
        </el-card>
    </div>
</template>

<script>
// @ is an alias to /src
export default {
    name: "DynamicsCompView",
    components: {},
    data: function () {
        return {
            DynamicComp1: "",
            DynamicComp2: "",
        };
    },
    mounted() {
        this.$message({
            showClose: true,
            message: "两秒后将会出现一个头像组件",
            type: "success",
        });
        setTimeout(() => {
            this.handleImportComp("DynamicComp1");
        }, 2000);
    },
    methods: {
        loader(comp) {
            return () => import(`@/components/demo/${comp}`);
        },
        handleImportComp(comp) {
            this[comp] = this.loader(comp);
        },
    },
};
</script>
<style scoped lang="scss">
.label {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 20px;
}
.card-item {
    margin-bottom: 20px;
}
</style>
