<script setup lang="ts">
import ScIcon from './ScIcon.vue'
withDefaults(defineProps<{ title: string; icon?: string; level?: 1 | 2 | 3 | 4 | 5 | 6 }>(), { level: 2 })
</script>

<template>
  <header class="sc-header">
    <ScIcon v-if="icon" :name="icon" :size="32" />
    <component :is="`h${level}`" class="sc-header__title">{{ title }}</component>
    <div v-if="$slots.actions" class="sc-header__actions"><slot name="actions" /></div>
  </header>
</template>
