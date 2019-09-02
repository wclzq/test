// pages/task/task.js
var checkList=[]
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:null,
    taskList: [
      { name: '三楼', time: '09-8 02:22:15', bumen: '测试部' },
      { name: '一楼', time: '09-8 02:22:15', bumen: '测试部' },
      { name: '四楼', time: '09-8 02:22:15', bumen: '测试部' },
      { name: '三楼', time: '09-8 02:22:15', bumen: '测试部' },
      { name: '六楼', time: '09-8 02:22:15', bumen: '测试部' },
      { name: '三楼', time: '09-8 02:22:15', bumen: '测试部' }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var num=options.num
    this.setData({
      num:num
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  taskDetail(e) {
    wx.navigateTo({
      url: '/pages/taskdetail/taskdetail',
    })
  },
  checkChange(e){
    checkList=e.detail.value
    console.log(checkList)
  },
  getTask(){
    if(this.data.num==1&&checkList.length<=0){
      return wx.showToast({
        title: '至少选择一个路线',
        icon:'none'
      })
    }
    wx.showToast({
      title: '领取成功',
      icon:'success'
    })
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