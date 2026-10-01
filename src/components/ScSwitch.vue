<script setup lang="ts">
import { SwitchRoot, SwitchThumb, Label } from 'reka-ui'
import { useId } from 'vue'
defineProps<{ label: string; disabled?: boolean }>()
const checked = defineModel<boolean>({ default: false })
const id = useId()
</script>

<template>
  <div class="sc-switch-field" :data-disabled="disabled || undefined">
    <Label :for="id" class="sc-field-label">{{ label }}</Label>
    <SwitchRoot :id="id" v-model="checked" :disabled="disabled" class="sc-switch" :aria-label="label">
      <span class="sc-switch__text" aria-hidden="true">{{ checked ? 'ON' : 'OFF' }}</span><SwitchThumb class="sc-switch__thumb" />
    </SwitchRoot>
  </div>
</template>
