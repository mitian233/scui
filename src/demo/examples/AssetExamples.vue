<script setup lang="ts">
import { computed, shallowRef } from 'vue'
import { ScSelect, ScIcon, ScBadge } from '../../index'
import manifest from '../../../research/assets-manifest.json'
import ShowcaseSection from '../ShowcaseSection.vue'
const category = shallowRef('icons')
const categories = [{ value: 'icons', label: '图标与状态' }, { value: 'controls', label: '按钮与控件' }, { value: 'panels', label: '面板与背景' }, { value: 'all', label: '全部 46 份素材' }]
const visibleAssets = computed(() => manifest.assets.filter(a => {
  if (category.value === 'all') return true
  if (category.value === 'icons') return /^(icon_|loading_|speaker|check_icon|next_arrow|common_menu_badge)/.test(a.name)
  if (category.value === 'controls') return /button|check_box|active_select|^handle|^bar_/.test(a.name)
  return /base|stretch|tab|^title|^text_box|gauge/.test(a.name) && !/button|check_box|active_select|loading/.test(a.name)
}))
const code = `<ScIcon name="icon_jewel.png" :size="32" />
<ScIcon name="icon_status_vocal.png" label="Vocal" />
// 获取已打包、可离线使用的素材地址
import { gameAsset } from '@mitian233/scui'
const jewel = gameAsset('icon_jewel.png')`
</script>

<template>
  <ShowcaseSection id="assets" title="图标与原始素材" description="从公开页面正常加载的 PixiJS 图集中导出，保留透明通道，并记录原始来源。" names="ScIcon · gameAsset" :code="code">
    <div class="asset-toolbar"><ScSelect v-model="category" label="素材分类" :items="categories" /><ScBadge variant="neutral">{{ visibleAssets.length }} 份素材</ScBadge></div>
    <div class="asset-grid"><figure v-for="asset in visibleAssets" :key="asset.name" class="asset-tile"><div class="asset-tile__image"><ScIcon :name="asset.name" :size="64" /></div><figcaption><span>{{ asset.name }}</span><small>{{ asset.width }} × {{ asset.height }}</small></figcaption></figure></div>
    <p class="asset-attribution">素材采集索引与图集信息保存在 <code>research/assets-manifest.json</code>。素材版权归原权利人，不代表已获得再分发许可。</p>
  </ShowcaseSection>
</template>
