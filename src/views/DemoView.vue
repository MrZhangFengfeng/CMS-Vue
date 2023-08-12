<template>
    <div class="page-wrap">
        <div v-for="instance in instanceList" :key="instance.label">
            <div class="label">{{ instance.label }}</div>
            <el-divider></el-divider>
            <div class="card-wrap">
                <el-card
                    class="card-item"
                    v-for="subInstance in instance.subInstanceList"
                    :key="subInstance.title"
                >
                    <el-link type="primary" :href="subInstance.href"
                        ><i :class="subInstance.icon"></i>
                        {{ subInstance.title }}</el-link
                    >
                </el-card>
            </div>
        </div>
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
                    label: "Basic",
                    subInstanceList: [
                        {
                            title: "生命周期",
                            icon: "el-icon-ice-cream-round",
                            href: "/#/demo/life-cycle",
                        },
                        {
                            title: "watch 和 computed",
                            icon: "el-icon-sugar",
                            href: "/#/demo/life-cycle",
                        },
                        {
                            title: "组件间数据传递",
                            icon: "el-icon-cold-drink",
                            href: "/#/demo/life-cycle",
                        },
                        {
                            title: "动态组件 & 异步组件",
                            icon: "el-icon-cold-drink",
                            href: "/#/demo/life-cycle",
                        },
                        {
                            title: "slots() 和 children 对比",
                            icon: "el-icon-hot-water",
                            href: "/#/demo/life-cycle",
                        },
                        {
                            title: "过滤器",
                            icon: "el-icon-tableware",
                            href: "/#/demo/life-cycle",
                        },
                        {
                            title: "mixin",
                            icon: "el-icon-dish",
                            href: "/#/demo/life-cycle",
                        },
                        {
                            title: "自定义指令",
                            icon: "el-icon-cloudy-and-sunny",
                            href: "/#/demo/life-cycle",
                        },
                        {
                            title: "响应式原理",
                            icon: "el-icon-sunrise",
                            href: "/#/demo/life-cycle",
                        },
                    ],
                },
                {
                    label: "生态系统",
                    subInstanceList: [
                        {
                            title: "生命周期",
                            icon: "el-icon-ice-cream-round",
                            href: "/#/demo/life-cycle",
                        },
                    ],
                },
                {
                    label: "开发实践",
                    subInstanceList: [
                        {
                            title: "生命周期",
                            icon: "el-icon-ice-cream-round",
                            href: "/#/demo/life-cycle",
                        },
                    ],
                },
            ],
        };
    },
};
</script>
<style scoped lang="scss">
.label {
    font-size: 20px;
    font-weight: 500;
}
.card-wrap {
    display: flex;
    flex-wrap: wrap;
    .card-item {
        margin-bottom: 20px;
        text-align: center;
        margin-right: 20px;
        padding: 0 20px;
    }
}
</style>
