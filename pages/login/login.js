// pages/login/login.js
import { $wuxForm } from '../../dist/index'
import { $wuxToptips } from '../../dist/index'
import { TOKEN_KEY } from "../../config/env"
import { authenticate } from "../../api/precise/tokenAuth.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  trim(char) { return char.replace(/\s+/g, ''); },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  onSubmit() {
    wx.showLoading({
      title: '正在登陆'
    })
    const { getFieldsValue, getFieldValue, setFieldsValue } = $wuxForm()
    const value = getFieldsValue()

    var loginData = {
      userNameOrEmailAddress: this.trim(value.userNameOrEmailAddress),
      password: this.trim(value.password),
      rememberClient: true
    }
    console.log(loginData)
    if (loginData.userNameOrEmailAddress != '' || loginData.password != '') {
      authenticate(loginData).then(response => {
        var result = response.result
        console.log(result)
        wx.setStorageSync(TOKEN_KEY, result.accessToken);
        $wuxToptips().success({
          hidden: false,
          text: '登录成功',
          duration: 1000,
          success() {
            wx.navigateTo({
              url: '/pages/home/home',
            })
          },
        })
        wx.hideLoading()
      }).catch(e => {
        wx.hideLoading()
        console.log(e)
      })
    } else {
      $wuxToptips().warn({
        hidden: false,
        text: '用户名或密码不能为空',
        duration: 2000,
        success() { },
      })
      wx.hideLoading()
    }
  },
  onChange(e) {
    const { form, changedValues, allValues } = e.detail

    // console.log('onChange \n', changedValues, allValues)
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