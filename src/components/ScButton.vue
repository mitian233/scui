<script setup lang="ts">
import { Primitive } from 'reka-ui'
import type { ButtonVariant, ComponentSize } from '../types'
withDefaults(defineProps<{ variant?: ButtonVariant; size?: ComponentSize; disabled?: boolean; loading?: boolean; type?: 'button' | 'submit' | 'reset' }>(), {
  variant: 'secondary', size: 'md', type: 'button',
})
</script>

<template>
  <Primitive as="button" :type="type" :disabled="disabled || loading" :aria-busy="loading || undefined" :class="['sc-button', `sc-button--${variant}`, `sc-button--${size}`]">
    <span v-if="loading" class="sc-spinner" aria-hidden="true" />
    <span v-else-if="$slots.icon" class="sc-button__icon"><slot name="icon" /></span>
    <span class="sc-button__label"><slot /></span>
  </Primitive>
</template>
