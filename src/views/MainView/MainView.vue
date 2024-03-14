<template lang="">
    <div>
        <div class = "card">
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <i class="el-icon-tickets myicon"></i>
                    <span>通知</span>
                </div>
                <div v-for="item in notification" :key="item.notificationId" class="text item msg">
                    <i class="itembefore"></i>
                    {{item.title }}
                    <span style="float:right">{{item.time}}</span>
                </div>
            </el-card>
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <i class="el-icon-bell myicon"></i>
                    <span>消息</span>
                </div>
                <div v-for="item in message" :key="item.notificationId" class="text item msg">
                    <i class="itembefore"></i>
                    {{item.title }}
                    <span style="float:right">{{item.time}}</span>
                </div>
            </el-card>
        </div>

        <el-card class="box-card reserve">
            <div slot="header" class="clearfix">
                <i class="el-icon-office-building myicon"></i>
                <span>机房展示</span>
            </div>
            <div class = "reserveForm">
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                    <el-form-item label="所属楼栋">
                        <el-input v-model="formInline.buildingNum" placeholder="所属楼栋" style="width:180px;"></el-input>
                    </el-form-item>
                    <el-form-item label="机房类型">
                        <el-select v-model="formInline.machineroomType" placeholder="机房类型" style="width:180px;">
                        <el-option label="类型1" value="001"></el-option>
                        <el-option label="类型2" value="002"></el-option>
                        <el-option label="类型3" value="003"></el-option>
                        <el-option label="类型4" value="004"></el-option>
                        <el-option label="类型5" value="005"></el-option>
                        <el-option label="类型6" value="006"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="特殊要求">
                        <el-select v-model="formInline.specialRequirements" placeholder="特殊要求" style="width:100px;">
                        <el-option label="无" value="none"></el-option>
                        <el-option label="要求1" value="req1"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="info" @click="seachMachineroom">
                            <i class="el-icon-search"></i>
                            查询
                        </el-button>
                    </el-form-item>
                    <el-form-item label="预约周数">
                        <!-- <el-input v-model="formInline.weekNum" placeholder="第一周" style="width:100px;"></el-input> -->
                        <el-select v-model="formInline.weekNum" placeholder="第一周" style="width:100px;">
                        <el-option label="第一周" value="1"></el-option>
                        <el-option label="第二周" value="2"></el-option>
                        <el-option label="第三周" value="3"></el-option>
                        <el-option label="第四周" value="4"></el-option>
                        <el-option label="第五周" value="5"></el-option>
                        <el-option label="第六周" value="6"></el-option>
                        <el-option label="第七周" value="7"></el-option>
                        <el-option label="第八周" value="8"></el-option>
                        <el-option label="第九周" value="9"></el-option>

                        </el-select>
                    </el-form-item>
                    <el-form-item label="预约日期">
                        <el-select v-model="formInline.dayOfWeek" placeholder="星期一" style="width:100px;">
                        <el-option label="星期一" value="1"></el-option>
                        <el-option label="星期二" value="2"></el-option>
                        <el-option label="星期三" value="3"></el-option>
                        <el-option label="星期四" value="4"></el-option>
                        <el-option label="星期五" value="5"></el-option>
                        <el-option label="星期六" value="6"></el-option>
                        <el-option label="星期日" value="7"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="起始节数">
                        <el-select v-model="formInline.beginSection" placeholder="第节" style="width:100px;">
                        <el-option label="第一节" value="1"></el-option>
                        <el-option label="第二节" value="2"></el-option>
                        <el-option label="第三节" value="3"></el-option>
                        <el-option label="第四节" value="4"></el-option>
                        <el-option label="第五节" value="5"></el-option>
                        <el-option label="第六节" value="6"></el-option>
                        <el-option label="第七节" value="7"></el-option>
                        <el-option label="第八节" value="8"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="结束节数">
                        <el-select v-model="formInline.endSection" placeholder="第一节" style="width:100px;">
                        <el-option label="第一节" value="1"></el-option>
                        <el-option label="第二节" value="2"></el-option>
                        <el-option label="第三节" value="3"></el-option>
                        <el-option label="第四节" value="4"></el-option>
                        <el-option label="第五节" value="5"></el-option>
                        <el-option label="第六节" value="6"></el-option>
                        <el-option label="第七节" value="7"></el-option>
                        <el-option label="第八节" value="8"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="info" @click="quickReserve">
                            <i class="el-icon-edit"></i>
                            快速预约
                        </el-button>
                    </el-form-item>
                </el-form>
            </div>
            <el-card class="box-card " >
                <!-- <el-row v-for="o in 2" :key="o" :gutter="20" style="padding-block: 10px">
                    <el-col :span="6" v-for="item in  4" :key="item">
                        <el-card :body-style="{ padding: '0px' }" >
                            <el-image style="width: 100%;" :src="roomImg"></el-image>
                            <div style="padding: 14px;">
                                <span>B7 137</span>
                                <br>
                                <span>容纳人数 ： 80</span>
                            </div>
                        </el-card>
                    </el-col>
                </el-row> -->
                <div class="machineroomCard">
                    <div v-for="item in machineroom" :key=item.machineroomId  style="width:20%;margin:10px 20px">
                        <el-card :body-style="{ padding: '0px' }" >
                            <el-image style="width: 100%;" :src="roomImg" @click = jumpToCheck(item)></el-image>
                            <div style="padding: 14px;">
                                <span>{{item.name}}</span>
                                <span style="float:right" :class="item.firstFeature">{{features[item.features[1]]}}</span>
                                <span style="float:right" :class="item.secondFeature">{{features[item.features[2]]}}</span>
                                <br>
                                <span>{{item.admin}}</span>
                                <span style="float:right" class="machineroomFeature clickReserve" @click="clickReserve(item)">点击预约</span>
                            </div>
                        </el-card>
                    </div>
                </div>
            </el-card>
        </el-card>
        <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            width="30%">
            <h4>预约推荐</h4>
            <p>根据您的需求，结合历史预约数据，推荐预约的机房为：</p>
            <el-card :body-style="{ padding: '0px' }" >
                <el-image style="width: 100%;" :src="roomImg"></el-image>
                <div style="padding: 14px;">
                    <span>{{quickRoom.name}}</span>
                    <span style="float:right" :class="quickRoom.firstFeature">{{features[quickRoom.features[1]]}}</span>
                    <span style="float:right" :class="quickRoom.secondFeature">{{features[quickRoom.features[2]]}}</span>
                    <br>
                    <span>{{quickRoom.admin}}</span>
                </div>
            </el-card>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="sendQuickRequest">确 定</el-button>
            </span>
        </el-dialog>
        
        <el-dialog
        title="提示"
        :visible.sync="reserveDialog"
        width="30%">
        <el-form ref="form" :model="reserveRoom" label-width="80px">
            <el-form-item label="机房名称">
                <el-input v-model="reserveRoom.name" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="预约周数">
                <!-- <el-input v-model="formInline.weekNum" placeholder="第一周" style="width:100px;"></el-input> -->
                <el-select v-model="reserveRoom.weekNum" placeholder="第一周" style="width:100px;">
                    <el-option label="第一周" value="1"></el-option>
                    <el-option label="第二周" value="2"></el-option>
                    <el-option label="第三周" value="3"></el-option>
                    <el-option label="第四周" value="4"></el-option>
                    <el-option label="第五周" value="5"></el-option>
                    <el-option label="第六周" value="6"></el-option>
                    <el-option label="第七周" value="7"></el-option>
                    <el-option label="第八周" value="8"></el-option>
                    <el-option label="第九周" value="9"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="预约日期">
                <el-select v-model="reserveRoom.dayOfWeek" placeholder="星期一" style="width:100px;">
                <el-option label="星期一" value="1"></el-option>
                <el-option label="星期二" value="2"></el-option>
                <el-option label="星期三" value="3"></el-option>
                <el-option label="星期四" value="4"></el-option>
                <el-option label="星期五" value="5"></el-option>
                <el-option label="星期六" value="6"></el-option>
                <el-option label="星期日" value="7"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="起始节数">
                <el-select v-model="reserveRoom.beginSection" placeholder="第节" style="width:100px;">
                <el-option label="第一节" value="1"></el-option>
                <el-option label="第二节" value="2"></el-option>
                <el-option label="第三节" value="3"></el-option>
                <el-option label="第四节" value="4"></el-option>
                <el-option label="第五节" value="5"></el-option>
                <el-option label="第六节" value="6"></el-option>
                <el-option label="第七节" value="7"></el-option>
                <el-option label="第八节" value="8"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="结束节数">
                <el-select v-model="reserveRoom.endSection" placeholder="第一节" style="width:100px;">
                <el-option label="第一节" value="1"></el-option>
                <el-option label="第二节" value="2"></el-option>
                <el-option label="第三节" value="3"></el-option>
                <el-option label="第四节" value="4"></el-option>
                <el-option label="第五节" value="5"></el-option>
                <el-option label="第六节" value="6"></el-option>
                <el-option label="第七节" value="7"></el-option>
                <el-option label="第八节" value="8"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="申请原因">
                <el-input type="textarea" v-model="reserveRoom.reason"></el-input>
            </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
            <el-button @click="reserveDialog = false">取 消</el-button>
            <el-button type="primary" @click="sendRequest">确 定</el-button>
        </span>
        </el-dialog>
    </div>
