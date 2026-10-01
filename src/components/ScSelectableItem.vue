<script setup lang="ts">
import { Toggle } from 'reka-ui'
import ScIcon from './ScIcon.vue'
defineProps<{ label: string; description?: string; icon?: string; disabled?: boolean }>()
const selected = defineModel<boolean>({ default: false })
</script>

<template>
  <Toggle v-model="selected" :disabled="disabled" :aria-label="label" class="sc-selectable-item">
    <span class="sc-selectable-item__marker" aria-hidden="true" />
    <ScIcon v-if="icon" :name="icon" :size="32" />
    <span class="sc-selectable-item__content"><span class="sc-selectable-item__title">{{ label }}</span><span v-if="description" class="sc-selectable-item__description">{{ description }}</span><slot /></span>
  </Toggle>
</template>
