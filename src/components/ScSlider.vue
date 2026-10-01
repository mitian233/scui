<script setup lang="ts">
import { computed } from 'vue'
import { SliderRoot, SliderTrack, SliderRange, SliderThumb } from 'reka-ui'
withDefaults(defineProps<{ label: string; min?: number; max?: number; step?: number; disabled?: boolean }>(), { min: 0, max: 100, step: 1 })
const model = defineModel<number>({ default: 50 })
const values = computed({ get: () => [model.value], set: value => { model.value = value[0] ?? 0 } })
</script>

<template>
  <div class="sc-slider-field">
    <div class="sc-field-heading"><span class="sc-field-label">{{ label }}</span><output class="sc-value">{{ model }}</output></div>
    <SliderRoot v-model="values" :min="min" :max="max" :step="step" :disabled="disabled" class="sc-slider">
      <SliderTrack class="sc-slider__track"><SliderRange class="sc-slider__range" /></SliderTrack>
      <SliderThumb class="sc-slider__thumb" :aria-label="label" />
    </SliderRoot>
  </div>
</template>
