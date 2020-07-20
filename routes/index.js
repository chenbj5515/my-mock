const router = require('koa-router')()
const fs = require('fs')
const path = require('path')

function readFileList(dir, father = '') {
    const files = fs.readdirSync(dir);
    files
        .filter(item => path.extname(item) !== '.md' && path.extname(item) !== '.json')
        .forEach((item, index) => {
            var fullPath = path.join(dir, item);
            const stat = fs.statSync(fullPath);
            if (stat.isDirectory()) {      
                readFileList(fullPath, item);
            } else {         
                var relativePath = father ? `/${father}/${item}` : item;
                if (relativePath !== 'index.js') {
                    const last = relativePath.match(/.+\/([^/]+)$/)[1];
                    // console.log(last + 1);
                    const file_entity = require(fullPath);
                    // 第一个参数设定一级路由，第二个参数是设定二级路由的文件的引用
                    router.use(`${relativePath.slice(0, -(last.length + 1))}`, file_entity.routes(), file_entity.allowedMethods())
                }
            }        
        });
}
readFileList(__dirname);
module.exports = router


