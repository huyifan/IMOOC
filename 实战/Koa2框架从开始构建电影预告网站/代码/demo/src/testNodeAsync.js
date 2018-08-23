/**
 * Created by hugo on 2018/8/22.
 */

//promise()
//asyncPromise()
asyncPromisify()
//normal()

function normal() {
  let arr1 = [0, 1, 2]
  let arr2 = [3, 4, 5]

  console.log("aaa")

  arr1.map((v, i) => {
    setTimeout(() => console.log("arr1:" + v)
      , 100)
  })

  console.log("bbb")

  arr2.map((v, i) => {
    setTimeout(() => console.log("arr2:" + v)
      , 1)
  })

  console.log("ccc")


}

function promise() {
  let arr1 = [0, 1, 2]
  let arr2 = [3, 4, 5]

  console.log("aaa")


  return new Promise((resolve, reject) => {
    arr1.map((v, i) => {
      setTimeout(() => {
        console.log("arr1:" + v)
        if (i === arr1.length - 1)
          resolve()
      }, 100)
    })
  }).then(() => {
    console.log("bbb")

    return new Promise((resolve, reject) => {
      arr2.map((v, i) => {
        setTimeout(() => {
          console.log("arr1:" + v)
          if (i === arr1.length - 1) {
            console.log("ccc")
            resolve()
          }
        }, 100)
      })
    })
  })

}

async function asyncPromise() {
  let arr1 = [0, 1, 2]
  let arr2 = [3, 4, 5]

  console.log("aaa")


  await (function () {
    return new Promise((resolve, reject) => {
      arr1.map((v, i) => {
        setTimeout(() => {
          console.log("arr1:" + v)
          if (i === arr1.length - 1)
            resolve()
        }, 100)
      })
    })
  })()

  console.log("bbb")

  await(function () {
    return new Promise((resolve, reject) => {
      arr2.map((v, i) => {
        setTimeout(() => {
          console.log("arr1:" + v)
          if (i === arr1.length - 1) {
            console.log("ccc")
            resolve()
          }
        }, 100)
      })
    })
  })()


}


/*
* promisify会把带有回调函数的函数包装成一个Promise对象返回
* */
async function asyncPromisify() {
  let util = require('util')
  let arr1 = [0, 1, 2]
  let arr2 = [3, 4, 5]
  console.log("aaa")

  await (util.promisify(function (cb) {
    arr1.map((v, i) => {
      setTimeout(() => {
        console.log("arr1:" + v)
        if (i === arr1.length - 1)
          cb()
      }, 100)
    })
  }))()

  console.log("bbb")

  await (util.promisify(function (cb) {
        arr2.map((v, i) => {
          setTimeout(() => {
            console.log("arr1:" + v)
            if (i === arr1.length - 1) {
              console.log("ccc")
              cb()
            }
          }, 100)
        })
      }
    )
  )()


}
