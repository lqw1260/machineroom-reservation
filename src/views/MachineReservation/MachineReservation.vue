<template lang="">
    <div >
        <div class="content-header">
             <el-button 
             type="success" 
             round 
             class="reservate-button">
             快速预约</el-button>
            </div>
        <el-card class="box-card">
            <p>预约记录</p>
            <template>
                <el-table
                    :data="tableData"
                    style="width: 100%"
                    :default-sort = "{prop: 'date', order: 'descending'}"
                    >
                    <el-table-column
                    prop="date"
                    label="日期"
                    sortable
                    width="180">
                    </el-table-column>
                    <el-table-column
                    prop="name"
                    label="姓名"
                    sortable
                    width="180">
                    </el-table-column>
                    <el-table-column
                    prop="address"
                    label="地址"
                    :formatter="formatter">
                    </el-table-column>
                </el-table>
            </template>
        </el-card>
        <el-card class="box-card" >
            <el-row v-for="(o) in 3" :key="o">
                <el-col :span="6" v-for="(o, index) in 3" :key="o" :offset="index > 0 ? 2 : 0">
                    <el-card :body-style="{ padding: '0px' }">
                        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
                        <div style="padding: 14px;">
                            <span>好吃的汉堡</span>
                            <div class="bottom clearfix">
                            <time class="time">{{ currentDate }}</time>
                            <el-button type="text" class="button">操作按钮</el-button>
                            </div>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
        </el-card>
    </div>
</template>
<script>
export default {
    name:'machineReservation',
    data() {
      return {
        currentDate: new Date(),
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
    methods: {
      formatter(row) {
        return row.address;
      }
    }
}
</script>
<style lang="less">
.content-header{
    display: flex;
    justify-content: flex-end;
    width: 100%;
    .reservate-button {
        // float: right;
        padding: 16px 30px;
        margin: 5px 20px;
        background-color: #00aa00;
    }
}
.el-card {
    margin: 25px 0;
}
.time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>