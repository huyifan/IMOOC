# 1、移动端的特点：

- 页面跑在手机端-H5页面

- 跨平台

- 基于移动端的浏览器webView——基于webKit

- 更高的适配性（屏幕碎片化）和性能要求

# 2、常见的移动web适配方法


![](https://upload-images.jianshu.io/upload_images/5471980-7ac4952c7e040b79.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![](https://upload-images.jianshu.io/upload_images/5471980-6adbb341a8fa5de3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


## 2.1设置百分比：

通过设置容器的width百分比来达到响应式布局，存在较大的局限性。


## 2.2媒体查询：

![](https://upload-images.jianshu.io/upload_images/5471980-31d0e094ccf1d642.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

媒体查询的本质是通过css标签或link标签来表示显示屏幕的特性，当显示屏幕对应不同宽度时，动态加载不同的css样式。

![](https://upload-images.jianshu.io/upload_images/5471980-8c286d0aa9694241.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


# 3、rem原理与简介

![](https://upload-images.jianshu.io/upload_images/5471980-98955a13f7cdb53d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 3.1 简介
总结如下：
（1）rem是一个相对单位，它的大小与根节点的font-size有关

（2）可以通过js判断屏幕宽度，从而动态设置font-size

## 3.2动态修改rem——@media
通过设置多个@media，来设置font-size

![](https://upload-images.jianshu.io/upload_images/5471980-cb0fe0a6775fa4d4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

这样的缺点就是不够灵活，需要写多套配置文件

##3.33.2动态修改rem——js动态控制


![](https://upload-images.jianshu.io/upload_images/5471980-297f3ce12441e470.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


# 4、rem进阶与实战

## 4.1 rem进阶内容

（1）rem基准值

>1rem=？px ，？即为基准值

（2）rem数值计算与构建

>100px=？rem ，此过程为rem数值计算

（3）rem与scss结合使用
