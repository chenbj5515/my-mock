const Koa = require('koa')//引入koa
const App = new Koa()//创建koa实例
const routes = require('./routes')
const bodyParser = require('koa-bodyparser');

App.use(bodyParser())

console.log('server running~')
App.use(routes.routes())//应用第一个函数
App.listen(1122)//监听本机8080端口