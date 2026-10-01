<script setup lang="ts">
import { shallowRef } from 'vue'
import { ScBadge, ScButton, ScImageButton, ScIcon, ScDialog, gameAsset } from '../index'
import DemoSidebar from './DemoSidebar.vue'
import ButtonExamples from './examples/ButtonExamples.vue'
import FormExamples from './examples/FormExamples.vue'
import NavigationExamples from './examples/NavigationExamples.vue'
import OverlayExamples from './examples/OverlayExamples.vue'
import FeedbackExamples from './examples/FeedbackExamples.vue'
import AssetExamples from './examples/AssetExamples.vue'
import GameExamples from './examples/GameExamples.vue'
const active = shallowRef('buttons')
const welcomeOpen = shallowRef(false)
</script>

<template>
  <div id="top" class="catalog-app sc-theme">
    <a class="skip-link" href="#main">跳转到组件展示</a>
    <DemoSidebar :active="active" @navigate="active = $event" />
    <div class="demo-workspace">
      <header class="demo-topbar"><span class="topbar-breadcrumb">SCUI <span>/</span> 组件展示</span><div class="topbar-meta"><span class="live-dot"></span>Vue 3 + Reka UI<ScBadge variant="neutral">v0.1.0</ScBadge></div></header>
      <main id="main" class="demo-main">
        <header class="catalog-header"><div><h1>Shiny Colors <span>UI</span></h1><p>从游戏画布，到 Vue 组件。复现シャニマス的色彩与细节。</p><div class="catalog-tags"><ScBadge>23 个通用组件</ScBadge><ScBadge variant="blue">47 份原游戏素材</ScBadge><span>TypeScript · Accessible · Customizable</span></div></div><img :src="gameAsset('title.png')" class="game-logo" alt="THE IDOLM@STER Shiny Colors" width="180" height="77" /></header>
        <section class="welcome-stage" aria-label="组件组合预览"><div class="welcome-stage__copy"><ScIcon name="icon_jewel.png" :size="48" /><div><h2>让每一次点击，都带着闪耀。</h2><p>原作的柔和光泽，搭配原生网页的灵活交互。</p></div></div><div class="welcome-stage__actions"><div class="welcome-stage__action"><span class="welcome-stage__label">自定义文字 · CSS</span><ScButton variant="primary" @click="welcomeOpen = true">体验一下 <ScIcon name="next_arrow.png" :size="14" /></ScButton></div><div class="welcome-stage__original"><span class="welcome-stage__label">原游戏素材</span><ScImageButton preset="confirm" @click="welcomeOpen = true" /></div></div><span class="stage-spark stage-spark--one" aria-hidden="true"></span><span class="stage-spark stage-spark--two" aria-hidden="true"></span></section>
        <div class="catalog-note"><ScIcon name="icon_notice.png" :size="17" /><span>下面所有组件均可直接交互。游戏素材与 CSS 复现分别展示，示例不连接游戏服务。</span></div>
        <ButtonExamples />
        <FormExamples />
        <NavigationExamples />
        <OverlayExamples />
        <FeedbackExamples />
        <GameExamples />
        <AssetExamples />
        <footer class="demo-footer"><span>SCUI · Vue × Reka UI</span><p>非官方 UI 研究项目。游戏名称、图标和图片版权归原权利人。<br />THE IDOLM@STER™ & © Bandai Namco Entertainment Inc.</p></footer>
      </main>
    </div>
    <ScDialog v-model:open="welcomeOpen" title="欢迎来到 SCUI" description="这份组件库把原游戏的 UI 质感带进 Vue，所有交互都由 DOM 和 Reka UI 驱动。"><div class="welcome-dialog-content"><ScIcon name="icon_jewel.png" :size="84" /><p>试试 Tab 键切换焦点，或者按 Escape 关闭弹窗。</p><ScBadge>独立组件 · 可自由组合</ScBadge></div></ScDialog>
  </div>
</template>
