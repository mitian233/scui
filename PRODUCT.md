# SCUI

## Platform
web

## Stack
用户指定 Vue 和 Reka UI。使用 Vue 3 Composition API、TypeScript 和 Vite；组件库独立导出，附交互展示页。

## Product Purpose
从原游戏公开页面获取资源，以原游戏的 UI 设计为依据，创建通用 Vue 组件库。

## Capabilities and Constraints
通用组件支持自定义内容、标准 DOM、键盘交互和双向绑定；无需 PixiJS 运行时。组件目录提供交互演示与用法示例。

包含 23 个组件：基础按钮、图标、表单、面板、弹窗、导航与反馈，以及原作筛选按钮、ON/OFF 选择组、加载指示器、标题栏、NEW 角标、独立选择项和互斥选择组。面板、弹窗、页签和输入框提供可选原作皮肤；进度条提供橙色任务样式。

## Brand Commitments
沿用原游戏的粉色按钮、紫灰描边、浅色面板和图标。原游戏素材与组件代码分开记录来源，不把游戏素材声明为原创。

## Typography Decision
默认使用日中系统字体栈，通过 `--sc-font` 配置自定义字体。原图按钮中已有的日文文字保留原样。

## Evidence on Hand
research/assets-manifest.json 保存素材名称、图集、原始尺寸、源路径与采集时间。src/assets/game 保存浏览器正常加载并渲染的 UI 素材。
