---
name: SCUI
description: 将原作游戏的 UI 语言提取为通用 Vue / Reka UI 组件。
colors:
  pink: "#ff40aa"
  pink-dark: "#aa1765"
  pink-light: "#fff0f8"
  ink: "#615365"
  ink-muted: "#796c80"
  line: "#d7cddd"
  surface: "#ffffff"
  lavender: "#e6e4fc"
  blue: "#2c73bb"
  small-text: "#706075"
typography:
  display:
    fontFamily: "'Hiragino Maru Gothic ProN', 'Yu Gothic', 'Microsoft YaHei', 'Noto Sans CJK SC', sans-serif"
    fontSize: "clamp(28px, 3vw, 38px)"
    fontWeight: 800
    lineHeight: 1.3
    letterSpacing: "-.035em"
  headline:
    fontSize: "21px"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "-.02em"
  body:
    fontFamily: "'Hiragino Maru Gothic ProN', 'Yu Gothic', 'Microsoft YaHei', 'Noto Sans CJK SC', sans-serif"
    fontSize: "14px"
    lineHeight: 1.6
  label:
    fontSize: "14px"
    fontWeight: 700
    lineHeight: 1.6
  button:
    fontSize: "16px"
    fontWeight: 700
rounded:
  field: "7px"
  soft: "8px"
  control: "12px"
  dialog: "14px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "20px"
  xl: "24px"
components:
  button-primary:
    backgroundColor: "{colors.pink}"
    textColor: "{colors.surface}"
    typography: "{typography.button}"
    rounded: "{rounded.control}"
    padding: "0 23px"
    height: "52px"
  button-secondary:
    backgroundColor: "{colors.lavender}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.control}"
    padding: "0 23px"
    height: "52px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    padding: "0 23px"
    height: "52px"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.field}"
    padding: "0 14px"
    height: "44px"
  panel:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "{spacing.lg}"
---

# Design System: SCUI

## Overview

**Creative North Star: "原作 UI，原生交互"**

以原作游戏的 UI 为视觉依据：粉色渐变与细点纹理、紫灰轮廓、白色和浅紫面板，以及采集的原作图标。工作是提取这套既定视觉语言，而非随机选择新视觉世界；概念 seed 不适用。材质来自原作，不把渐变、纹理或描边一概当作应删除的装饰。

组件让同一种视觉语言承载自定义文本、状态和标准 DOM 交互。CSS 绘制的通用控件与原始图片控件是两个清晰的类别：前者复现材料和形状，后者保留图中的纹理和文字；不宣称 CSS 与原图逐像素一致。目录页的具体叙事和首屏安排记录在 surface brief，不作为所有使用者必须继承的页面布局。

**Key Characteristics:**
- 粉色表达主要动作和选中状态；紫灰描边连接不同控件。
- 控件保留有质感的渐变、细纹理、内缘高光和轻微底部阴影。
- 白色与浅紫面板承载内容；原作图片与可编辑 DOM 内容并置。
- 保留键盘焦点、状态语义及窄屏可用性。

## Colors

色彩保持原作的明亮粉色与紫灰关系，前景正文依靠稳定的深紫灰读取。

### Primary
- **闪耀粉**（`pink`）：主按钮、开关选中状态与进度填充的颜色基准；真实控件使用渐变，不以单色填充替代材质。
- **深粉**（`pink-dark`）：粉色语义的深色文字、强调及输入光标。
- **浅粉**（`pink-light`）：列表高亮及轻量选中背景。

### Secondary
- **状态蓝**（`blue`）：原作状态色的辅助色基准。蓝色徽标另有浅蓝背景与深蓝文字；不把蓝色扩展为第二套主动作。

### Neutral
- **紫灰墨色**（`ink`）：正文、控件文字与轮廓。
- **柔紫灰**（`ink-muted`）：辅助信息、字段提示与说明。
- **小字紫灰**（`small-text`）：目录计数、组件名称及代码摘要标记；保证小字号不靠过浅颜色减弱存在感。
- **浅紫线**（`line`）：面板标题、弹窗标题与折叠项之间的分隔。
- **白色面板**（`surface`）：表单与内容容器。
- **淡薰衣草**（`lavender`）：次按钮渐变的视觉基准与中性材料关系。

