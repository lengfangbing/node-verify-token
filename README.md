**怎么安装(how to install)**
```cmd
npm i node-verify-token --save
或者(or)
yarn add node-verify-token
```


**使用方法(how to use)**

```javascript
const Token = require('node-verify-token');
```

_1.**签发token(sign token)**_
```javascript
const payload = {
    key: 'value',
    date: Date.now()
};
const secret = 'token secret';
const options = {
    expiresIn: '1 day'
};
const token = Token.getToken(payload,secret,options);
//token 就是得到的token字符串
// you will get token in this way
```
```text
关于options更多可选属性,可以去查找jsonwebtoken库的options可选属性
```
```text
for more about options?
You can search jsonwebtoken in npmjs.com.This options is based on jsonwebtoken's options;
```


**_2.验证token(verify token)_**
```javascript
async function a(){
   const result = await Token.verify(token,secret);  
} 
```
返回值(will return an object)
```javascript
//data 表示获取token时加密的原始数据
//this means allow to access.The data means the payload for this token
return { status: 1, message: 'allowed', data: paylaod};
//this means forbidden to access
return { status: 0, message: 'not permission'};
```

**_如果有什么问题和建议,请给我发邮件到664930912@qq.com 或者 lfb15666280558@gmail.com_**<br/>
**_If you have some issues , send email to 664930912@qq.com or lfb15666280558@gmail.com_**