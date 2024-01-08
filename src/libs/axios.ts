import { appConfig } from '@/config/appConfig'
import storage from '@/utils/storage'
import Axios, { AxiosResponse } from 'axios'

function authRequestInterceptor(config: any) {
  const token = storage.getToken()
  if (token) {
    config?.headers?.set('Authorization', `Bearer ${token}`)
  }
  config?.headers?.set('Accept', 'application/json; charset=utf-8')

  return config
}

function axiosResponseInterceptor(response: AxiosResponse) {
  return response.data
}

function axiosHandleError(error: any) {
  return Promise.reject(error)
}

export const axios = Axios.create({
  baseURL: appConfig.apiUrl,
})

axios.interceptors.request.use(authRequestInterceptor)
axios.interceptors.response.use(axiosResponseInterceptor, axiosHandleError)
