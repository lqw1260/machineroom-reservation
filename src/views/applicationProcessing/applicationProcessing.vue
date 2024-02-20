<template lang="">
    <div>
        <div>
        <el-card class="box-card" shadow="always">
            <div>
                <h3><i class="el-icon-tickets"></i>申请处理</h3>
                <p>共 <span>{{tableData.length}}</span> 条申请，剩余 <span>{{numOfNotProcesse}}</span> 条申请未处理</p>
            </div>
            <div class="record-table">
                <template>
                    <el-table
                        :data="tableData"
                        border
                        style="width: 100%"
                        @cell-click="cellClick">
                        <el-table-column
                        prop="serialNumber"
                        label="序号"
                        type="index"
                        width="60"
                        align="center">
                        </el-table-column>
                        <el-table-column 
                        v-for="record in recordTableColumn.slice(1,-2)" :key="record.prop"
                        :prop="record.prop"
                        :label="record.label"
                        table-layout='auto'
                        align="center"
                        >
                            <!-- <template slot-scope="scope" v-if="key==='operation'">
                                <el-button
                                size="mini"
                                @click="handleEdit(scope.$index, scope.row)">取消</el-button>
                            </template> -->
                        </el-table-column>
                        <el-table-column 
                        prop="appoinmentReason"
                        label="申请理由"
                        align="center"
                        table-layout='auto'
                        >
                            <template >
                                <p class="check-txt">查看</p>
                            </template>
                        </el-table-column>
                        <el-table-column 
                        prop="appoinmentStatus"
                        label="状态"
                        align="center">

                        </el-table-column>
                    </el-table>
                </template>
                <div class="pagination">
                    <el-pagination
                        layout="prev, pager, next"
                        :current-page="currentPage"
                        @current-change="pageChange"
                        @prev-click="prevClick"
                        @next-click="nextClick"
                        :total="total">
                    </el-pagination>
                </div>
            </div>
        </el-card>
        <el-dialog
        title="申请理由"
        :visible.sync="dialogVisible"
        width="30%">
            <span>{{currentApplication.appoinmentReason}}</span>
            <span slot="footer" class="dialog-footer" v-if="currentApplication.appoinmentStatus==='未处理'">
                <el-button @click="clickReject">驳 回</el-button>
                <el-button type="primary" @click="clickAgree">同 意</el-button>
            </span>
            <el-dialog
            width="30%"
            title="驳回意见"
            :visible.sync="innerVisible"
            append-to-body>
            <el-input type="textarea" v-model="rejectReason"></el-input>
            <span slot="footer" class="dialog-footer">
                <el-button @click="innerVisible=false">取消</el-button>
                <el-button type="primary" @click="sendRejection">确定</el-button>
            </span>
            </el-dialog>
        </el-dialog>
    </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            recordTableColumn:[{
                prop:'serialNumber',
                label:'序号',
            },{
                prop:'machineroomName',
                label:'预约机房',
            },{
                prop:'appoinmentWeek',
                label:'预约周数',
            },{
                prop:'appoinmentDate',
                label:'预约日期',
            },{
                prop:'startSection',
                label:'起始节数',
            },{
                prop:'endSection',
                label:'结束节数',
            },{
                prop:'appoinmentTime',
                label:'申请时间',
            },{
                prop:'applicant',
                label:'申请人'
            },{
                prop:'appoinmentReason',
                label:'申请理由'
            },{
                prop:'appoinmentStatus',
                label:'状态',
            },],
            currentPage:1,
            tableData:[],
            numOfNotProcesse:0,
            total:10,
            applications:[],
            dialogVisible:false,
            innerVisible:false,
            rejectReason:'',
            currentApplication:{

            }
        }
    },
    methods:{
        pageChange(){
            console.log(this.currentPage);
            this.tableData=[];
            this.tableData.push(...this.applications.slice((this.currentPage-1)*10,this.currentPage*10));
        },
        prevClick(){
            this.currentPage-=1;
            console.log("上一页");
        },
        nextClick(){
            this.currentPage+=1;
            console.log("下一页");
        },
        async getApplication(){
            let result = await this.$request.get('api/getApplication');
            if(result.data){
                this.applications.push(...result.data.applications);
                this.total=this.applications.length;
                this.tableData.push(...this.applications.slice(0,10));
            }
        },
        async agreeApplication(){
            let params={
                applicationId:this.currentApplication.applicationId
            }
            let result = await this.$request.get('api/agreeApplication',{params});
            
            if(result.code && result.code===200){
                this.$message({
                message: '已同意申请',
                type: 'success'
                });
            }
            else{
                this.$message.error('同意申请失败');
            }
            
        },
        async rejectApplication(){
            let params={
                applicationId:this.currentApplication.applicationId,
                rejectReason:this.rejectReason,
            }
            let result = await this.$request.get('api/rejectApplication',{params});
            if(result.code && result.code===200){
                this.$message({
                message: '已驳回申请',
                type: 'success'
                });
            }
            else{
                this.$message.error('驳回申请失败');
            }
        },
        cellClick(row,column){
            // console.log(column);
            if(column.property==='appoinmentReason'){
                console.log(111);
                console.log(row.applicationId);
                this.dialogVisible=true;
                Object.assign(this.currentApplication,row);
            }
        },
        clickReject(){
            console.log('点击拒绝');
            this.innerVisible=true;
        },
        clickAgree(){
            console.log('点击同意');
            this.agreeApplication()
        },
        sendRejection(){
            this.rejectApplication();
        },
    },
    created() {
        this.getApplication();
    },
}
</script>
<style lang="less" scoped>
.box-card{
    margin-top: 20px;
    h3{
        font-size: 20px;
        // font-weight: 600;
        i{
            font-size: 35px;
            margin: 0 10px;
        }
    }
    p{
        font-size: 20px;
        padding: 10px 15px;
        span{
            color: rgb(8, 88, 187);
        }
    }
    .record-table{
        margin: 10px 0;
        .check-txt{
            font-size: 14px;
            font-style: italic;
            text-decoration: underline;
        }
    }
    .pagination{
        display: flex;
        justify-content: center;
        padding: 20px 0 0;
    }
}
</style>