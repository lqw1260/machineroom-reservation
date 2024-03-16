<template lang="">
    <div>
        <el-card class="box-card" shadow="always">
            <div>
                <h3><i class="el-icon-tickets"></i>预约记录</h3>
            </div>
            <div class="record-table">
                <template>
                    <el-table
                        :data="tableData"
                        border
                        style="width: 100%">
                        <el-table-column
                        prop="serialNumber"
                        label="序号"
                        type="index"
                        width="60"
                        align="center">
                        </el-table-column>
                        <el-table-column 
                        v-for="record in recordTableColumn" :key="record.prop"
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
                        prop="operation"
                        label="操作"
                        align="center"
                        >
                            <template slot-scope="scope">
                                <el-button
                                size="mini"
                                style="background-color: rgb(42, 41, 41);color: #fff"
                                @click="handleEdit(scope.$index, scope.row)"
                                v-if="scope.row.operation!=='\\'">取消</el-button>
                                <div v-else>\</div>
                            </template>
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
    </div>
</template>
<script>
let status = {
    "0":"待审核",
    "1":"同意",
    "2":"拒绝",
    "3":"用户取消"
}
function handler(items) {  
    let obj = "一二三四五六七八九"
    items.forEach(item => {  
        const orderDayStr = item.orderDay.toString();  
        const weekAndDay = orderDayStr.slice(-4); // 获取后四位，表示周数和星期几  
        const week = parseInt(weekAndDay.slice(0, 2), 10); // 周数  
        const day = parseInt(weekAndDay.slice(2), 10); // 星期几  
        item.appoinmentWeek = week;
        item.appoinmentDate = "星期" + obj[day-1];

        if(item.orderStatus === 1){
            item.operation = "取消"
        }
        else{
            item.operation = '\\'
        }
        item.status = status[item.orderStatus]
    });  
      
}  

export default {
    data() {
      return {
        recordTableColumn:[{
            prop:'orderJfCode',
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
            prop:'orderDate',
            label:'申请时间',
        },{
            prop:'status',
            label:'状态',
        },],
        // {
        //     prop:'operation',
        //     label:'操作'
        // }
        currentPage:1,
        tableData: [],
        records:[],
        total:10,
      }
    },
    methods:{
        async getAppointmentRecord(){
            let result = await this.$request.get('api/common-service/queryOrderInfoList/'+ this.$store.state.user.account);
            handler(result.data)
            if(result.data){
                this.records.push(...result.data);
                this.total=this.records.length;
                this.tableData.push(...this.records.slice(0,10));
            }
        },
        async cancelAppoinment(){
            
        },
        open2() {
            this.$message({
            message: '取消成功',
            type: 'success'
            });
        },
        open4() {
            this.$message.error('取消失败');
        },
        
        async handleEdit(index,row) {
            console.log(row.recordId);
            // let result = await this.$request.get('api/cancelAppoinment',{params:{recordId:row.recordId}});
            let result = await this.$request.put('api/user-service/cancelApplication/'+row.id);
            if(result.code && result.code===200){
                this.open2();
                row.status = status[3]
                row.operation = '\\'
            }
            else{
                this.open4();
            }

        },
        pageChange(){
            console.log(this.currentPage);
            this.tableData=[];
            this.tableData.push(...this.records.slice((this.currentPage-1)*10,this.currentPage*10));
        },
        prevClick(){
            this.currentPage-=1;
            console.log("上一页");
        },
        nextClick(){
            this.currentPage+=1;
            console.log("下一页");
        }
    },
    created(){
        this.getAppointmentRecord();
    }
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
    .record-table{
        margin: 10px 0;
    }
    .pagination{
        display: flex;
        justify-content: center;
        padding: 20px 0 0;
    }
}
</style>