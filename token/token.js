/*
*
*   verify 传入token和密钥,返回对象的status为1 是验证成功
*
*   getToken 传入token数据,密钥,可选其他配置
* */





const jwt = require('jsonwebtoken'),
    path = require('path'),
    fs = require('fs');

module.exports = {
    /**
     *  验证token
     * @param token : String token
     * @param secret : string 密钥
     * @returns {Promise<any>}
     */
    verify(token,secret){
        return new Promise((resolve, reject) => {
            jwt.verify(token,secret,(err,decodes)=>{
                if(err)
                    resolve({
                        status:0,
                        message:'not permission'
                    });
                resolve({
                    status:1,
                    message:'allowed!',
                    data: decodes
                })
            });
        });
    },
    /**
     *  获取新的token
     * @param obj : Object token数据
     * @param secret : BufferSource/String 密钥
     * @param options : Object 其他可选配置信息
     * @returns {*}
     */
    getToken(obj,secret,options){
        return jwt.sign(Object.assign(obj,{date: Date.now()}),secret,options);
    }
};