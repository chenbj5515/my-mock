const router = require('koa-router')()
const fs = require('fs')
const path = require('path');
// require('./studentList');
async function delay(time) {
    return new Promise(function(resolve, reject) {
        setTimeout(function(){
            resolve();
        }, time);
    });
};

const getFullPath = name => path.join(__dirname, name);
router.post('/subclazzPkResult', async function (ctx, next) {
    const fullPath = getFullPath('subclazzPkResult.json');
    await delay(2000);
    ctx.body = fs.readFileSync(fullPath).toString()
})

router.post('/subclazzPowerList', async function (ctx, next) {
    const fullPath = getFullPath('subclazzPowerList.json');
    await delay(2000);
    ctx.body = fs.readFileSync(fullPath).toString()
})

router.post('/choseSubclazz', async function (ctx, next) {
    const fullPath = getFullPath('choseSubclazz.json');
    await delay(1000);
    ctx.body = fs.readFileSync(fullPath).toString()
})

router.post('/groupRankList', async function (ctx, next) {
    const fullPath = getFullPath('groupRankList.json');
    await delay(1000);
    ctx.body = fs.readFileSync(fullPath).toString()
})

router.post('/subclassRankList', async function (ctx, next) {
    const fullPath = getFullPath('subclassRankList.json');
    await delay(1000);
    ctx.body = fs.readFileSync(fullPath).toString()
})

module.exports = router

