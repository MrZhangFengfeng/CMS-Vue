<template>
    <div class="demo-view">
        <div class="test-btn">
            <el-tooltip
                class="item"
                effect="dark"
                content="F12打开控制台查看细节"
                placement="top-start"
            >
                <el-button type="primary" @click="testUpdate"
                    >测试更新:{{ message }}</el-button
                >
            </el-tooltip>
        </div>
        <LifeCycle />
    </div>
</template>

<script>
// @ is an alias to /src
import LifeCycle from "../../components/demo/LifeCycle";

export default {
    name: "LifeCycleView",
    components: {
        LifeCycle,
    },
    data: function () {
        return {
            message: "foo",
        };
    },
    beforeCreate: function () {
        console.group("------beforeCreate创建前状态------");
        console.log("%c%s", "color:red", "el     : " + this.$el); //undefined
        console.log(
            "%c%s",
            "color:red",
            "data   : " + JSON.stringify(this.$data)
        ); //undefined
        console.log("%c%s", "color:red", "message: " + this.message);
    },
    created: function () {
        console.group("------created创建完毕状态------");
        console.log("%c%s", "color:red", "el     : " + this.$el); //undefined
        console.log(
            "%c%s",
            "color:red",
            "data   : " + JSON.stringify(this.$data)
        ); //已被初始化
        console.dir(this.$data);
        console.log("%c%s", "color:red", "message: " + this.message); //已被初始化
    },
    beforeMount: function () {
        console.group("------beforeMount挂载前状态------");
        console.log("%c%s", "color:red", "el     : " + this.$el); //undefined
        console.dir(this.$el);
        console.log(
            "%c%s",
            "color:red",
            "data   : " + JSON.stringify(this.$data)
        ); //已被初始化
        console.log("%c%s", "color:red", "message: " + this.message); //已被初始化
    },
    mounted: function () {
        console.group("------mounted 挂载结束状态------");
        console.log("%c%s", "color:red", "el     : " + this.$el); //已被初始化
        console.dir(this.$el);
        console.log(
            "%c%s",
            "color:red",
            "data   : " + JSON.stringify(this.$data)
        ); //已被初始化
        console.dir(this.$data);
        console.log("%c%s", "color:red", "message: " + this.message); //已被初始化
    },
    beforeUpdate: function () {
        console.group("beforeUpdate 更新前状态===============》");
        console.log("%c%s", "color:red", "el     : " + this.$el);
        console.dir(this.$el);
        console.log(
            "%c%s",
            "color:red",
            "data   : " + JSON.stringify(this.$data)
        );
        console.dir(this.$data);
        console.log("%c%s", "color:red", "message: " + this.message);
    },
    updated: function () {
        console.group("updated 更新完成状态===============》");
        console.log("%c%s", "color:red", "el     : " + this.$el);
        console.dir(this.$el);
        console.log(
            "%c%s",
            "color:red",
            "data   : " + JSON.stringify(this.$data)
        );
        console.dir(this.$data);
        console.log("%c%s", "color:red", "message: " + this.message);
    },
    beforeDestroy: function () {
        console.group("beforeDestroy 销毁前状态===============》");
        console.log("%c%s", "color:red", "el     : " + this.$el);
        console.dir(this.$el);
        console.log(
            "%c%s",
            "color:red",
            "data   : " + JSON.stringify(this.$data)
        );
        console.dir(this.$data);
        console.log("%c%s", "color:red", "message: " + this.message);
    },
    destroyed: function () {
        console.group("destroyed 销毁完成状态===============》");
        console.log("%c%s", "color:red", "el     : " + this.$el);
        console.dir(this.$el);
        console.log(
            "%c%s",
            "color:red",
            "data   : " + JSON.stringify(this.$data)
        );
        console.dir(this.$data);
        console.log("%c%s", "color:red", "message: " + this.message);
    },
    methods: {
        testUpdate() {
            this.message = Math.random();
        },
    },
};
</script>
<style scoped lang="scss">
.test-btn {
    margin-bottom: 20px;
}
</style>
