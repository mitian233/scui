<script setup lang="ts">
import { useId } from 'vue'
import { Label, NumberFieldRoot, NumberFieldInput, NumberFieldIncrement, NumberFieldDecrement } from 'reka-ui'
import ScIcon from './ScIcon.vue'
withDefaults(defineProps<{ label: string; min?: number; max?: number; step?: number; disabled?: boolean }>(), { min: 0, max: 99, step: 1 })
const model = defineModel<number>({ default: 1 })
const id = useId()
</script>

<template>
  <div class="sc-number-field">
    <Label :for="id" class="sc-field-label">{{ label }}</Label>
    <NumberFieldRoot v-model="model" :min="min" :max="max" :step="step" :disabled="disabled" class="sc-number-field__root">
      <NumberFieldDecrement class="sc-number-field__button" :aria-label="`减少${label}`"><ScIcon name="minus_button.png" :size="36" /></NumberFieldDecrement>
      <NumberFieldInput :id="id" class="sc-number-field__input" />
      <NumberFieldIncrement class="sc-number-field__button" :aria-label="`增加${label}`"><ScIcon name="plus_button.png" :size="36" /></NumberFieldIncrement>
    </NumberFieldRoot>
  </div>
</template>
