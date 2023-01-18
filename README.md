# StringsAlign.js for p5js

用于 [P5.js](http://www.p5js.org/) 的字符串对齐工具。

## 入门
### 安装
在 html 文档引入 p5js 后，插入指向 StringsAlign.js 的链接：
``` javascript
 <script src="https://cdn.jsdelivr.net/gh/hendasheng/StringsAlign-P5js@main/scripts/stringsAlign.js"></script>
```

### 用法
StringsAlign.js 主要提供两个方法：
 - `horizontal`
 - `vertical`
 分别用于横/纵向排列字符串。


``` javascript
let sa;

function setup() {
    ...
    sa = new StringsAlign();
    ...
}

function draw() {
    clear();
    ...
    sa.horizontal(strings, x, x_index, y, distanceMax, distance, reAxisX, graphics);
    sa.vertical(strings, x, y, y_index, distanceMax, distance, reAxisY, graphics);
    ...
}
```

**参数说明：**

| 参数 | 说明 | 备注 | 数据类型 |
| ------------- | ------------- | ------------- | ------------- |
|  `strings`  | 所需字符串  ||string|
| `x` | x 轴位置 ||float|
| `y` | Y 轴位置 ||float|
| `x_index` | 作为轴心的字符索引 | `sa.horizontal()`|int|
| `y_index` | 作为轴心的字符索引 | `sa.vertical()`|int|
| `distanceMax` | 最大间距 ||float|
| `distance` | 间距 ||float|
| `reAxisX` | 是否重置轴心 |`sa.horizontal()`|boolean|
| `reAxisY` | 是否重置轴心 |`sa.vertical()`|boolean|
| `graphics` | 位置基于 [Graphics](https://p5js.org/zh-Hans/reference/#/p5/createGraphics)（选填） | |[Graphics](https://p5js.org/zh-Hans/reference/#/p5/createGraphics)|

## 示例
### `sa.horizontal()` 水平排列
![20230117-191457](https://user-images.githubusercontent.com/20842136/212885315-5463264f-e7f6-4e11-bac2-8bc7fb91a243.gif)

[StringsAlign_Horizontal.js](example/StringsAlign_Horizontal.js)

### `sa.vertical()` 垂直排列
![20230117-192520](https://user-images.githubusercontent.com/20842136/212887460-9776eec5-fdb7-4bdb-adad-e80d237a4364.gif)

[StringsAlign_Vertical.js](example/StringsAlign_Vertical.js)

### 基于 Graphics
![20230117-200108](https://user-images.githubusercontent.com/20842136/212893932-fd3f6fd9-8a82-494c-a00e-67cb68a014d5.gif)
[StringsAlign_Graphics.js](example/StringsAlign_Graphics.js)

`x_index` `y_index` `reAxisX` `reAxisY` 几个参数从描述中看相对抽象，其实并不复杂，建议你在自己的项目中更换参数测试，已获得更直观的了解。

# 最后
以前做过一个叫 [Unicode 大世界](https://github.com/hendasheng/UnicodeBigBigWorld-forProcessing) 的小工具，主要是在 Processing 中更方便地引入 Unicode，当时就想做成插件，和所有插件一样，安装好可以直接饮用那种。
<img width="878" alt="image" src="https://user-images.githubusercontent.com/20842136/213111326-0c0c31e9-a758-4604-a153-a2db44c60b43.png">
可是 Processing 打包插件对我来说过于复杂，最后只能让大家笨笨地复制代码，再粘贴到本地项目中使用，虽然也可以用，但是不够好玩，我特别想拥有一个有模有样的开源库。

正巧最近遇到关于字符串对齐的问题，困扰很久，这几天终于被解决了，然后就想到开源库的事情，上次 processing 没法打包，那 js 是不是可以？

我完全是外行啊，js 给我的感觉就是那种相比之下啥都更简单（不是容易）一点或者解决方案更多一点，查了一圈果然可以，如果深入的话当然还有很多问题要解决，以我目前对开源软件的粗浅理解，能在 html 中通过链接引入就算，所以就有了现在这个项目，你可以很轻松地引用，在此基础上加入自己的奇思妙想，如果你遇到什么问题欢迎[提问、留言](https://github.com/hendasheng/StringsAlign-P5js/issues)，目前还是很基础的版本，接下来会继续更新，希望你喜欢。🤗 🎉