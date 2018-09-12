
# 1、常见的移动web适配方法

PC的适配原则：
（1）在根div上设定一个固定宽度 960px/1000px并居中
（2）在使用盒子模型时，会定宽定高
（3）当需要横向布局时，使用display:inline-block完成

移动web的适配：
（1）高度固定，宽度百分比
（2）使用flex的布局模式，进行横向或纵向布局
（3）media query 媒体查询

# 2、media query使用
原理：**手动判断屏幕的尺寸，然后编写不同的样式**
缺点：控制比较繁琐
详见mediaQuery目录下的index.html
> 注意：若要mediaQuery生效，必须设置  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Title</title>
  <style type="text/css">
    body {
      margin: 0 auto;
      width: 90%;
    }

    .box {
      width: 100%;
      height: 200px;
      background-color: #6170b1;
    }

    @media screen and (max-width: 320px) {
      .inner {
        width: 25%;
        height: 100%;
        background-color: #f54225;
      }
    }

    @media screen and (min-width:322px) {
      .inner {
        width: 25%;
        height: 100%;
        background-color: #7ae0f5;
      }
    }
  </style>
</head>
<body>
<div class="box">
  <div class="inner"></div>
</div>
</body>
</html>
```
# 3、rem原理与简述
- rem就是一个字体单位，根据html根元素的font-size大小动态改变
- 适配原理：将px替换成rem，然后动态修改html的font-size适配
- 兼容性： ios6以上和android2.1以上，基本覆盖了所有流行手机

## 3.1 从view-port入手
viewport的meta是移动端独有的一个标签，用以设定当前设备的一些显示信息
```
  <meta name="viewport" content="width=device-width, initial-scale=1.0,user-scalable=no" />
```
## 3.2 使用rem替换px
在未设置任何font-size的情况下，默认字体大小为16px。

>1rem=浏览器默认字体大小

即默认情况下 1rem=16px

因此，如果改变了浏览器默认字体的代大小，也就改变了1rem表示的具体px。

## 3.3 动态设置font-size
既然rem的具体px数值与根元素的font-size大小有关，那么我们只需要根据屏幕宽度，动态设置rem即可。
动态设置的方法也有两种：1、使用mediaQuery（移动端碎片化严重，不推荐） 2、Js动态实现。
这里只介绍第二种js的动态设置。

核心js代码：
```
<script>
  window.onload = function () {
    /*720代表设计师给的设计稿的宽度，你的设计稿是多少，就写多少;100代表换算比例，这里写100是
     为了以后好算,比如，你测量的一个宽度是100px,就可以写为1rem,以及1px=0.01rem等等*/

    /*
     * 也就说，在屏幕宽度为720px的情况下，1rem=100px
     * */

    getRem(720, 100)
  };
  window.onresize = function () {
    getRem(720, 100)
  };

  function getRem(pwidth, prem) {
    var html = document.getElementsByTagName("html")[0];
    var oWidth = document.body.clientWidth || document.documentElement.clientWidth;
    html.style.fontSize = oWidth / pwidth * prem + "px";
  }
</script>
```
从上面可以得到font-size的计算公式
>【**！！重点！！**】 font-size=（开发页面宽度/设计稿的宽度）*换算比例

这里说明一下换算比例，也就是你希望1rem=？px ，如果换算比例是100，那么1rem就等于100px。

详细代码地址：[移动端适配demo](https://github.com/huyifan/IMOOC/tree/master/%E7%A7%BB%E5%8A%A8%E7%AB%AFweb%E5%BC%80%E5%8F%91%E9%80%82%E9%85%8D)
>笔者个人订阅号~欢迎小伙伴们关注
![微信公众号-感谢关注](https://upload-images.jianshu.io/upload_images/5471980-9f5b4e5446178188.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

>若有疑问可以QQ联系笔者，虽然不一定100%解决你的问题，但是可以交流探讨一波：**2276604211**