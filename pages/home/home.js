import { TOKEN_KEY } from "../../config/env"
// pages/home/home.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menuList: [{
      name: '责任总览',
      icon: "/images/home/element.svg"
    },
    {
      name: '工程巡检',
      icon: "/images/home/inspection.svg"
    },
    {
      name: '隐患整改',
      icon: "/images/home/rectification.svg"
    },
    {
      name: '会议通知',
      icon: "/images/home/meeting.svg"
    },
    {
      name: '维护养护',
      icon: "/images/home/conservation.svg"
    },
    {
      name: '危险源监控',
      icon: "/images/home/hazard.svg"
    },
    {
      name: '台账列表',
      icon: "/images/home/account.svg"
    },
    {
      name: '收发文',
      icon: "/images/home/received.svg"
    },
    {
      name: '文档列表',
      icon: "/images/home/document.svg"
    },
    ],
    titleList: [{
      name: '待办工作',
      icon: '/images/home/element.svg'
    },
    {
      name: '经办工作',
      icon: '/images/home/havetodo.svg'
    }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var user = wx.getStorageSync(TOKEN_KEY)
    if (!user) {
      wx.reLaunch({
        url: '/pages/login/login',
      })
    }

  },
  jump(e) {
    console.log(e)
    switch (e.detail.label) {
      case '工程巡检':
        wx.navigateTo({
          url: '/pages/examine/examine',
        })
        break;
      default:
        wx.showToast({
          title: '暂无权限',
          icon: 'none',
          duration: 2000
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