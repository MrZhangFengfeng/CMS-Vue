<template>
    <el-card>
        <div class="label">生命周期</div>
        <div class="life-cycle-wrap">
            <div
                class="life-cycle"
                v-for="data in lifeCycleData"
                :key="data.label"
            >
                <el-card>
                    <div class="sub-label">{{ data.label }}</div>
                    <el-divider></el-divider>
                    <el-collapse v-model="activeName" accordion>
                        <el-collapse-item title="基本说明" name="1">
                            <div>
                                在实例初始化之后,进行数据侦听和事件/侦听器的配置之前同步调用。
                            </div>
                        </el-collapse-item>
                        <el-collapse-item title="Vue做了什么" name="2">
                            <div>
                                控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；
                            </div>
                        </el-collapse-item>
                        <el-collapse-item
                            title="业务开发中可以用来干什么"
                            name="3"
                        >
                            <div>简化流程：设计简洁直观的操作流程；</div>
                        </el-collapse-item>
                    </el-collapse>
                </el-card>
            </div>
        </div>
    </el-card>
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
