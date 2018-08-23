'use strict';

/**
 * Created by hugo on 2018/8/22.
 */

var co = require('co');
var fetch = require('node-fetch');

var generatorFun = /*#__PURE__*/regeneratorRuntime.mark(function generatorFun() {
  var res, movie, name;
  return regeneratorRuntime.wrap(function generatorFun$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return fetch('https://api.douban.com/v2/movie/1291843');

        case 2:
          res = _context.sent;
          _context.next = 5;
          return res.json();

        case 5:
          movie = _context.sent;
          name = movie.alt_title;

          console.log("name：", name);

        case 8:
        case 'end':
          return _context.stop();
      }
    }
  }, generatorFun, this);
});

/*
*将迭代器包装成promise对象
* */
co(generatorFun);

run(generatorFun);

function run(generator) {
  var iterator = generator();
  var it = iterator.next();
  var promise = it.value;

  promise.then(function (data) {
    var it2 = iterator.next(data);
    var promise2 = it2.value;
    promise2.then(function (data2) {
      iterator.next(data2);
    });
  });
}
//# sourceMappingURL=testGenerator.js.map