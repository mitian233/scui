# Shiny Colors UI · SCUI

基于 **Vue 3 + TypeScript + Reka UI** 的通用组件库，参考 [アイドルマスター シャイニーカラーズ](https://shinycolors.enza.fun/) 的游戏 UI。包含 16 个组件、47 份原游戏 UI 素材、交互展示页和浏览器测试。

当前版本：**0.1.0**。

## 本地运行

```sh
npm install
npm run dev
npm run typecheck
npm run build
npm test
```

`dev` 启动组件展示页，用于预览外观、体验交互及查看用法；`build` 输出展示站点到 `dist-demo/`、可独立引用的 ES 组件库和类型声明到 `dist/`。组件使用标准 DOM，不依赖 PixiJS。

## 引用组件库

在项目根目录构建并打包：

```sh
npm run build
npm pack
```

在另一个 Vue 项目中安装生成的组件包与依赖：

```sh
npm install /路径/shiny-colors-ui-0.1.0.tgz
npm install vue@^3.5 reka-ui@^2
```

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { ScButton, ScDialog, ScCheckbox, ScSlider } from 'shiny-colors-ui'
import 'shiny-colors-ui/style.css'

const open = ref(false)
const selected = ref(true)
const volume = ref(65)
</script>

<template>
  <ScDialog v-model:open="open" title="设置" description="调整界面设置。">
    <template #trigger><ScButton variant="primary">打开设置</ScButton></template>
    <ScCheckbox v-model="selected" label="播放音效" />
    <ScSlider v-model="volume" label="背景音乐音量" />
  </ScDialog>
</template>
```

所有交互组件使用标准 DOM；Reka UI 提供页签键盘导航、弹窗焦点锁定与恢复、选择菜单、滑块等行为。主题样式用 `.sc-` 前缀，设计变量可在 `.sc-theme` 或应用根节点上覆盖。

## 组件接口

| 组件 | 主要 props / model | 插槽 / 说明 |
| --- | --- | --- |
| `ScButton` | `variant`: primary / secondary / danger / ghost；`size`: sm / md / lg；`disabled`、`loading`、`type` | 默认内容、`icon`；普通 click 事件透传 |
| `ScImageButton` | `preset`: confirm / cancel / ok / yes / no / back / close / plus / minus；`label`、`disabled` | 原游戏按钮，文字已绘制在图中；`label` 控制无障碍名称 |
| `ScIcon` | `name`: 素材文件名；`size`、`label` | 不传 label 时作为装饰图标 |
| `ScPanel` | `title`；`variant`: default / inset | 默认内容、`footer` |
| `ScDialog` | `v-model:open`；`title`（必传）、`description`、`closeLabel` | 默认内容、`trigger`（单个按钮）、`footer="{ close }"` |
| `ScTabs` | `v-model`: string；`items`: `{ value, label, disabled? }[]`；`label` | 以各 item.value 命名的面板插槽 |
| `ScCheckbox` | `v-model`: boolean；`label`（必传）、`disabled` | 原作勾选素材 |
| `ScSwitch` | `v-model`: boolean；`label`（必传）、`disabled` | ON / OFF 状态 |
| `ScSlider` | `v-model`: number；`label`（必传）、`min`、`max`、`step`、`disabled` | 默认 0–100；方向键调整 |
| `ScInput` | `v-model`: string；`label`（必传）、`placeholder`、`error`、`hint`、`disabled`、`type` | 原生属性透传到 input；错误关联输入框并宣布 |
| `ScSelect` | `v-model`: string；`label`（必传）、`items`: `{ value, label, disabled? }[]`、`placeholder`、`disabled` | 选择菜单通过 Portal 渲染 |
| `ScNumberField` | `v-model`: number；`label`（必传）、`min`、`max`、`step`、`disabled` | 默认 0–99；原游戏加减按钮 |
| `ScProgress` | `value`；`max`、`label`、`showValue` | 数值限制在有效范围，使用 progressbar 语义 |
| `ScBadge` | `variant`: pink / blue / neutral | 默认文本内容 |
| `ScStat` | `tone`: vocal / dance / visual / mental / skill；`label`、`value` | 原作属性图标、演示属性面板 |
| `ScAccordion` | `v-model`: string；`items`: `{ value, title, content?, disabled? }[]` | 同 value 命名的内容插槽；单项展开、可收起 |

## 设计与素材

自定义文字按钮、面板、页签、表单外观以 CSS 实现。`ScImageButton`、复选框、属性图标与滑块手柄使用原始图集素材。

默认采用日中系统圆体/无衬线字体栈。通过全局 `--sc-font` 配置自定义字体，Portal 弹窗和下拉菜单也会继承全局配置：

```css
/* 在组件库样式之后加载；字体文件与 @font-face 由使用方自行接入。 */
:root, .sc-theme {
  --sc-font: '使用方接入的字体', 'Microsoft YaHei', sans-serif;
}
```

素材位于 `src/assets/game/`，构建时打包到组件库，运行时无需访问游戏 CDN。`gameAsset('icon_jewel.png')` 返回打包后的 URL；`gameAssets` 为全部素材地址表。

`research/assets-manifest.json` 记录采集时间、公开游戏源站、图集地址、裁剪区域、旋转与透明裁剪信息。素材是从游戏浏览器已正常加载的 PixiJS 纹理导出 PNG，使用原渲染器处理图集旋转/trim；没有调用游戏业务接口，也没有修改游戏状态。

如需重新采集，使用一个开启远程调试的独立 Chrome，打开游戏并等待标题页面加载，然后执行：

```sh
node scripts/collect-game-assets.mjs http://127.0.0.1:9222
```

脚本只连接已有游戏页；不会自动注册、登录或开始游戏。游戏构建可能更新，若找不到公开加载器，脚本会停止并要求检查新版结构。

## 验证

`npm test` 使用 Playwright，在 Windows 优先使用已安装的 Chrome/Edge，也可通过 `SCUI_BROWSER_PATH` 指定浏览器。其他环境可执行 `npx playwright install chromium` 后运行。测试覆盖双向绑定、表单校验、禁用/加载状态、页签键盘操作、弹窗焦点管理、进度、资源过滤与桌面/手机横向溢出。先构建再运行测试，会额外验证编译后的组件库在独立页面中工作；没有构建产物时仅跳过这一项。

`research/previews/` 保存验证时的桌面、手机和弹窗截图。
