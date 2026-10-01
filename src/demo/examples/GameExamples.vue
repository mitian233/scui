<script setup lang="ts">
import { onUnmounted, shallowRef } from 'vue'
import { ScFilterButton, ScToggleGroup, ScLoader, ScHeader, ScNewBadge, ScSelectableItem, ScSelectionGroup, ScPanel, ScDialog, ScTabs, ScInput, ScProgress, ScButton } from '../../index'
import ShowcaseSection from '../ShowcaseSection.vue'
const filtered = shallowRef(false)
const sound = shallowRef(true)
const favorite = shallowRef(false)
const selected = shallowRef('vocal')
const busy = shallowRef(false)
const open = shallowRef(false)
const tab = shallowRef('settings')
const name = shallowRef('制作人')
const choices = [{ value: 'vocal', label: '歌唱练习', description: '提升 Vocal 属性', icon: 'icon_status_vocal.png' }, { value: 'dance', label: '舞蹈练习', description: '提升 Dance 属性', icon: 'icon_status_dance.png' }, { value: 'locked', label: '未开放课程', disabled: true }]
const tabs = [{ value: 'settings', label: '设置' }, { value: 'details', label: '详情' }]
let timer: ReturnType<typeof setTimeout> | undefined
function load() {
  busy.value = true
  timer = setTimeout(() => { busy.value = false }, 1200)
}
onUnmounted(() => { if (timer) clearTimeout(timer) })
const code = `<ScFilterButton v-model="filtered" :count="3" />
<ScToggleGroup v-model="sound" label="语音设置" />
<ScSelectionGroup v-model="course" label="课程" :items="courses" />
<ScSelectableItem v-model="favorite" label="收藏" />
<ScHeader title="设置"><template #actions>...</template></ScHeader>
<ScPanel skin="game" title="原作面板">...</ScPanel>
<ScDialog skin="game" v-model:open="open" title="确认">...</ScDialog>
<ScTabs skin="game" v-model="tab" :items="tabs">...</ScTabs>
<ScInput skin="game" v-model="name" label="名称" />
<ScProgress variant="mission" :value="60" label="任务进度" />
<ScLoader :active="busy" overlay label="正在读取" />
<ScNewBadge position="top-right" />`
</script>

<template>
  <ShowcaseSection id="game" title="原作控件与皮肤" description="筛选、选择、标题栏、加载和 NEW 标记，搭配可伸缩的原作边框与纹理。" names="ScFilterButton · ScToggleGroup · ScLoader · ScHeader · ScNewBadge · ScSelectableItem · ScSelectionGroup" :code="code">
    <ScHeader title="课程与设置" icon="icon_status_skill_point.png"><template #actions><ScFilterButton v-model="filtered" :count="filtered ? 2 : 0" label="筛选课程" /></template></ScHeader>
    <div class="game-demo-columns">
      <div class="game-demo-column"><p class="sc-field-label">语音设置</p><ScToggleGroup v-model="sound" label="原作语音设置" /><ScToggleGroup label="禁用语音设置" disabled /><p class="demo-subtle-label">语音：{{ sound ? '开启' : '关闭' }} · 筛选：{{ filtered ? '开启' : '关闭' }}</p>
        <ScSelectionGroup v-model="selected" label="练习课程" :items="choices" /><p class="demo-subtle-label">当前课程：{{ selected }}</p>
        <ScSelectableItem v-model="favorite" label="收藏当前课程" description="可独立切换的选择项" icon="icon_jewel.png" />
        <ScSelectableItem label="暂不可收藏" disabled />
      </div>
      <div class="game-demo-column"><ScPanel title="原作材质面板" skin="game"><ScTabs v-model="tab" skin="game" :items="tabs" label="原作设置页签"><template #settings><ScInput v-model="name" skin="game" label="原作名称输入" :error="name ? undefined : '请输入名称。'" /><ScProgress :value="60" variant="mission" label="原作任务进度" /></template><template #details><p>保留原作纹理和边框，内容可自由组合。</p></template></ScTabs><template #footer><span class="game-demo-badge-anchor"><ScButton size="sm" @click="open = true">原作弹窗</ScButton><ScNewBadge position="top-right" /></span></template></ScPanel>
        <div class="game-demo-loading"><div :inert="busy || undefined"><p>读取示例内容</p><ScButton size="sm" @click="load">演示加载</ScButton></div><ScLoader :active="busy" overlay label="正在读取课程" /></div>
        <div class="game-demo-inline-loaders"><ScLoader size="sm" label="小号加载" /><ScLoader label="标准加载" /><ScNewBadge /></div>
      </div>
    </div>
    <ScDialog v-model:open="open" skin="game" title="原作确认弹窗" description="使用原作边框和装饰素材。"><ScInput v-model="name" skin="game" label="弹窗名称" /><ScProgress :value="60" variant="mission" label="弹窗任务进度" /></ScDialog>
  </ShowcaseSection>
</template>
