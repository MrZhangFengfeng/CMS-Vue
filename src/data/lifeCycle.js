export default [
    {
        label: "beforeCreate",
        tag: "挂载阶段还未开始",
        tagType: "info",
        detailDesc:
            "在实例初始化之后,进行数据侦听和事件/侦听器的配置之前同步调用。",
        businessDev: "$el、$data都是undefined，先啥也别干吧",
    },
    {
        label: "created",
        tag: "挂载阶段还未开始",
        tagType: "info",
        detailDesc:
            "实例创建完成后被立即同步调用。watch、computed、methods、事件/侦听器的回调函数已经被设置完毕。但是$el还是undefined，挂载还未开始。",
        businessDev: "发送首屏所需要的的请求",
    },
    {
        label: "beforeMount",
        tag: "挂载开始之前被调用",
        tagType: "warning",
        detailDesc: "在挂载开始之前被调用：相关的 render 函数首次被调用。",
        businessDev: "- -",
    },
    {
        label: "mounted",
        tag: "挂载阶段",
        tagType: "primary",
        detailDesc:
            "实例已经被挂载，但是不会保证所有的子组件也都被挂载完成。如果希望等到整个视图都渲染完毕再执行某些操作，可以在 mounted 内部使用 vm.$nextTick。this.$nextTick传入一个方法，在方法内执行具体操作，该方法仅在整个视图都被渲染之后才会执行。",
        businessDev: "可以访问到$ref，做出相关操作",
    },
    {
        label: "beforeUpdate",
        tag: "更新阶段",
        tagType: "success",
        detailDesc: "在数据发生改变后，DOM 被更新之前被调用。",
        businessDev:
            "现有 DOM 将要被更新之前访问它，比如移除手动添加的事件监听器。",
    },
    {
        label: "updated",
        tag: "更新阶段",
        tagType: "success",
        detailDesc:
            "在数据更改导致的虚拟 DOM 重新渲染和更新完毕之后被调用。尽量不要在这一步骤做更新操作，避免重复更新。如果要相应状态改变常最好使用 computed 或 watch。updated 不会保证所有的子组件也都被重新渲染完毕。如果希望等到整个视图都渲染完毕，可以在 updated 里使用 vm.$nextTick，this.$nextTick传入一个方法，在方法内执行具体操作，该方法仅在整个视图都被重新渲染之后才会执行。",
        businessDev: "通过computed或者watch进行关联数据或者动作的更新",
    },
    {
        label: "beforeDestroy",
        tag: "销毁阶段",
        tagType: "danger",
        detailDesc: "实例销毁之前调用。在这一步，实例仍然完全可用。",
        businessDev:
            "销毁定时器，解绑全局事件，销毁插件对象等。事件监听器会在destroyed阶段被自动移除，不需要手动处理",
    },
    {
        label: "destroyed",
        tag: "销毁阶段",
        tagType: "danger",
        detailDesc:
            "实例销毁后调用。该钩子被调用后，对应 Vue 实例的所有指令都被解绑，所有的事件监听器被移除，所有的子实例也都被销毁。",
        businessDev: "- -",
    },
];
