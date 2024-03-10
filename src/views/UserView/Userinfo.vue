<template>
    <div>
        <div style="height: 30px;background-color: beige; font-size: 20px;" @click="goback">
            <div style="margin-left: 10px;cursor: pointer;width: 100px;">
                <i class="el-icon-back"></i>
                <span>返回</span>
            </div>
        </div>
        <div style="margin-top: 1%;margin-left: 25%;">
            <el-card class="box-card" style="width: 700px;">
                <template #header>
                    <div class="card-header">
                        <h1>基本信息</h1>
                    </div>
                </template>
                <div class="infolist">
                    <div style="display: flex;justify-content: center;">
                        <el-avatar shape="square" :size="100" :src="require('@/assets/default-avatar.png')">
                        </el-avatar>
                    </div>
                    <div style="margin-top: 20px;display: flex;justify-content: center;">
                        <el-form label-width="80px">
                            <el-form-item label="账号:">
                                <el-input style="width: 200px;"></el-input>
                            </el-form-item>
                            <el-form-item label="密码:">
                                <el-input style="width: 200px;"></el-input>
                            </el-form-item>
                            <el-form-item label="姓名:">
                                <el-input style="width: 200px;"></el-input>
                            </el-form-item>
                            <el-form-item label="电话:">
                                <el-input style="width: 200px;"></el-input>
                            </el-form-item>
                        </el-form>
                    </div>
                </div>

                <div style="display: flex;justify-content: center;">
                    <el-button type="primary">编辑信息</el-button>
                    <!-- 弹出确认框 -->
                    <el-button type="danger" @click="logoutdiag = true">退出登陆</el-button>
                </div>
            </el-card>
        </div>
        <el-dialog :visible.sync="logoutdiag" title="Tips" width="30%">
            <span>是否确认退出登陆</span>
            <template #footer>
                <span class="dialog-footer">
                    <el-button type="primary" @click="logout">确认</el-button>
                    <el-button @click="logoutdiag = false" type="danger">取消</el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>

<script>
import store from '@/store';
export default {
    name: 'Userinfo',

    data() {
        return {
            logoutdiag: false,
        }
    },
    methods: {
        showlogoutdiag() {
        },
        logout() {
            console.log('退出登陆');
            //清除token
            localStorage.removeItem('token');
            this.$message({
                message: '退出成功',
                type: 'success'
            });
            //关闭弹窗
            this.logoutdiag = false;

            setTimeout(() => {
                //跳转首页
            location.href = '/';
            }, 1000);
            
            
        },
        goback() {
            this.$router.back();
        }
    },
    //组件路由守卫，未登录不允许访问
    beforeRouteEnter(to, from, next) {
        let token = localStorage.getItem('token');
        console.log('token:',token);
        if (token==undefined) {
            this.$message({
                message: '用户未登陆',
                type: 'error'
            });
            location.href = '/'
            return
        }
        //放行
        next();
    }
}
</script>

<style scped>
.box-card {
    align-items: center;
}

.infolist {
    margin-top: 20px;
}
</style>