**The Material Rule.** 色彩基准不是完整控件皮肤；按钮的渐变、点纹、内缘高光与紫灰描边共同构成其身份。

## Typography

**Display Font / Body Font:** 使用 `--sc-font` 的同一系统字体栈，优先日文圆体与 Gothic，其后为中文字体和 sans-serif。代码示例使用浏览器 monospace。

**Character:** 以清楚、紧凑的中日文无衬线支持可编辑内容。默认使用系统字体栈，自定义字体通过 `--sc-font` 配置，原图中的文字保留原样。

### Hierarchy
- **Display**：库名称使用响应式标题，具体值见 frontmatter；窄屏采用已实现的固定字号覆写。
- **Headline**：展示分区标题使用 headline；面板标题较小（17px），弹窗标题较大（22px）。
- **Body**：基础正文使用 body；弹窗、面板说明和折叠内容采用较松行高（1.8）。
- **Label**：字段标签使用 label；标准按钮使用 button。小、标准、大按钮文字分别为（13px / 16px / 20px）。
- **Supporting text**：说明通常为（12–13px），元数据为（10–11px）；不要把元数据的字号用在输入标签或动作说明上。

**The Editable Text Rule.** 通用按钮使用 DOM 文本；仅原始图片控件保留图中的日文标签，不能把图片文本当作可编辑文案。

## Layout

组件内部使用 flex / grid 对齐，字段以标签、控件、提示垂直排列；正文区域允许内容自然换行，数字状态使用等宽数字。重复间距以 frontmatter 的 8–24px 组为基础，不强加额外的全局等距栅格。

展示页桌面是固定目录与内容工作区；内容容器最大（1210px），侧栏（230px），主区域横向内边距（44px）。在（1100px）缩窄目录与间距；（800px）转为顶部粘性、横向滚动目录；（540px）示例双栏改单栏、素材四列改两列。页面构图不是组件 API 的限制。

弹窗宽度为 `min(520px, calc(100vw - 32px))`，最高为 `calc(100dvh - 48px)`，内容自身滚动；（480px）以下缩小内边距与标签页文字。保留可聚焦触发器及可见操作，不让窄屏把弹窗按钮推出视口。

## Elevation & Depth

深度来自材料分层、紫灰轮廓、白色内缘与小幅阴影，而非大范围悬浮卡片。面板本身不加阴影；按钮有内高光和低阴影，弹窗通过半透明紫灰遮罩分离背景。

### Shadow Vocabulary
- **按钮内缘与低阴影**（`inset 0 0 0 2px #fff, 0 2px 3px #61536524`）：建立游戏按钮的实体边缘。
- **键盘焦点双环**（`0 0 0 3px #fff, 0 0 0 5px #ad2980`）：交互控件的清楚焦点提示。

**The Focus Rule.** 焦点环是交互信息。保留键盘 focus-visible；不能因原作是图片或游戏画布而移除网页焦点。

## Shapes

标准按钮与面板共用 control 圆角和（2px）紫灰轮廓。输入框用较小 field 圆角与（1px）边框；弹窗用 dialog 圆角。小按钮圆角为（9px），标签页仅顶部圆角（10px），徽标更紧凑（5px），开关为胶囊形（18px）。这些形状分别服务控件类型，不把所有组件强制为同一半径。

纹理在按钮内部裁切；白色斜向高光与点阵纹理保持在标签后方。原作图标以 object-fit contain 保持比例；图片控件保留原始轮廓，不能用 emoji、文字字符或随意绘制的图标替换。

## Components

### Buttons
- **Character:** 带边缘和微纹理的实体按钮。
- **Primary / Secondary:** 粉色主按钮与白到浅紫的次按钮；主按钮白字配深粉描边式文字阴影。标准高（52px）、小号（38px）、大号（66px）。渐变与纹理的完整 CSS 见 sidecar。
- **Danger / Ghost:** 危险动作使用浅粉底与深红文字轮廓；ghost 取消纹理、边框与阴影，保留文字动作。
- **States:** hover 提亮并上移（1px），active 下移（1px）；禁用降低透明度（.45）并去饱和；loading 禁用触发并呈现 busy 语义。状态过渡（.16s）。

