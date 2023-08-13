<template>
    <div>
        <el-card class="card-wrap">
            <div class="label">生命周期</div>
            <div class="life-cycle-wrap">
                <div
                    class="life-cycle"
                    v-for="data in lifeCycleData"
                    :key="data.label"
                >
                    <el-card>
                        <div class="sub-label">
                            {{ data.label }}
                            <el-tag :type="data.tagType">{{ data.tag }}</el-tag>
                        </div>
                        <el-divider></el-divider>
                        <el-collapse v-model="activeName" accordion>
                            <el-collapse-item title="基本说明" name="1">
                                <div>
                                    {{ data.detailDesc }}
                                </div>
                            </el-collapse-item>
                            <!-- <el-collapse-item title="Vue做了什么" name="2">
                            <div>
                                控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；
                            </div>
                        </el-collapse-item> -->
                            <el-collapse-item
                                title="业务开发中可以用来干什么"
                                name="3"
                            >
                                <div>{{ data.businessDev }}</div>
                            </el-collapse-item>
                        </el-collapse>
                    </el-card>
                </div>
            </div>
        </el-card>

        <el-card class="card-wrap">
            <div class="label">父子组件生命周期</div>
            <el-card class="card-wrap"
                >挂载阶段：父组件 beforeMount -> 子组件 created -> 子组件
                mounted -> 父组件 mounted</el-card
            >
            <el-card class="card-wrap"
                >更新阶段：父组件 beforeUpdate -> 子组件 beforeUpdate -> 子组件
                updated -> 父组件 updated</el-card
            >
            <el-card class="card-wrap"
                >销毁阶段：父组件 beforeDestroy -> 子组件 beforeDestroy ->
                子组件 destroyed -> 父组件 destroyed</el-card
            >
        </el-card>
    </div>
</template>

<script>
import lifeCycleData from "../../data/lifeCycle";

export default {
    name: "LifeCycle",
    props: {
        msg: String,
    },
    created: function () {
        this.lifeCycleData = lifeCycleData;
    },
    data: function () {
        return {
            lifeCycleData: {},
        };
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card-wrap {
    margin-bottom: 20px;
}
.label {
    font-size: 20px;
    font-weight: 500;
    color: #000000;
    margin-bottom: 20px;
}
.life-cycle-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    .life-cycle {
        width: 30%;
        margin-right: 3%;
        margin-bottom: 20px;
    }
}
</style>
