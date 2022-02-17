# svelte-tampermonkey
> 🚀 Vite + Svelte Tampermonkey boilerplate

**English | [简体中文](README.zh-CN.md)**

## Header
1. `src/header.txt` can edit tampermonkey header info

## Start
1. `npm install`
2. `npm run dev`
3. Copy `dist/main.user.debug.js` to tampermonkey
4. Visit [百度](https://www.baidu.com)，you can see the effect in the upper right corner
   - Every time you modify the code, it will be hot updated. You only need to refresh the page

## Build
1. `npm run build`
2. Release `dist/main.user.js`


## QA

### Why Vite + Svelte ?
1. "no runtime" and The file size is small enough to meet the script release requirements
2. Tree Shaking
3. The responsive provided by Svelte fully meets the needs of script development
4. Rollup packaging is fast
5. More...

### Why Not TypeScript ?
1. This is not absolute. Of course, you can use ts
2. Scripts often iterate very fast. In most cases, using TS will only increase the mental burden
3. Reduce unnecessary trouble and make development more flexible

### Why design the directory structure like this
1. In order to meet most of the needs
2. Facilitate the decoupling of all modules without affecting each other's development

## Directory Structure
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

### Development Suggestions
1. The folders under `pages` are recommended to be classified according to **the secondary domain name**, for example:
    - www.baidu.com => www
    - test.baidu.com => test
2. If you need a responsive div, create a new `svelte file` under `views` to write it
3. In other cases, you can write JS files normally