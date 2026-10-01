<script setup lang="ts">
import { DialogRoot, DialogTrigger, DialogPortal, DialogOverlay, DialogContent, DialogTitle, DialogDescription, DialogClose } from 'reka-ui'
import ScButton from './ScButton.vue'
import ScImageButton from './ScImageButton.vue'
withDefaults(defineProps<{ title: string; description?: string; closeLabel?: string }>(), { description: '', closeLabel: '关闭' })
const open = defineModel<boolean>('open', { default: false })
</script>

<template>
  <DialogRoot v-model:open="open">
    <DialogTrigger v-if="$slots.trigger" as-child><slot name="trigger" /></DialogTrigger>
    <DialogPortal>
      <DialogOverlay class="sc-dialog-overlay" />
      <DialogContent class="sc-dialog">
        <header class="sc-dialog__header">
          <DialogTitle class="sc-dialog__title">{{ title }}</DialogTitle>
          <DialogClose as-child><ScImageButton preset="close" :label="closeLabel" /></DialogClose>
        </header>
        <DialogDescription :class="description ? 'sc-dialog__description' : 'sc-sr-only'">{{ description || title }}</DialogDescription>
        <div class="sc-dialog__body"><slot /></div>
        <footer class="sc-dialog__footer">
          <slot name="footer" :close="() => open = false"><DialogClose as-child><ScButton variant="primary">{{ closeLabel }}</ScButton></DialogClose></slot>
        </footer>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>
