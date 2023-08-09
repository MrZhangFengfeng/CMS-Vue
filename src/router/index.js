import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import MemberView from "../views/MemberView.vue";
import MemberList from "../views/MemberList.vue";
import MemberListDetail from "../views/MemberListDetail.vue";
import MemberPointRule from "../views/MemberPointRule.vue";
import MemberCardIndex from "../views/MemberCardIndex.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/member",
        name: "member",
        component: MemberView,
    },
    {
        path: "/member/member-list",
        name: "memberList",
        component: MemberList,
    },
    {
        path: "/member/member-list-detail",
        name: "MemberListDetail",
        component: MemberListDetail,
    },
    {
        path: "/member/member-point-rule",
        name: "MemberPointRule",
        component: MemberPointRule,
    },
    {
        path: "/member/member-card",
        name: "MemberCardIndex",
        component: MemberCardIndex,
    },
    // {
    //   path: "/member",
    //   name: "member",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ "../views/MemberView.vue"),
    // },
];

const router = new VueRouter({
    routes,
});

export default router;
