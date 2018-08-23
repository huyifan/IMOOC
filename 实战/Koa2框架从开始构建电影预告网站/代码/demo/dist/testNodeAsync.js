"use strict";

var asyncPromise = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var arr1, arr2;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            arr1 = [0, 1, 2];
            arr2 = [3, 4, 5];


            console.log("aaa");

            _context.next = 5;
            return function () {
              return new Promise(function (resolve, reject) {
                arr1.map(function (v, i) {
                  setTimeout(function () {
                    console.log("arr1:" + v);
                    if (i === arr1.length - 1) resolve();
                  }, 100);
                });
              });
            }();

          case 5:

            console.log("bbb");

            _context.next = 8;
            return function () {
              return new Promise(function (resolve, reject) {
                arr2.map(function (v, i) {
                  setTimeout(function () {
                    console.log("arr1:" + v);
                    if (i === arr1.length - 1) {
                      console.log("ccc");
                      resolve();
                    }
                  }, 100);
                });
              });
            }();

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function asyncPromise() {
    return _ref.apply(this, arguments);
  };
}();

/*
* promisify会把带有回调函数的函数包装成一个Promise对象返回
* */


var asyncPromisify = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var util, arr1, arr2;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            util = require('util');
            arr1 = [0, 1, 2];
            arr2 = [3, 4, 5];

            console.log("aaa");

            _context2.next = 6;
            return util.promisify(function (cb) {
              arr1.map(function (v, i) {
                setTimeout(function () {
                  console.log("arr1:" + v);
                  if (i === arr1.length - 1) cb();
                }, 100);
              });
            })();

          case 6:

            console.log("bbb");

            _context2.next = 9;
            return util.promisify(function (cb) {
              arr2.map(function (v, i) {
                setTimeout(function () {
                  console.log("arr1:" + v);
                  if (i === arr1.length - 1) {
                    console.log("ccc");
                    cb();
                  }
                }, 100);
              });
            })();

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function asyncPromisify() {
    return _ref2.apply(this, arguments);
  };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * Created by hugo on 2018/8/22.
 */

//promise()
//asyncPromise()
asyncPromisify();
//normal()

function normal() {
  var arr1 = [0, 1, 2];
  var arr2 = [3, 4, 5];

  console.log("aaa");

  arr1.map(function (v, i) {
    setTimeout(function () {
      return console.log("arr1:" + v);
    }, 100);
  });

  console.log("bbb");

  arr2.map(function (v, i) {
    setTimeout(function () {
      return console.log("arr2:" + v);
    }, 1);
  });

  console.log("ccc");
}

function promise() {
  var arr1 = [0, 1, 2];
  var arr2 = [3, 4, 5];

  console.log("aaa");

  return new Promise(function (resolve, reject) {
    arr1.map(function (v, i) {
      setTimeout(function () {
        console.log("arr1:" + v);
        if (i === arr1.length - 1) resolve();
      }, 100);
    });
  }).then(function () {
    console.log("bbb");

    return new Promise(function (resolve, reject) {
      arr2.map(function (v, i) {
        setTimeout(function () {
          console.log("arr1:" + v);
          if (i === arr1.length - 1) {
            console.log("ccc");
            resolve();
          }
        }, 100);
      });
    });
  });
}
//# sourceMappingURL=testNodeAsync.js.map