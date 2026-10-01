<script setup lang="ts">
import { shallowRef } from 'vue'
import { ScTabs, ScAccordion, ScStat, ScBadge } from '../../index'
import ShowcaseSection from '../ShowcaseSection.vue'
const tab = shallowRef('produce')
const expanded = shallowRef<string>()
const items = [{ value: 'produce', label: 'プロデュース' }, { value: 'support', label: 'サポート' }, { value: 'fes', label: 'フェス' }, { value: 'locked', label: '未解锁', disabled: true }]
const accordionItems = [{ value: 'sound', title: '声音设置', content: '分别调整背景音乐、语音和音效。示例中可以在上方的音量滑块中实时调整。' }, { value: 'display', title: '显示设置', content: '组件支持自定义内容与设计变量。默认使用浅色面板、紫灰文字和粉色交互强调。' }, { value: 'keyboard', title: '键盘操作', content: '页签使用左右方向键切换；折叠面板使用 Enter 或空格展开。未解锁项会跳过焦点。' }]
const code = `<ScTabs v-model="tab" :items="tabs" label="偶像类型">
  <template #produce>制作偶像面板</template>
  <template #support>支援偶像面板</template>
</ScTabs>
<ScAccordion v-model="expanded" :items="settings" />`
</script>

<template>
  <ShowcaseSection id="navigation" title="导航与展开" description="页签切换与设置列表。鼠标、触屏、方向键，都能自然地操作。" names="ScTabs · ScAccordion" :code="code">
    <ScTabs v-model="tab" :items="items" label="偶像类型"><template #produce><div class="tab-example-content"><div><h3>プロデュースアイドル</h3><p>培养偶像，在每一次练习中积累闪耀。</p><ScBadge>交互演示数据</ScBadge></div><div class="tab-stats"><ScStat tone="vocal" label="Vocal" :value="320" /><ScStat tone="dance" label="Dance" :value="280" /><ScStat tone="visual" label="Visual" :value="350" /></div></div></template><template #support><div class="tab-empty-content"><h3>サポートアイドル</h3><p>支援偶像会在培养过程中提供帮助。</p><ScBadge variant="blue">当前页签：支援</ScBadge></div></template><template #fes><div class="tab-empty-content"><h3>フェスアイドル</h3><p>选择你的阵容，准备登上舞台。</p><ScBadge>当前页签：Fes</ScBadge></div></template></ScTabs>
    <div class="demo-row-label original-label"><span>可折叠设置</span></div><ScAccordion v-model="expanded" :items="accordionItems" />
  </ShowcaseSection>
</template>
