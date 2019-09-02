// pages/taskpool/taskpool.js
var date = require('../../utils/util.js')
var formatDate = date.formatDate
var endFormatTime = date.endFormatTime
var format = date.formatTime
Page({
  /**
   * 页面的初始数据
   */
  data: {
    current:1,
    renwuList:[],
    yesterday: [
      { title: "一个正在进行任务",pnumber:0, isdone: false, time: "每天一次", user: "ssw" },
      { title: "一个测试任务",pnumber: 1,isdone: false, time: "每天一次", user: "ssw" },
      { title: "一个正在进行任务", pnumber: 0, isdone: false, time: "每天一次", user: "ssw" },
      { title: "一个测试任务", pnumber: 1, isdone: false, time: "每天一次", user: "ssw" }
    ],
    today: [
      { title: "一个正在进行任务",pnumber: 0, isdone: false, time: "每天一次", user: "ssw" },
      { title: "一个正在进行任务", pnumber: 0, isdone: false, time: "每天一次", user: "ssw" },
      { title: "一个测试任务",pnumber: 1, isdone: false, time: "每天一次", user: "ssw" },
      { title: "一个测试任务", pnumber: 1, isdone: false, time: "每天一次", user: "ssw" },
      { title: "一个测试任务", pnumber: 0,isdone: false, time: "每天一次", user: "ssw" },
      { title: "一个正在进行任务", pnumber: 0, isdone: false, time: "每天一次", user: "ssw" }
    ],
    tomorrow: [
      { title: "一个正在进行任务",pnumber:0, isdone: false, time: "每天一次", user: "ssw" },
      { title: "一个测试任务",pnumber: 1,isdone: false, time: "每天一次", user: "ssw" },
      { title: "一个正在进行任务", pnumber: 0, isdone: false, time: "每天一次", user: "ssw" }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var yesterday = endFormatTime(new Date(), -24)
    var today = formatDate(new Date())
    var tomorrow = endFormatTime(new Date(), 24)
    this.setData({
      date: [yesterday + '(昨天)', today + '(今天)', tomorrow + '(明天)'],
      renwuList:this.data.today
    })
  },
  getTask(e){
    var num=e.currentTarget.dataset.num
    wx.navigateTo({
      url: '/pages/gettask/gettask?num='+num,
    })
  },
  onChange(e) {
    var key=e.detail.key
    this.setData({
      current:key
    })
    var yesterday=this.data.yesterday
    var today = this.data.today
    var tomorrow = this.data.tomorrow
    switch(key){
      case 0:
        this.setData({
          renwuList:yesterday
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
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})