---

title: "UCON: Next Generation"
description: 下一代ucon的构想。
toc: true
authors: []
tags: []
categories: []
series: []
date: 2022-05-04T09:54:24+08:00
lastmod: 2022-05-04T09:54:24+08:00
featuredVideo:
featuredImage:
draft: false

---

这几个月越发觉得之前似乎非常完美的ucon框架上有很多局限性。比如在开发`Switcher`、`Composition`时发现都需要实现`FakeCon`和`FakeLine`之类的，代码冗余，并且一些地方“颠覆”了响应性的设计初衷。

这些局限性主要是由于ucon的定位从一个文本输出框架变成了一个真正的UI框架，跨平台，不依赖css布局（也就是说从logger+enquirer的这一层变成react.js这一层，甚至是qt这一层）

因此花了大功夫设计了新的框架结构。

其中最大的改变是将component分成了units，units互相配合。

比如OutputUnit输出时输出大小，提交给PositionUnit计算位置，再提交给InputUnit计算焦点位置，从而获取输入。

> 下图是用OneNote做的，事件较早，略落后于实际开发情况。
>
> 比如实际上已经没有3种components了，每一层都是component，只是具体实现略有不同。

![ucon-next](/media/ucon-next.png)

开发难度挺大的。主要有如下几点：

 - 输出时的位置计算，要参照浏览器布局系统的实现
 - 分割平台通用和需要各平台分别实现的部分

另：ucon必须坚持对文本终端的支持！

开发做在名为next的branch里。[见Github](https://github.com/UniCoderGroup/ucon/tree/next)。