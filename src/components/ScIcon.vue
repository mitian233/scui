<script setup lang="ts">
import { gameAsset } from '../assets'
withDefaults(defineProps<{ name: string; size?: number; label?: string }>(), { size: 28, label: '' })
</script>

<template><img class="sc-icon" :src="gameAsset(name)" :width="size" :height="size" :alt="label" :aria-hidden="!label || undefined" draggable="false" /></template>
