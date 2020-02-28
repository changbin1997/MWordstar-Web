import 'bootstrap';  //  引入Bootstrap
import './bootstrap.min.css';
import './icon.css';  //  引入字体图标
import './style.scss';  //  引入主题样式
import app from './app';  //  引入主题JS
import hljs from 'highlight.js/lib/highlight';  //  引入highlight.js

//  引入代码高亮效果
import hlPowershell from 'highlight.js/lib/languages/powershell';
import hlScss from 'highlight.js/lib/languages/scss';
import hlPhp from 'highlight.js/lib/languages/php';
import hlJavaScript from 'highlight.js/lib/languages/javascript';
import hlXML from 'highlight.js/lib/languages/xml';
import hlBash from 'highlight.js/lib/languages/bash';
import hlShell from 'highlight.js/lib/languages/shell';
import hlJSON from 'highlight.js/lib/languages/json';
import hlMarkdown from 'highlight.js/lib/languages/markdown';
import hlYaml from 'highlight.js/lib/languages/yaml';
import hlCSS from 'highlight.js/lib/languages/css';
import hlIni from 'highlight.js/lib/languages/ini';
import hlSql from 'highlight.js/lib/languages/sql';

import 'highlight.js/styles/vs2015.css';  //  引入highlight的样式

app();

//  注册各种语言的代码高亮效果
hljs.registerLanguage('powershell', hlPowershell);
hljs.registerLanguage('scss', hlScss);
hljs.registerLanguage('php', hlPhp);
hljs.registerLanguage('javascript', hlJavaScript);
hljs.registerLanguage('xml', hlXML);
hljs.registerLanguage('bash', hlBash);
hljs.registerLanguage('shell', hlShell);
hljs.registerLanguage('json', hlJSON);
hljs.registerLanguage('markdown', hlMarkdown);
hljs.registerLanguage('yaml', hlYaml);
hljs.registerLanguage('css', hlCSS);
hljs.registerLanguage('ini', hlIni);
hljs.registerLanguage('sql', hlSql);

hljs.initHighlightingOnLoad();