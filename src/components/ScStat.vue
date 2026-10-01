<script setup lang="ts">
import ScIcon from './ScIcon.vue'
import type { StatTone } from '../types'
const icons = { vocal: 'icon_status_vocal.png', dance: 'icon_status_dance.png', visual: 'icon_status_visual.png', mental: 'icon_status_mental.png', skill: 'icon_status_skill_point.png' }
defineProps<{ label: string; value: number | string; tone: StatTone }>()
</script>

<template><div :class="['sc-stat', `sc-stat--${tone}`]"><ScIcon :name="icons[tone]" :size="28" /><span class="sc-stat__label">{{ label }}</span><strong class="sc-stat__value">{{ value }}</strong></div></template>
