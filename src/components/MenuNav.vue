<template>
  <el-menu
    default-active="1"
    router="true"
    class="el-menu-vertical-demo"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-menu-item :index="menu.path" v-for="menu in menuList" :key="menu.id">
      <template slot="title">
        <i :class="menu.icon"></i>
        <span>{{ menu.title }}</span>
      </template>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "MenuNav",
  props: {
    msg: String,
  },
  data: function () {
    return {
      menuList: [
        {
          id: "1",
          title: "概况",
          path: "/",
          icon: "el-icon-location",
        },
        {
          id: "2",
          title: "会员",
          path: "about",
          icon: "el-icon-setting",
        },
        {
          id: "3",
          title: "营销",
          path: "/",
          icon: "el-icon-location",
        },
        {
          id: "4",
          title: "推广",
          path: "about",
          icon: "el-icon-setting",
        },
        {
          id: "5",
          title: "数据",
          path: "/",
          icon: "el-icon-location",
        },
        {
          id: "6",
          title: "订单",
          path: "about",
          icon: "el-icon-setting",
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.el-menu {
  border: none;
}
</style>
