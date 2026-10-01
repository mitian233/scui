# SCUI

## Platform
web

## Stack
用户指定 Vue 和 Reka UI。使用 Vue 3 Composition API、TypeScript 和 Vite；组件库独立导出，附交互展示页。

## Product Purpose
从 https://shinycolors.enza.fun 获取公开资源，以原游戏的 UI 设计为依据，创建通用 Vue 组件库。

## Capabilities and Constraints
通用组件支持自定义内容、标准 DOM、键盘交互和双向绑定；无需 PixiJS 运行时。组件目录提供交互演示与用法示例。

## Brand Commitments
沿用原游戏的粉色按钮、紫灰描边、浅色面板和图标。原游戏素材与组件代码分开记录来源，不把游戏素材声明为原创。

## Typography Decision
默认使用日中系统字体栈，通过 `--sc-font` 配置自定义字体。原图按钮中已有的日文文字保留原样。

## Evidence on Hand
research/game-page.html、research/env.js 保存资源定位依据。research/assets-manifest.json 保存素材名称、图集、原始尺寸、源 URL 与采集时间。src/assets/game 保存浏览器正常加载并渲染的 UI 素材。
