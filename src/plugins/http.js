// 插件模块
import axios from 'axios'

const MyServerHttp = {}

MyServerHttp.install = function (Vue) {
  // 4. 添加实例方法
  axios.defaults.baseURL = 'http://api.xiaomadagege.cn:8800/api/private/v1/'
  Vue.prototype.$http = axios
}

export default MyServerHttp
