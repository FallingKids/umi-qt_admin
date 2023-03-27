import axios from 'axios';
import * as BaseConstant from '../constants/base';

const PREFIX_HOST = 'http://127.0.0.1:3000';
const Token = localStorage.getItem(BaseConstant.LOGIN_TOKEN);

const instance = axios.create({
  baseURL: PREFIX_HOST,
  timeout: 20000,
  ...(Token ? { headers: { authorization: Token } } : {}),
});

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    return Promise.reject(err);
  },
);

// 响应拦截器
instance.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    return Promise.reject(err);
  },
);

export default instance;
