// pages/prodetail/prodetail.js
import { getProblemById } from '../../api/hiddenDanger/problem.js'
Page({

  data: {
    problemInfo: {}
  },

  onLoad: function (options) {
    getProblemById({ id: options.id }).then(res => {
      console.log(res.result)
      this.setData({
        problemInfo: res.result
      })
    })
  },
  previewImg(e) {
    var url = e.currentTarget.dataset.url;
    console.log(url)
    wx.previewImage({
      current: url,     //当前图片地址
      urls: [url],               //所有要预览的图片的地址集合 数组形式
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
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