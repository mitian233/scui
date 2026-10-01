<script setup lang="ts">
import { computed } from 'vue'
import { RadioGroupRoot, RadioGroupItem } from 'reka-ui'
import { gameAsset } from '../assets'
import { useRadioNavigation } from '../composables/useRadioNavigation'
withDefaults(defineProps<{ label: string; disabled?: boolean; onLabel?: string; offLabel?: string }>(), { onLabel: 'ON', offLabel: 'OFF' })
const enabled = defineModel<boolean>({ default: true })
const selected = computed({ get: () => enabled.value ? 'on' : 'off', set: (value: string) => { enabled.value = value === 'on' } })
const navigation = useRadioNavigation(value => { selected.value = value })
</script>

<template>
  <RadioGroupRoot v-model="selected" :disabled="disabled" :aria-label="label" orientation="horizontal" class="sc-toggle-group" @keydown.capture="navigation.onKeydown" @keyup.capture="navigation.onKeyup">
    <RadioGroupItem value="on" :aria-label="onLabel" class="sc-toggle-group__item" @focus="navigation.onFocus('on')"><img :src="gameAsset('setting_on_button_on.png')" alt="" draggable="false" /></RadioGroupItem>
    <RadioGroupItem value="off" :aria-label="offLabel" class="sc-toggle-group__item" @focus="navigation.onFocus('off')"><img :src="gameAsset('setting_off_button_on.png')" alt="" draggable="false" /></RadioGroupItem>
  </RadioGroupRoot>
</template>
