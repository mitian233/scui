<script setup lang="ts">
import { shallowRef } from 'vue'
import { ScProgress, ScBadge, ScStat, ScButton } from '../../index'
import ShowcaseSection from '../ShowcaseSection.vue'
const progress = shallowRef(60)
const code = `<ScProgress :value="60" :max="100" label="任务进度" />
<ScBadge>NEW</ScBadge>
<ScBadge variant="blue">进行中</ScBadge>
<ScStat tone="vocal" label="Vocal" :value="320" />`
</script>

<template>
  <ShowcaseSection id="feedback" title="状态与反馈" description="用颜色传递状态，用明确的数值表达进展。属性图标直接来自原游戏。" names="ScProgress · ScBadge · ScStat" :code="code">
    <div class="example-columns"><div class="example-column"><ScProgress :value="progress" label="任务进度" /><div class="progress-actions"><ScButton size="sm" :disabled="progress >= 100" @click="progress = Math.min(100, progress + 10)">推进任务</ScButton><ScButton size="sm" variant="ghost" @click="progress = 0">重置</ScButton><span v-if="progress >= 100" role="status" class="demo-subtle-label">任务完成！</span></div><div class="badge-examples"><ScBadge>NEW</ScBadge><ScBadge variant="blue">进行中</ScBadge><ScBadge variant="neutral">未解锁</ScBadge><ScBadge>SSR</ScBadge></div></div><div class="stat-grid"><ScStat tone="vocal" label="Vocal" :value="320" /><ScStat tone="dance" label="Dance" :value="280" /><ScStat tone="visual" label="Visual" :value="350" /><ScStat tone="mental" label="Mental" :value="240" /><ScStat tone="skill" label="SP" :value="120" /></div></div><p class="demo-footnote">属性数值仅用于展示组件样式。</p>
  </ShowcaseSection>
</template>
