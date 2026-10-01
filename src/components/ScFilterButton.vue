<script setup lang="ts">
import { computed } from 'vue'
import { Toggle } from 'reka-ui'
import { gameAsset } from '../assets'
const props = withDefaults(defineProps<{ label?: string; count?: number; disabled?: boolean }>(), { label: '筛选' })
const active = defineModel<boolean>({ default: false })
const countText = computed(() => props.count === undefined ? undefined : Math.max(0, Math.floor(Number.isFinite(props.count) ? props.count : 0)))
</script>

<template>
  <Toggle v-model="active" :disabled="disabled" :aria-label="label" class="sc-filter-button">
    <img :src="gameAsset(active ? 'filter_on_button.png' : 'filter_off_button.png')" alt="" draggable="false" />
    <span v-if="countText !== undefined" class="sc-filter-button__count">{{ countText }}</span>
  </Toggle>
</template>
