这是 [MWordstar](https://github.com/changbin1997/MWordStar) 使用 Webpack 构建的前端部分。这个相比 MWordstar 中的前端部分来说，主要把一堆 CSS、JS、字体 文件打包成了两个文件，一个 CSS 和 一个 JS，可以减少 HTTP 请求的次数。

## 使用

在 `dist` 目录中有已经打包好的文件，`bundle.js` 和 `style.css` 就是打包好的文件。

不过 `dist` 中打包好的文件包含的代码高亮的语言很少，只包含了我博客中用到的语言。如果您对前端开发有一定了解的话，建议您重新打包，可定制代码高亮的语言。

打包完成后包含一个 `bundle.js` 和一个 `style.css` ，需要做的就是在 `php` 文件中引入打包后的 `bundle.js` 和 `style.css` 。首先需要删除原来引入的 `CSS` 和 `JS` ，打开 `header.php` ，删除下面的几行代码：

```html
<link rel="stylesheet" href="<?php $this->options->themeUrl('css/bootstrap.min.css'); ?>" type="text/css">
<link rel="stylesheet" href="<?php $this->options->themeUrl('css/icon.css'); ?>" type="text/css">
<link rel="stylesheet" href="<?php $this->options->themeUrl('css/vs2015.css'); ?>" type="text/css">
<script type="text/javascript" src="<?php $this->options->themeUrl('js/jquery-3.4.1.min.js'); ?>"></script>
<script type="text/javascript" src="<?php $this->options->themeUrl('js/bootstrap.min.js'); ?>"></script>
<script type="text/javascript" src="<?php $this->options->themeUrl('js/highlight.pack.js'); ?>"></script>
<script type="text/javascript" src="<?php $this->options->themeUrl('js/app.js'); ?>"></script>
``` 

`<link rel="stylesheet" href="<?php $this->options->themeUrl('css/style.css'); ?>" type="text/css">` 可以不用删除。

删除完成后把打包好的 `style.css` 和 `bundle.js` 复制到 `MWordstar` 目录下的 `css` 和 `js` 目录，遇到同名文件就选择替换。

打开 `footer.php` 在 `</body>` 的前面增加一行：

```html
<script src="<?php $this->options->themeUrl('js/bundle.js'); ?>"></script>
```

完成后可以删除多余的 CSS 和 JS，css 目录下除了 `style.css` 外都可以删除，js 目录中除了 `bundle.js` 外都可以删除，`fonts` 目录也可以删除。

## 构建

克隆项目，安装 Node.js。

进入项目目录，输入：

```powershell
npm install
```

安装依赖。

安装完成后输入：

```powershell
npm run build
```

打包。

打包后的文件就在 `dist` 目录中，按照上面的使用方法引入就可以了。

在 `dist` 目录中还包含一个 `html` 文件，这个 `html` 主要是用来预览效果的。

## 代码高亮

在 `src/main.js` 中可以配置代码高亮，配置方法如下：

```javascript
import hlPhp from 'highlight.js/lib/languages/php';  //  引入PHP高亮模块
hljs.registerLanguage('php', hlPhp);  //  注册PHP代码高亮
```

如果在使用过程中遇到问题可以到 [我的博客](https://www.misterma.com) 留言。