<template>
    <div>
        <CustomerListQuery />

        <CustomerList />
    </div>
</template>

<script>
// @ is an alias to /src
import CustomerListQuery from "@/components/member/CustomerListQuery.vue";
import CustomerList from "@/components/member/CustomerList.vue";

export default {
    name: "MemberList",
    components: {
        CustomerListQuery,
        CustomerList,
    },
    data: function () {
        return {};
    },
    mounted: function () {},
};
</script>
<style scoped lang="scss"></style>
