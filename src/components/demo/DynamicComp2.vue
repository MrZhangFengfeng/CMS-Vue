<template>
    <div>
        <el-avatar
            size="large"
            src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
        ></el-avatar>
        <div>我是一个动态引入的头像组件2222</div>
    </div>
</template>

<script>
export default {
    name: "DynamicComp",
    props: {
        msg: String,
    },
    created: function () {},
    data: function () {
        return {};
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
