<script setup lang="ts">
import { useId } from 'vue'
import { Label, SelectRoot, SelectTrigger, SelectValue, SelectIcon, SelectPortal, SelectContent, SelectViewport, SelectItem, SelectItemText, SelectItemIndicator } from 'reka-ui'
import type { SelectItem as Item } from '../types'
import ScIcon from './ScIcon.vue'
withDefaults(defineProps<{ label: string; items: Item[]; placeholder?: string; disabled?: boolean }>(), { placeholder: '请选择' })
const model = defineModel<string>()
const id = useId()
</script>

<template>
  <div class="sc-select-field">
    <Label :for="id" class="sc-field-label">{{ label }}</Label>
    <SelectRoot v-model="model" :disabled="disabled">
      <SelectTrigger :id="id" class="sc-select__trigger" :aria-label="label"><SelectValue :placeholder="placeholder" /><SelectIcon><ScIcon name="next_arrow.png" :size="14" class="sc-select__arrow" /></SelectIcon></SelectTrigger>
      <SelectPortal><SelectContent class="sc-select__content" position="popper" :side-offset="6"><SelectViewport>
        <SelectItem v-for="item in items" :key="item.value" :value="item.value" :disabled="item.disabled" class="sc-select__item"><SelectItemText>{{ item.label }}</SelectItemText><SelectItemIndicator><ScIcon name="check_icon.png" :size="20" /></SelectItemIndicator></SelectItem>
      </SelectViewport></SelectContent></SelectPortal>
    </SelectRoot>
  </div>
</template>
