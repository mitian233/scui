<script setup lang="ts">
import { CheckboxRoot, CheckboxIndicator, Label } from 'reka-ui'
import { useId } from 'vue'
import { gameAsset } from '../assets'
defineProps<{ label: string; disabled?: boolean }>()
const checked = defineModel<boolean>({ default: false })
const id = useId()
</script>

<template>
  <div class="sc-check-field" :data-disabled="disabled || undefined">
    <CheckboxRoot :id="id" v-model="checked" :disabled="disabled" class="sc-checkbox" :aria-label="label">
      <img :src="gameAsset('select_check_box_off.png')" alt="" aria-hidden="true" />
      <CheckboxIndicator class="sc-checkbox__indicator"><img :src="gameAsset('select_check_box_on.png')" alt="" aria-hidden="true" /></CheckboxIndicator>
    </CheckboxRoot>
    <Label :for="id" class="sc-field-label">{{ label }}</Label>
  </div>
</template>
