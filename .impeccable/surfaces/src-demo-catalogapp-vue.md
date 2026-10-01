---
version: 1
slug: "src-demo-catalogapp-vue"
primary_target: "src/demo/CatalogApp.vue"
related_targets: ["src/styles/demo.css"]
---

# SCUI 组件目录

## Scope and visitor mode

目标：`src/demo/CatalogApp.vue`。模式：Read / Operate；让使用者浏览通用组件、验证状态并查看 Vue 用法。

## Audience and task

面向接入组件库的 Vue 开发者。先看组件视觉与原始素材的区别，再直接操作按钮、输入、选择、标签页、弹窗及反馈状态，通过折叠代码示例了解使用方式。展示使用合成数据，不接入游戏服务。

## Direction contract

- **THESIS:** 将原作 UI 细节抽成可复用 DOM 组件，以交互演示和原图对照证明提取结果。
- **OWN-WORLD:** 原游戏粉色渐变纹理、紫灰描边、白色与浅紫面板、原始图标；继承既定视觉身份。
- **STORY:** 组件目录 → 可操作示例 → 用法 → 素材来源。
- **FIRST VIEWPORT:** 库名称与说明明确主体；桌面目录引导至第一组 CSS / 原图按钮对照。手机欢迎区域并排展示可编辑 CSS 按钮与原始素材按钮，在首屏呈现区别。
- **FORM:** 响应式组件文档；桌面固定侧栏，手机顶部横向滚动目录，示例双栏随宽度转为单栏。既定游戏 UI 提取无需随机 concept seed 或替换视觉世界。

## Memorable moment and proof

“同一种原作材料，一边是可编辑 DOM，一边是保留文字的原图。”按钮可操作，原作图标保持原始比例；弹窗具备真实焦点、关闭及窄屏滚动行为。依据为 `research/previews/desktop.png`、`mobile.png`、`mobile-dialog.png` 与 `src/assets/game`；CSS 复现不宣称逐像素一致。

## Constraints

以通用组件为主，默认使用日中系统字体栈，自定义字体通过 `--sc-font` 配置。
