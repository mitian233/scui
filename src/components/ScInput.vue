<script setup lang="ts">
import { Label } from 'reka-ui'
import { useId } from 'vue'
defineOptions({ inheritAttrs: false })
withDefaults(defineProps<{ label: string; placeholder?: string; disabled?: boolean; error?: string; hint?: string; type?: 'text' | 'email' | 'password' | 'search' }>(), { type: 'text' })
const model = defineModel<string>({ default: '' })
const id = useId()
</script>

<template>
  <div class="sc-input-field">
    <Label :for="id" class="sc-field-label">{{ label }}</Label>
    <input :id="id" v-model="model" v-bind="$attrs" :type="type" :placeholder="placeholder" :disabled="disabled" :aria-invalid="!!error" :aria-describedby="error || hint ? `${id}-help` : undefined" class="sc-input" />
    <p v-if="error || hint" :id="`${id}-help`" :class="['sc-field-hint', { 'sc-field-error': error }]" :role="error ? 'alert' : undefined">{{ error || hint }}</p>
  </div>
</template>
