/*
 * @Author: PBTL-github 2324009078@qq.com
 * @Date: 2023-12-12 22:05:24
 * @LastEditors: PBTL-github 2324009078@qq.com
 * @LastEditTime: 2023-12-17 20:32:00
 * @FilePath: \web-front\src\utils\server.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import router from '@/router';
import axios from 'axios';

const server = axios.create({ baseURL: 'http://localhost:5000' });

server.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = token;
    } else if (config.data.username) {
      return config;
    } else {
      return Promise.reject(new Error(`Token不存在， 无法被访问`));
    }
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

server.interceptors.response.use(
  res => {
    if (res.status !== 200 && res.status !== 401) {
      return Promise.reject(new Error(`response code: ${res.status}`));
    } else if (res.status === 401) {
      localStorage.removeItem('token');
      router.go(0);
      return Promise.reject(
        new Error(`response code: ${res.status}, Token已经过期或者存在异常， 请从新登录`)
      );
    }
    return res;
  },
  error => {
    return Promise.reject(error);
  }
);

export { server };
