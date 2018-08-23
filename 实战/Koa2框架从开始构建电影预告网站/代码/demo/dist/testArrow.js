"use strict";

/**
 * Created by hugo on 2018/8/22.
 */

/*
 * 1.精简代码
 * 2.跟父作用域共享上下文
 *
 * */

var arrow = function arrow(param) {
  console.log("params:" + param);
};

var arrow2 = function arrow2(param) {
  console.log("params:" + param);
};

var arrow3 = function arrow3(param) {
  return console.log("params:" + param);
};

var arrow4 = function arrow4(param) {
  return console.log("params:" + param);
};

//id:1 movie:xxx 直接解构对象
var arrow5 = function arrow5(_ref) {
  var id = _ref.id,
      movie = _ref.movie;
  return console.log("id:" + id + "|" + " movie: " + movie);
};

testArrow();

/*
 * 箭头函数的的作用域和父函数相同
 *
 * */
var b = 'global b';

function testArrow() {
  var _this2 = this;

  var b = 'testArrow b';
  var object = {
    b: '1',
    say: function say() {
      setTimeout(function () {
        console.log("say:" + this.b);
      }, 200);
    },
    sayWithThat: function sayWithThat() {
      var that = this;
      setTimeout(function () {
        console.log("sayWithThat:" + that.b);
      }, 200);
    },
    sayWithArrow1: function sayWithArrow1() {
      setTimeout(function () {
        console.log("sayWithArrow1:" + this.b);
      }, 200);
    },
    sayWithArrow2: function sayWithArrow2() {
      var _this = this;

      //setTimeout里的箭头函数提升了this的作用域，this的作用域此时在sayWithArrow里
      setTimeout(function () {
        return console.log("sayWithArrow2:" + _this.b);
      }, 200);
    },
    sayWithGlobalArrow: function sayWithGlobalArrow() {
      //函数体内this提升至全局作用域
      console.log("sayWithGlobalArrow1:", _this2.b);
      setTimeout(function () {
        return console.log("sayWithGlobalArrow2:" + _this2.b);
      }, 200);
    }
  };

  object.say();
  object.sayWithThat();
  object.sayWithArrow1();
  object.sayWithArrow2();
  object.sayWithGlobalArrow();
}
//# sourceMappingURL=testArrow.js.map