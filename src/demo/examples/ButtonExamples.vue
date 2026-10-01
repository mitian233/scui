<script setup lang="ts">
import { shallowRef, onUnmounted } from 'vue'
import { ScButton, ScImageButton, ScIcon, ScBadge } from '../../index'
import ShowcaseSection from '../ShowcaseSection.vue'
const loading = shallowRef(false)
const message = shallowRef('点击按钮，查看交互反馈。')
let timer: ReturnType<typeof setTimeout> | undefined
function simulateSave() {
  loading.value = true
  message.value = '正在保存示例设置…'
  timer = setTimeout(() => { loading.value = false; message.value = '示例设置已保存。' }, 1200)
}
onUnmounted(() => clearTimeout(timer))
const code = `<ScButton variant="primary" :loading="saving" @click="save">保存设置</ScButton>
<ScButton disabled>暂不可用</ScButton>
<ScImageButton preset="confirm" @click="confirm" />`
</script>

<template>
  <ShowcaseSection id="buttons" title="按钮" description="熟悉的渐变、细密纹理与紫灰描边。保留原作质感，也能自由更换文字。" names="ScButton · ScImageButton" :code="code">
    <div class="demo-row-label"><span>可自定义文字</span><ScBadge variant="neutral">CSS 复现</ScBadge></div>
    <div class="demo-button-row"><ScButton variant="primary" @click="message = '主按钮已点击。'">确认选择</ScButton><ScButton @click="message = '已返回上一步。'">返回</ScButton><ScButton variant="danger" @click="message = '删除按钮演示，不会删除数据。'">删除</ScButton><ScButton disabled>暂不可用</ScButton><ScButton :loading="loading" @click="simulateSave">{{ loading ? '保存中' : '保存设置' }}</ScButton></div>
    <div class="button-sizes"><span class="demo-subtle-label">尺寸</span><ScButton size="sm" @click="message = '小尺寸按钮已点击。'">小按钮</ScButton><ScButton size="md" @click="message = '默认尺寸按钮已点击。'">标准按钮</ScButton><ScButton size="lg" variant="primary" @click="message = '大尺寸按钮已点击。'"><template #icon><ScIcon name="icon_jewel.png" :size="24" /></template>开始闪耀</ScButton><ScButton variant="ghost" @click="message = '文字按钮已点击。'">文字按钮</ScButton></div>
    <div class="demo-row-label original-label"><span>原游戏按钮</span><ScBadge>原始图集</ScBadge><small>保留原图的日文文字</small></div>
    <div class="demo-button-row original-buttons"><ScImageButton preset="confirm" @click="message = '原作「決定」按钮已点击。'" /><ScImageButton preset="cancel" @click="message = '原作「キャンセル」按钮已点击。'" /><ScImageButton preset="ok" @click="message = '原作 OK 按钮已点击。'" /><ScImageButton preset="back" @click="message = '原作返回按钮已点击。'" /><ScImageButton preset="plus" @click="message = '原作增加按钮已点击。'" /></div>
    <p class="interaction-status" role="status">{{ message }}</p>
  </ShowcaseSection>
</template>