</template>
<script>
import roomImg from '@/assets/machineroomImg/u53.png' //el-image用不了相对地址，暂时先引用
export default {
    data() {
      return {
        formInline: {
          buildingNum:'',
          machineroomType:'',
          specialRequirements:'none',
          weekNum:'1',
          dayOfWeek:'1',
          beginSection:'1',
          endSection:'1',
        },
        notification:[],
        message:[],
        machineroom:[],
        roomImg,
        // machineroomFeature:['machineroomFeature'],
        features:{
            largeMargin:'余量大',
            middleMargin:'余量中',
            smallMargin:'余量小',
            noMargin:'不可预约',
            bigRoom:'大机房',
            middleRoom:'中机房',
            smallRoom:'小机房'

        },
        dialogVisible:false,//快速预约框
        reserveDialog:false,
        quickRoom:{
            imgSrc: '',
            machineroomId: '',
            name: '',
            admin: '',
            features: [], //返回特征的编号，写死在前端
            firstFeature:['machineroomFeature'],
            secondFeature:['machineroomFeature'],
        },
        reserveRoom:{
          machineroomId:'',
          name:'',
          specialRequirements:'none',
          weekNum:'1',
          dayOfWeek:'1',
          beginSection:'1',
          endSection:'1',
          reason:''
        },
      }
    },
    methods: {
      async quickReserve() {
        let result = await this.$request.get('api/quickReserve');
        this.dialogVisible=true;
        if(result.data){
            Object.assign(this.quickRoom,result.data);
            this.quickRoom.firstFeature.push(result.data.features[1]);
            this.quickRoom.secondFeature.push(result.data.features[2]);
        }
      },
      async getNotification(){
        let result = await this.$request.get('api/getNotification');
        if(result.data){
            this.notification.push(...result.data.notification);
        }
        // console.log(this.notification);
      },
      async getMessage(){
        let result = await this.$request.get('api/getMessage');
        if(result.data){
            this.message.push(...result.data.message);
        }
        // console.log(this.message);
      },
      async getMachineroomInfo(){
        let result = await this.$request.get('api/getMachineroom');
        if(result.data){
            this.machineroom.push(...result.data);
            for(let i of this.machineroom){
                this.$set(i,'firstFeature',[]);
                this.$set(i,'secondFeature',[]);
                i.firstFeature.push('machineroomFeature',i.features[1]);//机房特点样式
                i.secondFeature.push('machineroomFeature',i.features[2]);
            }
        }
        console.log(this.machineroom);
      },
      async showNotification(){

      },
      async showMessage(){

      },
      async seachMachineroom(){
        let result = await this.$request.post('api/seachMachineroom',{data:this.formInline});
        if(result.data){
            //清空machineroom
            this.machineroom = [];
            this.machineroom.push(...result.data.machineroom);
            for(let i of this.machineroom){
                this.$set(i,'firstFeature',[]);
                this.$set(i,'secondFeature',[]);
                i.firstFeature.push('machineroomFeature',i.features[0]);//机房特点样式
                i.secondFeature.push('machineroomFeature',i.features[1]);
            }
        }
      },
      clickReserve(item){
        console.log(item);
        this.reserveDialog=true;
        Object.assign(this.reserveRoom,this.formInline);
        this.reserveRoom.name = item.name;
        this.reserveRoom.machineroomId = item.machineroomId
      },
      async reserveMachineroom(room){
        let m_room = {};
        m_room.orderJfCode = room.name;
        m_room.weekNum = room.weekNum;
        m_room.dayOfWeek = room.dayOfWeek;
        m_room.startSection = room.beginSection;
        m_room.endSection = room.endSection;
        m_room.applyReason = room.reason;
        console.log(m_room);

        let result = await this.$request.post('api/reserveMachineroom',{data:m_room});
        if(result.code && result.code===200){
            this.$message({
            message: '已发送请求',
            type: 'success'
            });
        }
      },
      sendRequest(){
        this.reserveMachineroom(this.reserveRoom);
      },
      sendQuickRequest(){
        this.reserveMachineroom(this.quickRoom);
      },
      jumpToCheck(item){
        console.log(item.machineroomId);
        //获取点击的机房信息，然后跳转到预约页面
        this.$router.push({
            name:'showReservationStatus',
            query:{
                item:item,
            }
        })
      },
      
    },

    
    created(){
        this.getMachineroomInfo();
        this.getMessage();
        this.getNotification();
    }
}
</script>
<style lang = "less" scoped>
.card {
    display: flex;
    width: 100%;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    .box-card{
        width: 45%;
        margin-top: 10px;
    }
}
.myicon{
    font-size: 30px;
}
.itembefore{
    display: inline-block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: rgb(31, 145, 239);
    translate: -12px;
    box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, .2);
}
.msg{
    border-bottom: 1px solid rgb(168, 167, 167);
}


.reserve{
    width: 100%;
    margin-top: 20px;
}

.reserveForm{
    height: 120px;
    margin: 30px 20px;
    padding:25px 10px;
    border: 1px solid rgb(0,0,0);
    border-radius: 20px;
}

.machineroomCard{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    

}
.machineroomFeature{
        font-size: 10px;
        color:#fff;
        margin: 0 3px;
        padding: 2px 4px;
        // border: 1px solid #ccc;
        border-radius: 2px;
    }
    .bigRoom{
        background-color: rgb(67, 66, 66);
    }
    .middleRoom{
        background-color: rgb(113, 110, 110);
    }
    .smallRoom{
        background-color: rgb(151, 148, 148);
    }
    .largeMargin{
        background-color: rgb(48, 183, 48);
    }
    .middleMargin{
        background-color: rgb(221, 164, 57);
    }
    .smallMargin{
        background-color: rgb(210, 132, 145);
    }
    .noMargin{
        background-color: rgb(144, 6, 6);
    }
    .clickReserve{
        background-color: #f49e09;
    }
</style>