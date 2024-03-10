<template lang="">
  <div>
      <div style="height: 30px;background-color: beige; font-size: 20px;" @click="goback">
            <div style="margin-left: 10px;cursor: pointer;width: 100px;">
                <i class="el-icon-back"></i>
                <span>返回</span>
            </div>
        </div>
        <div>

      <el-card class="box-card" shadow="always">
          <div style="font-size:20px">
              <span><i class="el-icon-user"></i>用户管理</span>
          </div>
          <div class="record-table">
              <template>
                  <el-table
                      :data="machineroom"
                      border
                      style="width: 100%">
                      <!-- 序号列 -->
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
                      align="center">

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
                              v-if="scope.row.status">操作</el-button>
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
  </div>
</template>

<script>
// import request from '@/api/request';

export default {
  data() {
    return {
      recordTableColumn: [{
        prop: 'userId',
        label: '用户账号',
      },
      {
        prop: 'username',
        label: '用户姓名',
      },
      {
        prop: 'role',
        label: '身份',
      },],
      currentPage: 1,
      tableData: [],
      userinfo: [],
    }
  },
  computed: {
    total() {
      return this.userinfo.length;
    }
  },
  methods: {
    goback() {
      this.$router.back();
    },
    //获取用户信息
    async getuserinfo() {
      
    },
    //页面改变
    pageChange() {
      console.log('当前页面', this.currentPage);
    },
    //点击下一页
    nextClick() {
      this.currentPage++;
    },
    //点击上一页
    prevClick() {
      this.currentPage--;
    }
  },
  created() {
  }
}
</script>

<style scoped>
.pagination {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
</style>