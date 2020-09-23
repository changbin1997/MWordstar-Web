//  引入Bootstrap
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/index';
import 'bootstrap/js/dist/tooltip';
import 'bootstrap/js/dist/modal';
import 'bootstrap/js/dist/dropdown';
import './style/bootstrap.min.css';

import './style/icon.css';  //  引入字体图标
import './style/style.scss';  //  引入主题样式
import app from './js/app';  //  引入主题JS
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
import hlApache from 'highlight.js/lib/languages/apache';
import hlCpp from 'highlight.js/lib/languages/cpp';
import hlCoffeeScript from 'highlight.js/lib/languages/coffeescript';
import hlDart from 'highlight.js/lib/languages/dart';
import hlDockerfile from 'highlight.js/lib/languages/dockerfile';
import hlGo from 'highlight.js/lib/languages/go';
import hlJava from 'highlight.js/lib/languages/java';
import hlKotlin from 'highlight.js/lib/languages/kotlin';
import hlLess from 'highlight.js/lib/languages/less';
import hlLua from 'highlight.js/lib/languages/lua';
import hlMakefile from 'highlight.js/lib/languages/makefile';
import hlMatlab from 'highlight.js/lib/languages/matlab';
import hlNginx from 'highlight.js/lib/languages/nginx';
import hlObjectiveC from 'highlight.js/lib/languages/objectivec';
import hlPerl from 'highlight.js/lib/languages/perl';
import hlPython from 'highlight.js/lib/languages/python';
import hlRuby from 'highlight.js/lib/languages/ruby';
import hlRust from 'highlight.js/lib/languages/rust';
import hlSwift from 'highlight.js/lib/languages/swift';
import hlTypeScript from 'highlight.js/lib/languages/typescript';

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
hljs.registerLanguage('apache', hlApache);
hljs.registerLanguage('cpp', hlCpp);
hljs.registerLanguage('coffeescript', hlCoffeeScript);
hljs.registerLanguage('dart', hlDart);
hljs.registerLanguage('dockerfile', hlDockerfile);
hljs.registerLanguage('go', hlGo);
hljs.registerLanguage('java', hlJava);
hljs.registerLanguage('kotlin', hlKotlin);
hljs.registerLanguage('less', hlLess);
hljs.registerLanguage('lua', hlLua);
hljs.registerLanguage('makefile', hlMakefile);
hljs.registerLanguage('matlab', hlMatlab);
hljs.registerLanguage('nginx', hlNginx);
hljs.registerLanguage('objectivec', hlObjectiveC);
hljs.registerLanguage('perl', hlPerl);
hljs.registerLanguage('python', hlPython);
hljs.registerLanguage('ruby', hlRuby);
hljs.registerLanguage('rust', hlRust);
hljs.registerLanguage('swift', hlSwift);
hljs.registerLanguage('typescript', hlTypeScript);

hljs.initHighlightingOnLoad();