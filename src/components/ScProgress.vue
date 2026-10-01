<script setup lang="ts">
import { computed } from 'vue'
import { ProgressRoot, ProgressIndicator } from 'reka-ui'
const props = withDefaults(defineProps<{ value: number; max?: number; label?: string; showValue?: boolean; variant?: 'default' | 'mission' }>(), { max: 100, label: '进度', showValue: true, variant: 'default' })
const safeMax = computed(() => Number.isFinite(props.max) ? Math.max(1, props.max) : 100)
const safeValue = computed(() => Number.isFinite(props.value) ? Math.min(safeMax.value, Math.max(0, props.value)) : 0)
const percentage = computed(() => safeValue.value / safeMax.value * 100)
</script>

<template>
  <div class="sc-progress-field">
    <div class="sc-field-heading"><span class="sc-field-label">{{ label }}</span><output v-if="showValue" class="sc-value">{{ safeValue }} / {{ safeMax }}</output></div>
    <ProgressRoot :class="['sc-progress', { 'sc-progress--mission': variant === 'mission' }]" :model-value="safeValue" :max="safeMax" :aria-label="label"><ProgressIndicator class="sc-progress__indicator" :style="{ transform: `scaleX(${percentage / 100})` }" /></ProgressRoot>
  </div>
</template>
