/**
 * Created by hugo on 2018/8/22.
 */


/*
 * 1.精简代码
 * 2.跟父作用域共享上下文
 *
 * */

const arrow = function (param) {
  console.log("params:" + param)
}

const arrow2 = (param) => {
  console.log("params:" + param)
}

const arrow3 = (param) => console.log("params:" + param)

const arrow4 = param => console.log("params:" + param)

const arrow5 = param => ({...param})

//id:1 movie:xxx 直接解构对象
const arrow6 = ({id, movie}) => console.log("id:" + id + "|" + " movie: " + movie)


testArrow()

/*
 * 箭头函数的的作用域和父函数相同
 *
 * */
let b = 'global b'

function testArrow() {
  let b = 'testArrow b'
  let object = {
    b: '1',
    say: function () {
      setTimeout(function () {
        console.log("say:" + this.b)
      }, 200)
    },
    sayWithThat: function () {
      let that = this
      setTimeout(function () {
        console.log("sayWithThat:" + that.b)
      }, 200)
    },
    sayWithArrow1: () => {
      setTimeout(function () {
        console.log("sayWithArrow1:" + this.b)
      }, 200)
    },
    sayWithArrow2: function () {
      //setTimeout里的箭头函数提升了this的作用域，this的作用域此时在sayWithArrow里
      setTimeout(() => console.log("sayWithArrow2:" + this.b), 200)
    },
    sayWithGlobalArrow: () => { //函数体内this提升至全局作用域
      console.log("sayWithGlobalArrow1:",this.b)
      setTimeout(() => console.log("sayWithGlobalArrow2:" + this.b), 200)
    }
  }

  object.say()
  object.sayWithThat()
  object.sayWithArrow1()
  object.sayWithArrow2()
  object.sayWithGlobalArrow()
}