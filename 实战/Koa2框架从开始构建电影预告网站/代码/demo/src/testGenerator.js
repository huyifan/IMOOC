/**
 * Created by hugo on 2018/8/22.
 */

const co = require('co')
const fetch = require('node-fetch')


let generatorFun = function *() {
  const res = yield fetch('https://api.douban.com/v2/movie/1291843')
  const movie = yield res.json()
  const name = movie.alt_title
  console.log("name：", name)
}


/*
*将迭代器包装成promise对象
* */
co(generatorFun)


run(generatorFun)

function run(generator) {
  const iterator = generator()
  const it = iterator.next()
  const promise = it.value

  promise.then(data => {
    const it2 = iterator.next(data)
    const promise2 = it2.value
    promise2.then(data2 => {
      iterator.next(data2)
    })
  })
}