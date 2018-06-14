# lee-http

此插件主要是在 VUE 中使用对 axios 的封装

# 特性

支持 Promise
支持 async await

# 安装

npm i lee-http --save

OR

yarn add lee-http

# 使用方法

支持 get 和 post 请求

在 main.js 中

import Http from 'lee-http';
Vue.prototype.Http = Http;

## get

```javascript
async getDate() {
    let d = await this.Http.get(url,{params1:1});
    console.log(d);
}
```

## post

```javascript
async getDate() {
    let d = await this.post(url,{params1:1});
    console.log(d);
}
```
