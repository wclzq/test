// pages/report/report.js
var upload = require('../../api/upload/upload.js')
var uploadImg = upload.uploadImg
var uploadVideo = upload.uploadVideo
import { getOrganizationUnits } from '../../api/hiddenDanger/organizationUnits.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bmvalue: '',
    bmlabel: '请选择',
    bmuservalue: '',
    bmuserlabel: '请选择',
    videoHidden: false,
    videoPath: '',
    imgPath: '',
    videoName: '',
    imgName: '',
    address: null,
    imgList: [],
    organizationList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var id = options.id
    var that = this
    //获取部门信息
    getOrganizationUnits().then(res => {
      var result = res.result.items
      var list = []
      result.forEach(item => {
        var li = {}
        li.value = item.code
        li.label = item.displayName
        list.push(li)
      })
      that.setData({
        organizationList: list
      })
    })
  },
  setValue(values, key, mode) {

  },
  bm(e) {
    var values = e.detail
    this.setData({
      bmvalue: values.value,
      bmlabel: values.label
    })
  },
  bmuser(e) {
    var values = e.detail
    this.setData({
      bmuservalue: values.value,
      bmuserlabel: values.label
    })
  },
  addvideo() {
    const that = this
    wx.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 60,
      camera: 'back',
      success(res) {
        const videoPath = res.tempFilePath
        var videoName = videoPath.split('//').pop()
        console.log(res)
        that.setData({
          videoHidden: true,
          videoPath: videoPath,
          videoName: videoName
        })

      }
    })
  },
  delVideo() {
    this.setData({
      videoHidden: false,
      videoPath: ''
    })
  },
  camera() {
    var that = this;
    var imgList = that.data.imgList;
    if (imgList.length >= 3) {
      wx.showToast({
        title: '最多选三张',
        icon: "none"
      })
      return;
    }
    wx.chooseImage({
      count: 3,
      success: function(res) {
        // 无论用户是从相册选择还是直接用相机拍摄，路径都是在这里面
        var imgList = that.data.imgList;
        var imgPath = res.tempFilePaths[0]
        imgList.push(imgPath)
        var imgName = imgPath.split('//').pop()
        that.setData({
          imgList: imgList, //把照片路径存到变量中，
          imgPath: imgPath,
          imgName: imgName
        });
        //这个是使用微信接口保存文件到数据库

      },
      fail: function(error) {
        console.error("调用本地相册文件时出错")
        console.warn(error)
      },
      complete: function() {

      }
    });
  },
  formSubmit(e) {
    var formData = e.detail.value
    console.log('Default Form Submit \n', formData)
    var data = this.data
    formData.videoName = data.videoName
    if (data.videoPath != '') {
      console.log(data.videoPath)
      uploadVideo(data.videoPath, formData)
    }
  },
  getAddress(e) {
    const that = this
    wx.chooseLocation({
      success: function(res) {
        var latitude = res.latitude
        var longitude = res.longitude
        var address = res.name
        that.setData({
          address: address
        })
        console.log(that.data.address)
      }
    })
  },
  previewImage(e) {
    var src = e.currentTarget.dataset.src;
    wx.previewImage({
      current: src,
      urls: this.data.imgList,
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})