### Original image controls
- **ScImageButton / ScIcon:** 使用 `src/assets/game` 的真实素材，前者提供按钮语义与可访问名称。图片上已有的文字保留；CSS 按钮支持任意文本。
- **ScCheckbox / ScSlider:** 复用原作复选框图和滑块手柄；交互由 Reka UI 与 DOM 负责。sidecar 的无资源预览不伪造这些原图组件。

### Chips
- **ScBadge:** 粉、蓝、中性三种紧凑状态标签，内边距（3px 10px），文字（11px / 700）；徽标是状态信息，不暗示可点击。

### Cards / Containers
- **ScPanel:** 白色或浅紫 inset 面板；内边距用 lg，标题以下细分隔线，底部动作居中。稳定轮廓与内容层次优先于额外投影。
- **ScDialog:** 白色内容面板、独立遮罩、标题、描述、正文和页脚；使用 Reka UI 管理焦点、关闭与 open 状态，不能把静态 sidecar 示例视为交互实现。

### Inputs / Fields
- **ScInput / ScSelect / ScNumberField:** 常规控件高（44px），白底、细紫灰线，标签（14px / 700），提示（12px）。错误输入改变边框和浅底色，并输出错误文本；disabled 降低透明度。
- **Selection:** Select 下拉用浅粉高亮与深粉文字；开关、滑块、进度采用同一粉色渐变语言。数值用 tabular-nums，状态由真实值驱动。

### Navigation
- **ScTabs:** 紫灰底边与上圆角标签；选中项粉色渐变，默认项白到浅紫。可见焦点与禁用状态保留，窄屏缩小文字和内边距。
- **ScAccordion:** 浅紫标题条、细分隔线，打开时原作箭头旋转；内容文字行高（1.8）。
- **Catalog navigation:** 活动分区浅粉背景与深粉文字，手机横向滚动。目录导航属于展示页，而非强制的应用导航结构。

动效服务状态变化：开关（.2s）、进度（.25s）、弹窗渐入（.18–.2s），曲线沿用 `--sc-ease`。尊重 prefers-reduced-motion：移除这些过渡与动画，页面平滑滚动也改为即时滚动。

## Original controls and skins

- `ScFilterButton` 使用原作筛选与筛选 ON 两种图片，附可选数量，状态通过 aria-pressed 表达。
- `ScToggleGroup` 以原作 ON/OFF 矩形按钮表达互斥选择，保留选中轮廓、禁用与键盘操作。
- `ScSelectableItem` 与 `ScSelectionGroup` 共用原作选择边框素材，分别提供独立切换和互斥选择，后者支持方向键跳过禁用项。
- `ScHeader` 将原作标题栏按切片伸缩，保留图标、标题与操作区；窄屏允许内容换行。
- `ScLoader` 使用原作圆点及底图，提供行内、局部和全屏遮罩；减少动态效果时保持静态提示。局部加载区域由使用方通过 inert 管理交互。
- `ScNewBadge` 保留原作 NEW!! 图片，支持行内和左右角标。
- `skin="game"` 在面板和弹窗使用切片边框与裁切后的原作装饰，在页签使用原图纹理，在输入框使用可伸缩底图。
- `ScProgress` 的 mission 变体使用原作橙色任务槽与填充，继承数值限制与 progressbar 语义。

## Do's and Don'ts

### Do:
- **Do** 同时保留原作材料语言和可编辑 DOM 内容。
- **Do** 将 CSS 复现与原始素材分别标注，并保留素材来源。
- **Do** 在默认、选中、错误、禁用和键盘焦点状态保持一致的组件语法。
- **Do** 通过 `--sc-font` 统一配置组件字体。
- **Do** 在窄屏保留原图与 CSS 控件的对照、可读标签和可操作弹窗。

### Don't:
- **Don't** 将 CSS 复现称为原图或逐像素复刻。
- **Don't** 为这次既定游戏 UI 提取随机生成替代视觉世界。
- **Don't** 用 emoji、字符图标或无来源的近似素材替代现有原作图标。
- **Don't** 删除游戏材质原生使用的渐变、细纹理与轮廓。
