<script setup lang="ts">
import { ScIcon } from '../index'
defineProps<{ active: string }>()
defineEmits<{ navigate: [id: string] }>()
const links = [
  { id: 'buttons', label: '按钮', icon: 'icon_status_vocal.png', count: '02' },
  { id: 'forms', label: '表单控件', icon: 'icon_status_dance.png', count: '06' },
  { id: 'navigation', label: '导航与展开', icon: 'icon_status_visual.png', count: '02' },
  { id: 'overlays', label: '面板与弹窗', icon: 'icon_status_mental.png', count: '02' },
  { id: 'feedback', label: '状态与反馈', icon: 'icon_status_skill_point.png', count: '03' },
  { id: 'assets', label: '图标与素材', icon: 'icon_jewel.png', count: '47' },
]
</script>

<template>
  <aside class="demo-sidebar">
    <a class="brand" href="#top" aria-label="SCUI 首页"><ScIcon name="icon_jewel.png" :size="36" /><span>SC<span class="brand__accent">UI</span></span><small>0.1.0</small></a>
    <nav class="sidebar-nav" aria-label="组件目录"><p class="sidebar-caption">组件目录</p>
      <a v-for="link in links" :key="link.id" :href="`#${link.id}`" :class="['sidebar-link', { 'sidebar-link--active': active === link.id }]" :aria-current="active === link.id ? 'location' : undefined" @click="$emit('navigate', link.id)"><ScIcon :name="link.icon" :size="22" /><span>{{ link.label }}</span><small>{{ link.count }}</small></a>
    </nav>
    <div class="sidebar-bottom"><span class="sidebar-flower" aria-hidden="true"></span><p>同样的闪耀。<br />新的表达方式。</p><a href="https://shinycolors.enza.fun/" target="_blank" rel="noopener noreferrer">原游戏资源来源 ↗</a><small>Unofficial · UI study</small></div>
  </aside>
</template>
