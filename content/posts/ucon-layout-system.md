---

title: 'UCON: Layout System'
description:
toc: true
authors: []
tags: []
categories: []
series: []
date: 2022-05-29T15:32:20+08:00
lastmod: 2022-05-29T15:32:20+08:00
featuredVideo:
featuredImage:
draft: false

---

写一点上上周想到的。[<botton style="margin-left:30px;border:1px black solid;">直接来到正题</botton>](#新的思路)

## 失败的尝试

当时在为ucon想一个布局的方法，这个方法对于UCON呢，就相当于CSS对于网页。

但是我们不能用CSS，因为：

- 内容庞大，我无法实现，也就意味着不能满足非浏览器的运行环境

- 没意思，重复造轮子的行为

CSS是控制所有样式的，而我这个标题，Layout System，就是处理布局的。

所以当时初步设计了一个布局系统，总体上模式有点像CSS的简化版，无非是`block`,`inline`之类的。

但是突出`float`属性的作用，以及宽、高可以控制范围。

然后试着写了写实现代码，直接就失败了，因为逻辑矛盾太多，一不小心就要进入死循环。要破除，只能加很多规则去约束他，那还不如本来的CSS的布局系统。

那就没意思了。

## 新的思路

一些软件里（尤其是制图、UI设计之类的），会有一个对齐功能。

但是这是对齐，我计划设计一个模式，一切东西都用某种基准线来定位，姑且叫这种基准线stick。

>  **举个例子**：
> 
> 一个按钮，坐标(10px,10px)，宽40px，高20px。
> 
> **CSS**:
> 
> ```css
> button{
>     position:absolute;
>     left:10px;
>     top:10px;
>     width:40px;
>     height:20px;
> }
> ```
> 
> **UCON**：
> 
> - 定义v-stick（vertical stick），绝对（或者说相对于app），10px，就叫left
> 
> - 定义v-stick，left+40px，叫right
> 
> - 定义h-stick（horizontal stick），绝对，10px，叫top
> 
> - 定义h-stick，top+20px，叫bottom
> 
> - button的位置：{left,right,top,bottom}

看上去，UCON的这套麻烦一点

其实不然。这是伪代码，实际实现起来会有如下功能：

- 名字不必自己给，有一定的算法生成

- 有快速生成的工具函数，只要用，就可以写得和CSS的一样，比如：
  
  - 矩形
  
  - 取中（心）点
  
  - 根据点生成h&v-stick
  
  - ...

这是开发者方面的，对于运行时，也有好处：

- 直接生成的依赖树，更新视图时效率极高

- 计算量小，不用像CSS那样要考虑很多东西

关键的技术难题，应该还是语法糖和命名算法。

## 另：这不是新的思路

1. 好像初一做ucon的前身的前身的前身的buttons(in cpp)时，好像就有过类似想法。可是当时太差了，搞不清楚（说不定我现在也搞不清楚），反正忘掉了啊。。。

2. CSS这套真的强，在这个问题下，要不出逻辑漏洞真不简单。



&emsp;&emsp;此致

敬礼！