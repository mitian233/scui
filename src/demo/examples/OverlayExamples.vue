<script setup lang="ts">
import { shallowRef } from 'vue'
import { ScPanel, ScDialog, ScButton, ScIcon, ScBadge } from '../../index'
import ShowcaseSection from '../ShowcaseSection.vue'
const open = shallowRef(false)
const saved = shallowRef(false)
const code = `<ScPanel title="确认内容">
  <p>这里可以放置任意内容。</p>
  <template #footer><ScButton variant="primary">确定</ScButton></template>
</ScPanel>
<ScDialog v-model:open="open" title="确认设置" description="请确认本次修改。">
  <template #trigger><ScButton>打开弹窗</ScButton></template>
  <p>支持 Escape 关闭、焦点锁定和触发器焦点恢复。</p>
</ScDialog>`
function save() { saved.value = true; open.value = false }
</script>

<template>
  <ShowcaseSection id="overlays" title="面板与弹窗" description="清晰的内容边界和柔和的装饰。弹窗内置焦点管理、Escape 关闭与背景隔离。" names="ScPanel · ScDialog" :code="code">
    <div class="example-columns panel-examples"><ScPanel title="インフォメーション"><div class="panel-demo-body"><ScIcon name="icon_jewel.png" :size="52" /><div><h4>每一份闪耀，都值得被看见。</h4><p>面板支持标题、内容与操作区插槽。</p></div></div><template #footer><ScButton size="sm" @click="open = true">查看详情</ScButton></template></ScPanel><ScPanel title="设置确认" variant="inset"><p class="panel-copy">打开弹窗，体验游戏风格的确认交互。关闭后，焦点会返回打开弹窗的按钮。</p><ScBadge v-if="saved">示例设置已保存</ScBadge><template #footer><ScDialog v-model:open="open" title="确认设置" description="这是组件交互演示，不会修改游戏中的实际数据。"><template #trigger><ScButton variant="primary">打开弹窗</ScButton></template><div class="confirmation-summary"><ScIcon name="icon_jewel.png" :size="54" /><p>要保存当前示例设置吗？</p></div><template #footer="{ close }"><ScButton @click="close">取消</ScButton><ScButton variant="primary" @click="save">确认保存</ScButton></template></ScDialog></template></ScPanel></div>
  </ShowcaseSection>
</template>
