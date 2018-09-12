/**
 * Created by hugo on 2018/8/21.
 */
require("./index.scss");


//适配框架

(function (win, lib) {
  let doc = win.document;
  let docEl = doc.documentElement;
  let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
  let htmlDOM = document.getElementsByTagName('html')[0];
  htmlDOM.style.fontSize = htmlWidth / 10 + 'px';
  let rem;
  let tid;//timer定时器

  function refreshRem() {
    var width = docEl.clientWidth || doc.body.clientWidth;
    width = width > 768 ? 640 : width;
    rem = width / 3.75; //根据设计稿尺寸(375px)修改
    document.style.fontSize = rem + 'px';
  }

  win.addEventListener('resize', function () {
    clearTimeout(tid);
    tid = setTimeout(refreshRem, 300);
  }, false);
  win.addEventListener('pageshow', function (e) {
    if (e.persisted) {
      clearTimeout(tid);
      tid = setTimeout(refreshRem, 300);
    }
  }, false)

  /**
   * rem to px
   * @param d
   * @returns {number}
   */
  lib.rem2px = function (d) {
    var val = parseFloat(d) * rem;
    if (typeof d === 'string' && d.match(/rem$/)) {
      val += 'px';
    }
    return val;
  };


  /**
   * px to rem
   * @param d
   * @returns {number}
   */
  lib.px2rem = function (d) {
    var val = parseFloat(d) / rem;
    if (typeof d === 'string' && d.match(/px$/)) {
      val += 'rem';
    }
    return val;
  };

  // win.addEventListener('resize', (e) => {
  //   let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
  //
  //   htmlDOM.style.fontSize = htmlWidth / 10 + 'px';
  //
  // })

})(window, window.lib || (window.lib = {}));
