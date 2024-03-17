<template>
  <div>
    <el-card shadow="always" class="bodyStyle">
      <div style="margin: 10px 0">
        <i class="el-icon-s-home" style="font-size: 40px; padding: 0 5px"></i>
        <span style="font-size: 25px; padding: 0 5px">{{ item.name }}</span>
        <span :class="item.firstFeature">{{ features[item.features[1]] }}</span>
        <span :class="item.secondFeature">{{
          features[item.features[2]]
        }}</span>
        <el-button type="info" class="leaveMessage">
          <i class="el-icon-message"></i>
          留言反馈
        </el-button>
      </div>
      <div>
        查看周数
        <el-select
          v-model="weekNumber"
          placeholder="请选择"
          @change="weekSelect"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div class="reserveCard">
        <div>
          <template>
            <el-table
              :data="tableData"
              border
              style="width: 711px; margin: 10px 0px"
              @cell-click="cellClick"
              :cell-class-name="hasCourse"
            >
              <el-table-column
                v-for="o in 9"
                :key="o"
                :prop="tableCol[o - 1]"
                :label="tableColLabel[o - 1]"
                :width="tableColWidth[o - 1]"
              >
              </el-table-column>
            </el-table>
          </template>
        </div>
        <div class="machineroomInfo">
          <h4>机房信息 <span class="roomStatus">开放中</span></h4>
          <div class="info">
            <p>设备数量：{{ roomInfo.computerNumbers }}</p>
            <p>管理员: {{ item.admin }}</p>
            <!-- <p>管理员联系方式：{{ roomInfo.adminContact}}</p> -->
            <p>机房简介:&nbsp;{{ roomInfo.introduction }}</p>
          </div>
        </div>
        <div class="reservationStatus">
          <h4>预约情况</h4>
          <div class="info" v-if="!!periodCourseInfo.courseName">
            <p>课程名称:&nbsp;&nbsp;{{ periodCourseInfo.courseName }}</p>
            <p>课程教师:&nbsp;&nbsp;{{ periodCourseInfo.teacher }}</p>
            <p>申请人:&nbsp;&nbsp;{{ periodCourseInfo.applicant }}</p>
            <p>申请时间段:&nbsp;&nbsp;{{ periodCourseInfo.period }}</p>
            <p>
              申请人联系方式:&nbsp;&nbsp;{{ periodCourseInfo.applicantContact }}
            </p>
          </div>
          <div v-else class="noCourse">
            <p>请选中时间段查看</p>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>
