<<<<<<< HEAD
<template lang="">
    <div class="login">
        <img src="@/assets/default-avatar.png" alt="" @click = "handleClick">
        <template v-if="!$store.state.token">
            <span>未登录</span>
        </template>
        <template v-else>
            <span>{{$store.state.user.name}}</span>
        </template>

        <el-dialog title="系统登录" :visible.sync="isopen" width="40%">
            <el-form :model="form" :rules="rules">
                <el-form-item label="账号" :label-width="formLabelWidth" :required="true" prop="username">
                    <el-input v-model="form.username" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" :label-width="formLabelWidth" :required="true" prop="password">
                    <el-input v-model="form.password" autocomplete="off" type="password"></el-input>
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
    data(){
        return{
            form: {
                username: '',//账号
                password: '',//密码
            },
            dialogFormVisible: false,//是否展示对话框
            formLabelWidth: '120px',
            //表单验证规则
            rules: {
                username: [
                    { required: true, message: '请输入活动名称', trigger: 'blur' },
                    { min: 3, max: 8, message: '长度在 3 到 8 个字符', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入活动名称', trigger: 'blur' },
                    { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
                ],
            }
        }
        
    },
    computed: {
        isopen(){
            return this.dialogFormVisible && !this.$store.state.token;
        }
    },
    methods: {
        handleClick() {
            this.dialogFormVisible = true
        },
        async formSubmit(){
            //发送请求
            const result = await this.$request.post('/api/login',{data:this.form}).catch(()=>{
                //获取失败的情况
                this.form.username=''
                this.form.password=''
            })
            //获取token并保存到本地
            if(result.data){
                let { token } = result.data;
                localStorage.setItem('token',token);
                this.$store.commit('setToken',token);
                // 更新用户信息
                const userInfo = await this.$request.post('/api/getUserInfo',{data:{token}});
                this.$store.commit('updateUserInfo',userInfo.data);

                this.$nextTick(()=>{
                    this.form.username=''
                    this.form.password=''
                    this.dialogFormVisible = false
                })
            }
            
        }
    }
}
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
=======
<template lang="">
    <div class="login">
        <div style="display:flex;align-items:center" >
            <img src="@/assets/default-avatar.png" alt="" @click = "handleClick">
            <div>
                <template v-if="!$store.state.token" >
                    <span @click = "handleClick">未登录</span>
                </template>
                <template v-else>
                    <span @click="gotouserinfo" style="cursor: pointer;">{{$store.state.user.name}}</span>
                </template>
            </div>
        </div>

        <!-- 登陆窗口 -->
        <el-dialog title="系统登录" :visible.sync="isopen" width="40%">
            <el-form :model="form" :rules="rules">
                <el-form-item label="账号" :label-width="formLabelWidth" :required="true" prop="username">
                    <el-input v-model="form.username" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" :label-width="formLabelWidth" :required="true" prop="password">
                    <el-input v-model="form.password" autocomplete="off" type="password"></el-input>
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
                username: '',//账号
                password: '',//密码
            },
            dialogFormVisible: false,//是否展示对话框
            formLabelWidth: '120px',
            //表单验证规则
            rules: {
                username: [
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                    { min: 3, max: 8, message: '长度在 3 到 8 个字符', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
                ],
            }
        }

    },
    computed: {
        isopen() {
            return this.dialogFormVisible && !this.$store.state.token;
        }
    },
    methods: {
        handleClick() {
            this.dialogFormVisible = true
        },
        gotouserinfo() {
            this.$router.push('/userinfo');
        },
        async formSubmit() {
            //发送请求
            const result = await this.$request.post('/api/login', { data: this.form }).catch(() => {
                //获取失败的情况
                this.form.username = ''
                this.form.password = ''
            })
            //获取token并保存到本地
            if (result.data) {
                this.$message({
                    message: '登陆成功',
                    type: 'success'
                });
                let { token } = result.data;
                localStorage.setItem('token', token);
                this.$store.commit('setToken', token);
                // 更新用户信息
                const userInfo = await this.$request.post('/api/getUserInfo', { data: { token } });
                this.$store.commit('updateUserInfo', userInfo.data);

                this.$nextTick(() => {
                    this.form.username = ''
                    this.form.password = ''
                    this.dialogFormVisible = false
                })
            }

        }
    }
}
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
>>>>>>> c6dff60 (完善页面)
</style>