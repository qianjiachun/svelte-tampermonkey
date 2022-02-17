# svelte-tampermonkey
> 🚀基于Vite + Svelte，面向全业务场景的Tampermonkey油猴脚本开发脚手架
> 
**[English](README.md) | 简体中文**

## Header
1. `src/header.txt`可修改tampermonkey的信息

## 起步
1. `npm install`
2. `npm run dev`
3. 将`dist/main.user.debug.js`的内容添加到tampermonkey中
4. 访问[百度](https://www.baidu.com)，即可在右上角看到效果
   - 每次修改代码会热更新，只需要刷新页面即可

## 发布
1. `npm run build`
2. 将`dist/main.user.js`的代码发布


## QA

### 为什么选择Vite + Svelte
1. "no runtime" 产物体积足够小，满足脚本发布要求
2. Tree Shaking
3. Svelte提供的响应式完全满足脚本开发需求
4. Rollup打包速度快
5. More...

### 为什么不使用TypeScript
1. 首先这并不是绝对的，项目当然可以使用ts
2. 脚本往往迭代速度都是很快的，大部分情况下使用ts只会徒增心智负担
3. 减少不必要的麻烦，使开发更加灵活

### 为什么这样设计目录结构
1. 为了满足绝大部分的业务场景
2. 方便所有模块解耦，互不影响开发
3. 满足最小可重构原则

## 结构
```
├─dist
└─src
    ├─pages
    │  └─www  
    │      └─packages
    │          └─TestA
    │              ├─apis
    │              ├─components
    │              └─views
    └─utils
```

### 开发建议
1. `pages`下的文件夹建议根据二级域名去分类，例如:
    - www.baidu.com => www
    - test.baidu.com => test
2. 需要响应式的div就在`views`下新建`svelte文件`进行编写
3. 其他场景正常编写js文件即可