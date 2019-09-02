import { API_BASE_URL, TOKEN_KEY } from "../config/env"
import { $wuxToptips } from '../dist/index'

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  // 500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

const request = function (path, method, data, header) {
  header = header || {};

  header['Authorization'] = 'Bearer ' + wx.getStorageSync(TOKEN_KEY);
  header['.AspNetCore.Culture'] = 'zh-Hans';

  return new Promise((resolve, reject) => {
    wx.request({//后台请求
      url: API_BASE_URL + path,
      header: header,
      method: method,
      data: data,
      success: function (response) {
        if (response.statusCode >= 200 && response.statusCode < 300) {
          resolve(response.data);
        }
        else if (response.statusCode == 401) {
          wx.navigateTo({
            url: '/pages/login/login',
          })
        }
        else if (response.statusCode == 403) {
          $wuxToptips().warn({
            hidden: false,
            text: '访问被禁止：' + response.data.error.message,
            duration: 2000,
          })
          reject(response.data);
        }
        else {
          if (response.data.success) {
            resolve(response.data);
          } else {
            //错误信息
            const errortext = codeMessage[response.statusCode] || response.data.error.details;
            $wuxToptips().error({
              hidden: false,
              text: errortext,
              duration: 2000,
            })
            reject(response.data);
          }
        }
      },
      fail: function (res) {
        $wuxToptips().warn({
          hidden: false,
          text: '服务器异常',
          duration: 2000,
          success() { },
        })
        reject("not data");
      }
    });
  });
}

module.exports = {
  request,
};