# lee-http
此插件主要是在VUE中使用对axios的封装
# 特性

支持Promise
支持async await

# 安装

npm i lee-http --save

OR

yarn add lee-http

# 使用方法

支持get和post请求

import Http from 'lee-http';

## get
```javascript
async getDate() {
    let d = await Http.get(url,{params1:1});
    console.log(d);
}
```

## post
```javascript
async getDate() {
    let d = await Http.post(url,{params1:1});
    console.log(d);
}
```
