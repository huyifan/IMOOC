/**
 * Created by hugo on 2018/8/23.
 */
const Koa = require('koa')
const app = new Koa()

/*
 *  1，async
 *
 * */

const mid1 = async (ctx, next) => {
  ctx.body = 'hi'
  next()
}

const mid2 = async (ctx, next) => {
  ctx.body += 'hi2'
  next()
}

const mid3 = async (ctx, next) => {
  ctx.body += 'hi3'
  next()
}
app.use(mid1)
app.use(mid2)
app.use(mid3)
app.listen(2333)

console.log("app start on 2333")