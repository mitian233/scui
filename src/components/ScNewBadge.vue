<script setup lang="ts">
import { gameAsset } from '../assets'
withDefaults(defineProps<{ label?: string; position?: 'inline' | 'top-right' | 'top-left'; visible?: boolean }>(), { label: '新内容', position: 'inline', visible: true })
</script>

<template>
  <span v-if="visible" :class="['sc-new-badge', `sc-new-badge--${position}`]"><img :src="gameAsset('common_menu_badge_new.png')" :alt="label" width="60" height="21" /></span>
</template>