<script>
function createScheduleArray(items) {
  const scheduleArray = Array(11)
    .fill(0)
    .map(() => Array(9).fill(0)); // 初始化11x9的二维数组，所有值为0

  items.forEach((item) => {
    const orderDayStr = item.orderDay.toString();
    const weekAndDay = orderDayStr.slice(-4); // 获取后四位，表示周数和星期几
    // const week = parseInt(weekAndDay.slice(0, 2), 10); // 周数
    const day = parseInt(weekAndDay.slice(2), 10); // 星期几

    // 注意：星期几可能需要转换为从0开始的索引，因为数组索引是从0开始的
    const dayIndex = day - 1 + 2; // 星期几转为数组索引，n+2列（假设星期天为第0列，星期一为第1列，依此类推）

    const startSection = item.startSection - 1; // 节数通常从1开始，但数组索引从0开始，所以减1
    const endSection = item.endSection - 1;

    // 在二维数组的对应位置填充1
    for (let i = startSection; i <= endSection; i++) {
      scheduleArray[i][dayIndex] = 1;
    }
  });

  return scheduleArray;
}
export default {
  data() {
    return {
      // item : {
      //     imgSrc: 'xxx',
      //     machineroomId: '111',
      //     name: 'B7-137',
      //     admin: '李明',
      //     features: ['largeMargin', 'bigRoom'], //返回特征的编号，写死在前端
      //     firstFeature:['machineroomFeature','largeMargin'],
      //     secondFeature:['machineroomFeature','bigRoom'],
      // },
      features: {
        largeMargin: "余量大",
        middleMargin: "余量中",
        smallMargin: "余量小",
        noMargin: "不可预约",
        bigRoom: "大机房",
        middleRoom: "中机房",
        smallRoom: "小机房",
      },
      options: [
        {
          value: 1,
          label: "第一周",
        },
        {
          value: 2,
          label: "第二周",
        },
        {
          value: 3,
          label: "第三周",
        },
        {
          value: 4,
          label: "第四周",
        },
        {
          value: 5,
          label: "第五周",
        },
        {
          value: 6,
          label: "第六周",
        },
        {
          value: 7,
          label: "第七周",
        },
        {
          value: 8,
          label: "第八周",
        },
        {
          value: 9,
          label: "第九周",
        },
        {
          value: 10,
          label: "第十周",
        },
        {
          value: 11,
          label: "第十一周",
        },
        {
          value: 12,
          label: "第十二周",
        },
        {
          value: 13,
          label: "第十三周",
        },
        {
          value: 14,
          label: "第十四周",
        },
        {
          value: 15,
          label: "第十五周",
        },
        {
          value: 16,
          label: "第十六周",
        },
        {
          value: 17,
          label: "第十七周",
        },
      ],
      weekNumber: 1,
      tableData: [
        {
          serialNumber: "1",
          time: "08:50-09:35",
        },
        {
          serialNumber: "2",
          time: "09:40-10:25",
        },
        {
          serialNumber: "3",
          time: "10:40-11:25",
        },
        {
          serialNumber: "4",
          time: "11:30-12:15",
        },
        {
          serialNumber: "5",
          time: "14:00-14:45",
        },
        {
          serialNumber: "6",
          time: "14:50-15:35",
        },
        {
          serialNumber: "7",
          time: "15:45-16:30",
        },
        {
          serialNumber: "8",
          time: "16:35-17:20",
        },
        {
          serialNumber: "9",
          time: "19:00-19:45",
        },
        {
          serialNumber: "10",
          time: "19:55-20:40",
        },
        {
          serialNumber: "11",
          time: "20:50-21:35",
        },
      ],
      tableCol: [
        "serialNumber",
        "time",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      tableColLabel: [
        "序号",
        "时间",
        "周一",
        "周二",
        "周三",
        "周四",
        "周五",
        "周六",
        "周日",
      ],
      tableColWidth: [50, 100, 80, 80, 80, 80, 80, 80, 80],
      roomInfo: {
        equipmentQuantity: 0,
        adminContact: "",
        Introduction: "",
      },
      courseData: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
      ],
      periodCourseInfo: {
        courseName: "",
        teacher: "",
        applicant: "",
        period: "",
        applicantContact: "",
      },
    };
  },
  props: {
    item: Object,
  },
  methods: {
    weekSelect(val) {
      this.weekNumber = val;
      this.getCourse();
    },
    hasCourse({ rowIndex, columnIndex }) {
      // console.log(rowIndex + '-'+ columnIndex);

      if (this.courseData[rowIndex][columnIndex]) {
        return "hasCourse";
      } else {
        return "";
      }
    },
    cellClick(row, column) {
      console.log(row.serialNumber);
      console.log(column.property);
      // this.periodCourseInfo.courseName='数据挖掘';
      // this.getPeriodCourse(row.serialNumber,column.property);
    },
    async getCourse() {
      let params = {
        jfCode: this.item.name,
        weekNumber: this.weekNumber,
      };
      console.log(params);
      let result = await this.$request.get(
        "api/common-service/queryOrderInfoListByWeek",
        { params }
      );
      console.log(result.data);
      if (result.data) {
        this.courseData = [];
        this.courseData = createScheduleArray(result.data);
        // this.courseData.push(...result.data.courseData)
        console.log(this.courseData);
      }
    },
    async getRoomInfo() {
      let jfCode = this.item.name;
      let result = await this.$request.get("api/getRoomInfo", {
        params: { jfCode },
      });
      if (result.data) {
        Object.assign(this.roomInfo, result.data);
      }
    },
    async getPeriodCourse(row, column) {
      let params = {
        jfCode: this.item.name,
        weekNumber: this.weekNumber,
        dayOfWeek: column,
        sectionNumber: row,
      };
      let result = await this.$request.get("api/getPeriodCourse", { params });
      if (result.data) {
        Object.assign(this.periodCourseInfo, result.data.periodCourseInfo);
      }
    },
  },
  created() {
    this.getCourse();
    // this.getRoomInfo();
    Object.assign(this.roomInfo, this.item);
  },
};
</script>
<style lang="less" scoped>
.bodyStyle {
  width: 100%;
  height: 110vh;
  margin-top: 15px;
}

.reserveCard {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  height: 90vh;
  margin: 0 auto;

  // padding: 40px 0;
  .machineroomInfo {
    overflow: hidden;
    width: 25%;
    height: 250px;
    border: 1px solid #ccc;
    margin: 15px 0;
    h4 {
      background-color: rgb(212, 210, 210);
      padding: 4px 10px;
      font-weight: 800;
      .roomStatus {
        color: #fff;
        background-color: rgb(9, 213, 9);
        font-weight: 400;
        padding: 2px 5px;
        margin: 0 5px;
        font-size: 12px;
        border-radius: 2px;
      }
    }
    .info {
      padding: 10px;
      height: 80%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      p {
        width: 100%;
        line-height: 20px;
        overflow: hidden;
        word-wrap: break-word;
        white-space: pre-wrap;
      }
    }
  }
  .reservationStatus {
    width: 25%;
    border: 1px solid #ccc;
    margin: 15px 0;
    height: 250px;
    h4 {
      background-color: rgb(212, 210, 210);
      padding: 4px 10px;
      font-weight: 800;
    }
    .info {
      padding: 10px;
      height: 60%;
      padding: 20px auto;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      p {
        width: 100%;
        overflow: hidden;
        word-wrap: break-word;
        white-space: pre-wrap;
      }
    }
    .noCourse {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;
    }
  }
}

.machineroomFeature {
  font-size: 12px;
  color: #fff;
  margin: 0 15px;
  padding: 4px 8px;
  // border: 1px solid #ccc;
  border-radius: 5px;
}
.bigRoom {
  background-color: rgb(67, 66, 66);
}
.middleRoom {
  background-color: rgb(113, 110, 110);
}
.smallRoom {
  background-color: rgb(151, 148, 148);
}
.largeMargin {
  background-color: rgb(48, 183, 48);
}
.middleMargin {
  background-color: rgb(221, 164, 57);
}
.smallMargin {
  background-color: rgb(210, 132, 145);
}
.noMargin {
  background-color: rgb(144, 6, 6);
}

.leaveMessage {
  padding: 5px;
  font-size: 20px;
  transform: translate(500px);
  background-color: rgb(42, 41, 41);
}

/deep/.hasCourse {
  background-color: rgb(169, 166, 166) !important;
}
</style>
