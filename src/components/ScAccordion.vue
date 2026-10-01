<script setup lang="ts">
import { AccordionRoot, AccordionItem, AccordionHeader, AccordionTrigger, AccordionContent } from 'reka-ui'
import type { AccordionItem as Item } from '../types'
import ScIcon from './ScIcon.vue'
defineProps<{ items: Item[] }>()
const model = defineModel<string>()
</script>

<template>
  <AccordionRoot v-model="model" type="single" collapsible class="sc-accordion">
    <AccordionItem v-for="item in items" :key="item.value" :value="item.value" :disabled="item.disabled" class="sc-accordion__item">
      <AccordionHeader class="sc-accordion__header"><AccordionTrigger class="sc-accordion__trigger">{{ item.title }}<ScIcon name="next_arrow.png" :size="14" class="sc-accordion__arrow" /></AccordionTrigger></AccordionHeader>
      <AccordionContent class="sc-accordion__content"><slot :name="item.value" :item="item">{{ item.content }}</slot></AccordionContent>
    </AccordionItem>
  </AccordionRoot>
</template>
