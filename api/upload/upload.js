const uploadImg=function(imgPath,imgName,data){
  data.imgName=imgName
  wx.uploadFile({
    url: "http://10.4.58.195:8088/uploadImg",
    filePath: imgPath,
    header: {
      "Content-Type": "multipart/form-data"
    },
    formData: data,
    name: 'imgFile',
    success: function (res) {
      console.log(res)
    }
  })
};
const uploadVideo=function(videoPath,formData){
  wx.showLoading({
    title: '提交中',
  })

  wx.uploadFile({
    url: "http://10.4.58.195:8088/uploadVideo",
    filePath: videoPath,
    header: {
      "Content-Type": "multipart/form-data"
    },
    formData: formData,
    name: 'videoFile',
    success: function (res) {
      wx.hideLoading()
      console.log(res)
      if (res.statusCode == 200) {
        wx.showToast({
          title: '提交成功',
          icon: 'success',
          success: function () {
            wx.navigateBack({
              delta: 1
            })
          }
        })
      } else {
        wx.showToast({
          title: '提交失败',
          icon: 'none',
        })
      }
    }
  })
}
module.exports = {
  uploadImg:uploadImg,
  uploadVideo: uploadVideo
};