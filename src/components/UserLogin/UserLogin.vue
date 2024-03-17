<template lang="">
  <div class="login">
    <img src="@/assets/default-avatar.png" alt="" @click="handleClick" />
    <template v-if="!$store.state.token">
      <span>未登录</span>
    </template>
    <template v-else>
      <span>{{ $store.state.user.realName }}</span>
    </template>

    <el-dialog title="系统登录" :visible.sync="isopen" width="40%">
      <el-form :model="form" :rules="rules">
        <el-form-item
          label="账号"
          :label-width="formLabelWidth"
          :required="true"
          prop="account"
        >
          <el-input v-model="form.account" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          label="密码"
          :label-width="formLabelWidth"
          :required="true"
          prop="password"
        >
          <el-input
            v-model="form.password"
            autocomplete="off"
            type="password"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="formSubmit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
// import request from '@/api/request'
// import {asnycRoute} from '@/router/router'
export default {
  data() {
    return {
      form: {
        account: "", //账号
        password: "", //密码
      },
      dialogFormVisible: false, //是否展示对话框
      formLabelWidth: "120px",
      //表单验证规则
      rules: {
        account: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 8, message: "长度在 3 到 8 个字符", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          {
            min: 6,
            max: 16,
            message: "长度在 6 到 16 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  computed: {
    isopen() {
      return this.dialogFormVisible && !this.$store.state.token;
    },
  },
  methods: {
    handleClick() {
      this.dialogFormVisible = true;
    },
    async formSubmit() {
      //发送请求
      const result = await this.$request
        .post("/api/login-service/doLogin", this.form)
        .catch(() => {
          //获取失败的情况
          this.form.account = "";
          this.form.password = "";
        });
      //获取token并保存到本地
      if (result.data) {
        let { tokenValue, tokenName } = result.data;
        // console.log(result.data);
        localStorage.setItem("token", tokenValue);
        localStorage.setItem("tokenName", tokenName);
        this.$store.commit("setToken", tokenValue);
        this.$store.commit("setTokenName", tokenName);
        this.$store.commit("updateUserInfo", result.data);
        // 更新用户信息

        const userInfo = await this.$request.get(
          "/api/common-service/getUserInfoByAccount",
          { params: { account: this.form.account } }
        );
        this.$store.commit("updateUserInfo", userInfo.data);
        localStorage.setItem("account", this.form.account);
        this.$nextTick(() => {
          this.form.account = "";
          this.form.password = "";
          this.dialogFormVisible = false;
        });
      }
    },
  },
};
</script>
<style lang="less">
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 80%;
  // background-color: #fff;
  img {
    display: inline;
    width: 40px;
    border-radius: 50%;
  }
  span {
    margin: 0 15px;
    size: 28px;
  }
  .el-input__inner {
    width: 80%;
  }
}
</style>
