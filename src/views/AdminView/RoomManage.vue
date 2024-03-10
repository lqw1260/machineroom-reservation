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
              <span><i class="el-icon-s-platform"></i>机房管理</span>
          </div>
          <div class="record-table">
              <template>
                  <el-table
                      :data="machineroom"
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
                              @click="handleEdit(scope.row)"
                              >操作</el-button>
                              
                          </template>
</el-table-column>
</el-table>
</template>

<div class="pagination">
  <el-pagination layout="prev, pager, next" :current-page="currentPage" @current-change="pageChange"
    @prev-click="prevClick" @next-click="nextClick" :total="total">
  </el-pagination>
</div>
</div>
</el-card>
</div>
<!-- 编辑机房弹窗 -->
<el-dialog title="编辑机房" :visible.sync="Editdialog" width="50%" :before-close="handleClose">
  <div>
    <el-form ref="form" :model="roomform" label-width="80px">
      <el-form-item label="机房id :">
        <el-input v-model="roomform.machineroomId" disabled style="width:50%"></el-input>
      </el-form-item>
      <el-form-item label="机房名称 :">
        <el-input v-model="roomform.name" style="width:50%"></el-input>
      </el-form-item>
      <el-form-item label="管理员 :">
        <el-input v-model="roomform.admin" style="width:50%"></el-input>
      </el-form-item>
      <el-form-item label="机房状态 :">
        <el-radio v-model="roomform.status" label="使用中">使用中</el-radio>
        <el-radio v-model="roomform.status" label="暂停使用">暂停使用</el-radio>
      </el-form-item>
    </el-form>
  </div>
  <span slot="footer" class="dialog-footer">
    <el-button @click="Editdialog=false">取 消</el-button>
    <el-button type="primary" @click="editroom">确 定</el-button>
  </span>
</el-dialog>


</div>
</template>

<script>
export default {
  data() {
    return {
      recordTableColumn: [{
        prop: 'machineroomId',
        label: '机房id',
      },
      {
        prop: 'name',
        label: '机房名称',
      },
      {
        prop: 'admin',
        label: '管理员',
      }, {
        prop: 'features',
        label: '特点',
      }, {
        prop: 'status',
        label: '状态',
      },],
      currentPage: 1,
      tableData: [],  //表格数据
      machineroom: [], //机房信息
      Editdialog: false, //编辑弹窗
      roomform:{},  //当前机房信息
    }
  },
  computed: {
    total() {
      return this.machineroom.length;
    }
  },
  methods: {
    goback() {
      this.$router.back();
    },
    async getMachineroomInfo() {
      let result = await this.$request.get('api/getMachineroom');
      if (result.data) {
        console.log('获取机房信息', result.data);
        this.machineroom.push(...result.data.machineroom);
        for (let i of this.machineroom) {
          this.$set(i, 'firstFeature', []);
          this.$set(i, 'secondFeature', []);
          this.$set(i, 'status', '使用中')
          i.firstFeature.push('machineroomFeature', i.features[0]);//机房特点样式
          i.secondFeature.push('machineroomFeature', i.features[1]);
        }
      }
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
    },
    //编辑机房
    handleEdit(val) {
      this.Editdialog = true;
      console.log(val);
      this.roomform = val;
    },
    //编辑机房提交
    editroom() {
      //可以直接发送request请求 修改机房信息
      this.$message({
          message: '修改成功',
          type: 'success'
        });
      //关闭弹窗
      this.Editdialog = false;
    }
  },
  created() {
    this.getMachineroomInfo();
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