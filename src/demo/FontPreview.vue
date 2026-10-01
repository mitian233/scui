<script setup lang="ts">
import { onMounted, onUnmounted, shallowRef, watch } from 'vue'
import { ScButton, ScSwitch } from '../index'
const localFonts = shallowRef(true)
function applyFonts() { document.documentElement.dataset.scPreviewFonts = localFonts.value ? 'local' : 'system' }
onMounted(applyFonts)
watch(localFonts, applyFonts)
onUnmounted(() => { delete document.documentElement.dataset.scPreviewFonts })
</script>

<template>
  <section id="fonts" class="font-preview" aria-labelledby="font-preview-title">
    <header class="font-preview__header"><div><h2 id="font-preview-title">本机字体预览</h2><p>中文 · 方正 FW 轻吟体　日文 · ハミング</p></div><ScSwitch v-model="localFonts" label="使用本机字体" /></header>
    <div class="font-preview__samples">
      <div lang="zh-CN"><h3>让每一次点击，都带着闪耀。</h3><p>这份心意，终有一天会化作光芒。<br />制作人，今天也请多多指教。</p><ScButton variant="primary">确认选择</ScButton></div>
      <div lang="ja"><h3>その輝きは、きっと届く。</h3><p>プロデューサーさん、<br />今日もよろしくお願いします！</p><ScButton variant="primary">プロデュース開始</ScButton></div>
    </div>
    <p class="font-preview__caption">{{ localFonts ? '本机字体' : '系统字体' }} · 关闭开关可对照整页效果。原图按钮中的文字保持原样。</p>
  </section>
</template>

<style scoped>
.font-preview { margin: 28px 0 36px; padding: 24px; border: 1px solid var(--sc-line); border-radius: 12px; background: #fff; scroll-margin-top: 100px; }
.font-preview__header { display: flex; justify-content: space-between; gap: 20px; align-items: center; }
.font-preview h2 { margin: 0; font-size: 19px; }
.font-preview__header p, .font-preview__caption { color: var(--sc-ink-muted); font-size: 12px; line-height: 1.8; }
.font-preview__samples { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 24px; margin: 24px 0; }
.font-preview__samples > div { padding: 20px; background: #fff5fb; border-radius: 8px; }
.font-preview__samples h3 { margin: 0 0 12px; font-size: 22px; line-height: 1.7; }
.font-preview__samples p { font-size: 16px; line-height: 2; margin: 0 0 20px; }
.font-preview__caption { margin: 0; }
@media (max-width: 800px) { .font-preview__header { align-items: flex-start; flex-direction: column; } .font-preview__samples { grid-template-columns: minmax(0, 1fr); } .font-preview { padding: 18px; } .font-preview__samples h3 { font-size: 20px; } }
</style>
