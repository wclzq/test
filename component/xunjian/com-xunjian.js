var date = require('../../utils/util.js')
var format = date.formatTime
var formatDate = date.formatDate
var endFormatTime = date.endFormatTime
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    current: 1,
    renwuList: [],
    yesterday: [
      { title: "一个切换中的任务", pnumber: 0, isdone: false, time: "每天一次", user: "ssw" },
      { title: "一个正在进行任务", pnumber: 0, isdone: false, time: "每天一次", user: "ssw" },
      { title: "一个测试任务", pnumber: 1, pnumber: 0, isdone: false, time: "每天一次", user: "ssw" },
      { title: "一个测试任务", pnumber: 1, isdone: false, time: "每天一次", user: "ssw" }
    ],
    today: [
      { title: "一个正在进行任务", pnumber: 0, isdone: false, time: "每天一次", user: "ssw" },
      { title: "一个测试任务", pnumber: 1, pnumber: 0, isdone: false, time: "每天一次", user: "ssw" },
      { title: "一个正在进行任务", pnumber: 0, isdone: false, time: "每天一次", user: "ssw" },
      { title: "一个测试任务", pnumber: 1, isdone: false, time: "每天一次", user: "ssw" },
      { title: "一个测试任务", pnumber: 0, isdone: false, time: "每天一次", user: "ssw" },
      { title: "一个正在进行任务", pnumber: 0, isdone: false, time: "每天一次", user: "ssw" }
    ],
    tomorrow: [
      { title: "一个切换测试", pnumber: 0, isdone: false, time: "每天一次", user: "ssw" },
      { title: "一个正在进行任务", pnumber: 0, isdone: false, time: "每天一次", user: "ssw" },
      { title: "一个测试任务", pnumber: 1, pnumber: 0, isdone: false, time: "每天一次", user: "ssw" }
    ],
    date: null,
   
  },
  attached: function () {
    //昨天，今天，明天
    var yesterday =endFormatTime(new Date(),-24)
    var today = formatDate(new Date())
    var tomorrow=endFormatTime(new Date(),24)
    this.setData({
      date: [yesterday + '(昨天)', today + '(今天)', tomorrow+'(明天)'],
      renwuList:this.data.today
    })
  },

  /**
   * 组件的方法列表
   */
  methods: {
    taskpool() {
      wx.navigateTo({
        url: '/pages/taskpool/taskpool',
      })
    },
    handleChange({ detail }) {
      this.setData({ current: detail.key })
    },
    task(e) {
      wx.navigateTo({
        url: '/pages/task/task',
      })
    },
    barqr(){
      var that = this;
      wx.scanCode({ //扫描API
        scanType: ['barCode', 'qrCode'],
        success(res) { //扫描成功
          console.log(res) //输出回调信息
        }
      })
    },
    camera(){
      wx.navigateTo({
        url: '/pages/camera/camera',
      })
    },
    onChange(e) {
      var key = e.detail.key
      this.setData({
        current: key
      })
      var yesterday = this.data.yesterday
      var today = this.data.today
      var tomorrow = this.data.tomorrow
      switch (key) {
        case 0:
          this.setData({
            renwuList: yesterday
          })
          break;
        case 1:
          this.setData({
            renwuList: today
          })
          break;
        case 2:
          this.setData({
            renwuList: tomorrow
          })
          break;
        default:
          this.setData({
            renwuList: today
          })
      }
    },
  }
})
