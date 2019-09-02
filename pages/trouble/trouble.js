// pages/trouble/trouble.js
var radioResult=[]
Page({

  /**
   * 页面的初始数据
   */
  data: {
    radioList:[
      {id:1,problem:"是否有乱石"},
      {id:2,problem:"是否有乱石是否其他问题"},
      {id:3,problem:"水土是否流失"},
      {id:4,problem:"是否有污染"},
      {id:5,problem:"是否有乱石及其他问题"},
      {id:16,problem:"是否有乱石"},
      {id:15,problem:"是否有乱石"},
      {id:19,problem:"是否有乱石"}
    ],
    sub:true
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },
  radioChange: function (e) {
    var value = e.detail.value
    var index=e.target.dataset.index
    var id = this.data.radioList[index].id
    radioResult[index]=value
    if(value==0){
      wx.navigateTo({
        url: '/pages/report/report?id='+id,
      })
    }
    const that=this
    if (radioResult.length == that.data.radioList.length){
      that.setData({
        sub:false
      })
    }else{
      that.setData({
        sub: true
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