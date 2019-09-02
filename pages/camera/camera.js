// pages/report/report.js
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
    videoPath:'',
    address:null,
    imgList: [],
    options: [{
      value: 'bj',
      label: '北京市',
    }, {
      value: 'zj',
      label: '浙江省',
    }, {
      value: 'gd',
      label: '广东省',
      disabled: true,
    }, {
      value: 'hn',
      label: '测试开发的一个部门',
    }, {
      value: 'cq',
      label: '重庆市',
    }, {
      value: 'sc',
      label: '四川省',
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var id = options.id
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
        var videoImg = that.data.videoImg
        const videoPath = res.tempFilePath
        console.log(res)
        that.setData({
          videoHidden: true,
          videoPath:videoPath
        })
      }
    })
  },
  delVideo(){
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
        var filePath = res.tempFilePaths[0]
        imgList.push(filePath)
        that.setData({
          imgList: imgList, //把照片路径存到变量中，
        });
        //这个是使用微信接口保存文件到数据库
        // wx.uploadFile({
        //   url: "http://10.4.58.195:8088/uploadImg",
        //   filePath: filePath,
        //   header: {
        //     "Content-Type": "multipart/form-data"
        //   },
        //   formData: {
        //     userId: 10010, //可附加一些信息
        //     imgName: "test.jpg"
        //   },
        //   name: 'imgfile',
        //   success: function (res) {
        //     console.log(res)
        //   }
        // })
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
    console.log('sub')
    console.log('Default Form Submit \n', e.detail.value)
  },
  getAddress(e) {
    const that=this
    wx.chooseLocation({
      success: function(res) {
        var latitude = res.latitude
        var longitude = res.longitude
        var address=res.name
        that.setData({
          address:address
        })
        console.log(that.data.address)
      }
    })
  },
  previewImage(e){
    var src = e.currentTarget.dataset.src;
    wx.previewImage({
      current:src,
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