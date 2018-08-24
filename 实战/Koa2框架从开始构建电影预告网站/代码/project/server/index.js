/**
 * Created by hugo on 2018/8/24.
 */
//创建服务
const Koa = require('koa')
const app = new Koa()
const views = require('koa-views') //视图解析
const {resolve} = require('path')


//1.问题1-new Koa时做了什么事情？
//2.问题2-app.use的时候做了什么事情？
//3.问题3-app.listen时候做了什么事情？

app.use(views(resolve(__dirname, './views'), {
  extension: 'pug'
}))

app.use(async (ctx, next) => {
  await ctx.render('index', {
    name: 'hugo',
    age: '24'
  })
})

//监听端口
app.listen(4455)