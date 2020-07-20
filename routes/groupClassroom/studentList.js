const router = require('koa-router')()
const fs = require('fs')
const path = require('path');
const totalCount = 100;
async function delay(time) {
    return new Promise(function(resolve, reject) {
        setTimeout(function(){
            resolve();
        }, time);
    });
};
const studentInfoList = [
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    },
    {
        "coinCount": 1,
        "name": "墨雨",
        "profilePhoneUrl": "https://test-img.gsxservice.com//2020092_9hdisbns.png",
        "userId": "11100000016"
    }
];
router.post('/studentList', async function (ctx, next) {
    const {pageNumber, pageSize} = ctx.request.body;
    const curList = [...studentInfoList].splice(pageNumber - 1, pageSize);
    const hasMore = pageNumber * pageSize < studentInfoList.length;
    await delay(1000);
    ctx.body = {
        code: 0,
        data: {
            hasMore,
            studentInfoList: curList
        }
    }
})

module.exports = router