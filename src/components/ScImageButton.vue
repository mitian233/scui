<script setup lang="ts">
import { gameAsset } from '../assets'
const presets = { confirm: 'decision_button.png', cancel: 'cancel_button.png', ok: 'ok_button.png', yes: 'yes_button.png', no: 'no_button.png', back: 'back_button.png', close: 'close_icon_button.png', plus: 'plus_button.png', minus: 'minus_button.png' } as const
const labels = { confirm: '決定', cancel: 'キャンセル', ok: 'OK', yes: 'はい', no: 'いいえ', back: '返回', close: '关闭', plus: '增加', minus: '减少' }
withDefaults(defineProps<{ preset: keyof typeof presets; label?: string; disabled?: boolean }>(), { disabled: false })
</script>

<template>
  <button type="button" class="sc-image-button" :disabled="disabled" :aria-label="label || labels[preset]">
    <img :src="gameAsset(presets[preset])" alt="" draggable="false" />
  </button>
</template>
