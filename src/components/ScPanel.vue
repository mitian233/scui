<script setup lang="ts">
import type { ComponentSkin } from '../types'
withDefaults(defineProps<{ title?: string; variant?: 'default' | 'inset'; skin?: ComponentSkin }>(), { variant: 'default', skin: 'default' })
</script>

<template>
  <section :class="['sc-panel', `sc-panel--${variant}`, { 'sc-panel--game': skin === 'game' }]">
    <h3 v-if="title" class="sc-panel__title">{{ title }}</h3>
    <div class="sc-panel__body"><slot /></div>
    <footer v-if="$slots.footer" class="sc-panel__footer"><slot name="footer" /></footer>
  </section>
</template>
