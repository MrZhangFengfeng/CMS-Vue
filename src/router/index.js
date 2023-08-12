import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import DemoView from "../views/DemoView.vue";
import LifeCycleView from "../views/demo/LifeCycleView.vue";
import MemberView from "../views/MemberView.vue";
import MemberList from "../views/MemberList.vue";
import MemberListDetail from "../views/MemberListDetail.vue";
import MemberPointRule from "../views/MemberPointRule.vue";
import MemberCardIndex from "../views/MemberCardIndex.vue";
import MemberCardEdit from "../views/MemberCardEdit.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/demo",
        name: "demo",
        component: DemoView,
    },
    {
        path: "/demo/life-cycle",
        component: LifeCycleView,
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
    {
        path: "/member/member-card/edit",
        name: "MemberCardEdit",
        component: MemberCardEdit,
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
