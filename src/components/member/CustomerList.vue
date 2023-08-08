<template>
    <div>
        <el-card>
            <el-table
                ref="multipleTable"
                :data="customerList"
                tooltip-effect="dark"
                style="width: 100%"
                @selection-change="handleSelectionChange"
            >
                <el-table-column type="selection" width="55"> </el-table-column>
                <el-table-column label="顾客ID" width="120">
                    <template slot-scope="scope">{{ scope.row.cid }}</template>
                </el-table-column>
                <el-table-column prop="grade" label="会员等级" width="120">
                </el-table-column>
                <el-table-column
                    prop="count"
                    label="消费次数"
                    show-overflow-tooltip
                >
                </el-table-column>
                <el-table-column prop="price" label="笔单价"></el-table-column>
                <el-table-column prop="resource" label="来源"></el-table-column>
                <el-table-column
                    prop="tag"
                    label="状态"
                    width="100"
                    :filters="[
                        { text: '启用中', value: 'USE' },
                        { text: '未启用', value: 'UN_USE' },
                    ]"
                    :filter-method="filterTag"
                    filter-placement="bottom-end"
                >
                    <template slot-scope="scope">
                        <el-tag
                            :type="
                                scope.row.tag === 'USE' ? 'primary' : 'success'
                            "
                            disable-transitions
                            >{{ scope.row.tag }}</el-tag
                        >
                    </template>
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button
                            size="mini"
                            @click="handleEdit(scope.$index, scope.row)"
                            >详情</el-button
                        >
                        <el-button
                            size="mini"
                            type="primary"
                            @click="handleDelete(scope.$index, scope.row)"
                            >添加人群标签</el-button
                        >
                    </template>
                </el-table-column>
            </el-table>
            <div class="crowd-pageination">
                <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-sizes="pageSizeList"
                    :page-size="pageSize"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="customerList.length"
                >
                </el-pagination>
            </div>
        </el-card>
    </div>
</template>

<script>
// @ is an alias to /src
import mockData from "@/mock/member.js";

export default {
    name: "CustomerList",
    components: {},
    data: function () {
        return {
            resourceList: [],
            customerList: [],
            currentPage: 1,
            pageSize: 10,
            pageSizeList: [10, 20, 30, 40],
        };
    },
    mounted: function () {
        this.customerList = mockData.customerList;
    },
    methods: {},
};
</script>
<style scoped lang="scss">
.crowd-pageination {
    float: right;
    padding: 20px;
}
</style>
