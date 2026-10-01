<script setup lang="ts">
import { RadioGroupRoot, RadioGroupItem } from 'reka-ui'
import ScIcon from './ScIcon.vue'
import type { SelectionItem } from '../types'
import { useRadioNavigation } from '../composables/useRadioNavigation'
withDefaults(defineProps<{ label: string; items: SelectionItem[]; disabled?: boolean; orientation?: 'horizontal' | 'vertical'; name?: string }>(), { orientation: 'vertical' })
const selected = defineModel<string>()
const navigation = useRadioNavigation(value => { selected.value = value })
</script>

<template>
  <RadioGroupRoot v-model="selected" :name="name" :disabled="disabled" :orientation="orientation" :aria-label="label" :class="['sc-selection-group', `sc-selection-group--${orientation}`]" @keydown.capture="navigation.onKeydown" @keyup.capture="navigation.onKeyup">
    <RadioGroupItem v-for="item in items" :key="item.value" :value="item.value" :disabled="item.disabled" :aria-label="item.label" class="sc-selectable-item" @focus="navigation.onFocus(item.value)">
      <span class="sc-selectable-item__marker" aria-hidden="true" /><ScIcon v-if="item.icon" :name="item.icon" :size="32" />
      <span class="sc-selectable-item__content"><span class="sc-selectable-item__title">{{ item.label }}</span><span v-if="item.description" class="sc-selectable-item__description">{{ item.description }}</span><slot :name="item.value" :item="item" /></span>
    </RadioGroupItem>
  </RadioGroupRoot>
</template>
