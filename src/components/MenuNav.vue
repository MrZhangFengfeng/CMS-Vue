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
        <div v-for="menu in menuList" :key="menu.id">
            <div v-if="menu.subMenu">
                <el-submenu>
                    <template slot="title">
                        <i :class="menu.icon"></i>
                        <span>{{ menu.title }}</span>
                    </template>
                    <el-menu-item-group
                        v-for="subMenu in menu.subMenu"
                        :key="subMenu.subLabel"
                    >
                        <template slot="title">{{
                            subMenu.subGroupLabel
                        }}</template>
                        <el-menu-item
                            :index="subMenuItem.path"
                            v-for="subMenuItem in subMenu.subMenuList"
                            :key="subMenuItem.id"
                            >{{ subMenuItem.subItemlabel }}</el-menu-item
                        >
                    </el-menu-item-group>
                </el-submenu>
            </div>
            <div v-else>
                <el-menu-item :index="menu.path">
                    <i :class="menu.icon"></i>
                    <span>{{ menu.title }}</span>
                </el-menu-item>
            </div>
        </div>
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
                    path: "",
                    icon: "el-icon-setting",
                    subMenu: [
                        {
                            subGroupLabel: "我的会员",
                            subMenuList: [
                                {
                                    id: "member-list",
                                    path: "/member/member-list",
                                    subItemlabel: "会员列表",
                                },
                            ],
                        },
                        {
                            subGroupLabel: "会员运营",
                            subMenuList: [
                                {
                                    id: "member-point-rule",
                                    path: "/member/member-point-rule",
                                    subItemlabel: "积分规则",
                                },
                                {
                                    id: "member-pay",
                                    path: "/member/member-pay",
                                    subItemlabel: "付费会员",
                                },
                            ],
                        },
                        {
                            subGroupLabel: "会员基础",
                            subMenuList: [
                                {
                                    id: "/member-card",
                                    path: "/member/member-card",
                                    subItemlabel: "会员卡",
                                },
                                {
                                    id: "member-grade",
                                    path: "/member/member-grade",
                                    subItemlabel: "会员等级",
                                },
                            ],
                        },
                    ],
                },
                {
                    id: "3",
                    title: "营销",
                    path: "/promot",
                    icon: "el-icon-location",
                },
                {
                    id: "4",
                    title: "推广",
                    path: "tuiguang",
                    icon: "el-icon-setting",
                },
                {
                    id: "5",
                    title: "数据",
                    path: "data",
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
