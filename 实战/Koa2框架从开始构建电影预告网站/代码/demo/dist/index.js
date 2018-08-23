'use strict';

var _fs = require('fs');

var _util = require('util');

var _path = require('path');

(0, _util.promisify)(_fs.readFile)((0, _path.resolve)(__dirname, '../package.json')).then(function (data) {
  data = JSON.parse(data);
  console.log("===:", data.name);

  (0, _fs.writeFileSync)((0, _path.resolve)(__dirname, './name'), String(data.name), 'utf8');
}); /**
     * Created by hugo on 2018/8/23.
     */
/*
 * 入口文件
 * */
//# sourceMappingURL=index.js.map