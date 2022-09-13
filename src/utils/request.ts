import axios from 'axios'
import { ElMessage, ElLoading } from 'element-plus'

const service = axios.create({
  baseURL: '/',
  timeout: 50 * 1000,
  headers: { 'content-type': 'application/json;charset=utf-8'}
})

let loading: any
let requestCount: number = 0

const showLoading = () => {
  console.log('ssss')
  requestCount++
  if(requestCount !== 0 && !loading) {
    loading = ElLoading.service({
      text: '加载中...',
      spinner: 'el-icon-loading'
    })
  }
}

const hideLoading = () => {
  requestCount--
  if(requestCount == 0) {
    loading.close()
  }
}

service.interceptors.request.use(config => {
  console.log(config, 'opp')
  const { url, method } = config
  showLoading()
  const headers = localStorage.getItem('Authorization')
    ? {
        Authorization: `${localStorage.getItem('Authorization')}`,
        'Content-Type': 'application/json;charset=UTF-8',
      }
    : {
        Authorization: '',
        'Content-Type': 'application/json;charset=UTF-8',
      };
  return {
    url,
    method,
    options: { ...config, headers },
  };
}, (error: any) => {
  console.log(error)
  return Promise.reject(error)
})


service.interceptors.response.use((response: any) => {
  hideLoading()
  const { status, data, statusText } = response
  switch(status) {
    case 200:
      return data
    case 500:
      ElMessage(`服务器异常!${statusText}`)
      break
    case 400:
      ElMessage(`客户端异常!${statusText}`)
  }
}, error => {
  console.log('error', error) 
  return Promise.reject(error)
})

export default service

