/**
 * 全局配置文件
 */
// 环境模式（production：生产环境，development：测试）
const ENV = 'development';

// 接口基础域名
const API_BASE_URL = ENV === 'development' ? "http://precise.natapp1.cc/":"http://10.4.56.194:91/" ;
const FROM = 1;
const IMG_URL = ENV === 'development' ? "http://precise.natapp1.cc/" : "http://10.4.56.194:91/";
const IMG_VERSION = ""; // 图片资源版本
const ENV_VERSION = ""; // 小程序版本类型
const USER_ID_KEY = "USERID";
const TOKEN_KEY = "TOKEN";

module.exports = {
  ENV,
  API_BASE_URL,
  FROM,
  IMG_URL,
  IMG_VERSION,
  ENV_VERSION,
  USER_ID_KEY,
  TOKEN_KEY,
}
