<script setup lang="ts">
import { Teleport } from 'vue'
import { gameAsset } from '../assets'
withDefaults(defineProps<{ active?: boolean; label?: string; size?: 'sm' | 'md' | 'lg'; overlay?: boolean; fullscreen?: boolean }>(), { active: true, label: '加载中', size: 'md', overlay: false, fullscreen: false })
</script>

<template>
  <Teleport to="body" :disabled="!fullscreen">
    <div v-if="active" :class="['sc-loader', `sc-loader--${size}`, { 'sc-loader--overlay': overlay || fullscreen, 'sc-loader--fullscreen': fullscreen }]" role="status" aria-live="polite" aria-atomic="true" :aria-label="label">
      <span class="sc-loader__graphic" aria-hidden="true"><img class="sc-loader__base" :src="gameAsset('loading_indicator_base.png')" alt="" /><img class="sc-loader__indicator" :src="gameAsset('loading_indicator.png')" alt="" /></span>
      <span class="sc-loader__label"><slot>{{ label }}</slot></span>
    </div>
  </Teleport>
</template>
