<script setup lang="ts">
withDefaults(defineProps<{ variant?: 'pink' | 'blue' | 'neutral' }>(), { variant: 'pink' })
</script>

<template><span :class="['sc-badge', `sc-badge--${variant}`]"><slot /></span></template>
