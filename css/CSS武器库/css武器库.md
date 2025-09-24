# CSS核心武器库 v1.0

这是一份动态更新的、服务于“任务驱动”式学习的CSS核心属性清单。

---
## 布局 (Layout)
* `display`: (核心) 定义元素的布局模式。
  * `block`: 块级，独占一行。
  * `inline`: 内联，随文字流动。
  * `flex`: **弹性盒子布局**的启动器。
  * `grid`: (未来学习) 二维网格布局的启动器。
  * `none`: 隐藏元素。
* `flex-direction`: (Flex) 定义主轴的方向 (`row` | `column`)。
* `justify-content`: (Flex) 定义项目在**主轴**上的分布。
* `align-items`: (Flex) 定义项目在**交叉轴**上的对齐。
* `flex-wrap`: (Flex) 定义项目是否换行 (`nowrap` | `wrap`)。
* `gap`: (Flex/Grid) 定义项目之间的间距。
* `flex`: (Flex项目) 定义项目的弹性伸缩能力 (例如 `flex: 1;`)。

---
## 盒模型 & 间距 (Box Model & Spacing)
* `width`: 宽度。
* `height`: 高度。
* `padding`: **内边距** (盒子内部，内容与边框之间的空间)。
* `margin`: **外边距** (盒子外部，与其他盒子的距离)。
* `border`: **边框**。
* `box-sizing`: (关键) 改变盒模型的计算方式。
  * `content-box`: (默认) `width`只包含内容。
  * `border-box`: (推荐) `width`包含内容 + `padding` + `border`。

---
## 字体排版 (Typography)
* `font-family`: 字体族。
* `font-size`: 字体大小 (单位 `px`, `em`, `rem`)。
* `font-weight`: 字体粗细 (`normal` | `bold` | `100`...`900`)。
* `line-height`: 行高。
* `color`: 文字颜色。
* `text-align`: 文本水平对齐 (`left` | `center` | `right`)。
* `text-decoration`: 文本装饰 (`none` | `underline`)。

---
## 颜色 & 背景 (Color & Background)
* `background-color`: 背景颜色。
* `background-image`: 背景图片。
* `opacity`: 透明度 (从`0`到`1`)。

---
## 边框 & 装饰 (Borders & Decoration)
* `border-radius`: **圆角**。
* `box-shadow`: **盒子阴影**。

---
## 交互 & 动画 (Interaction & Animation)
* `:hover`, `:active`, `:focus`: 描述元素状态的**伪类**。
* `cursor`: 鼠标指针样式 (`pointer` | `default` 等)。
* `transition`: **过渡动画**。