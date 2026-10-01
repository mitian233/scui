<script setup lang="ts">
import { computed } from 'vue'
import { TabsRoot, TabsList, TabsTrigger, TabsContent } from 'reka-ui'
import type { TabItem, ComponentSkin } from '../types'
withDefaults(defineProps<{ items: TabItem[]; label?: string; skin?: ComponentSkin }>(), { label: '内容分类', skin: 'default' })
const model = defineModel<string>()
const selected = computed(() => model.value)
</script>

<template>
  <TabsRoot :model-value="selected" :default-value="items.find(item => !item.disabled)?.value" :class="['sc-tabs', { 'sc-tabs--game': skin === 'game' }]" @update:model-value="model = String($event)">
    <TabsList class="sc-tabs__list" :aria-label="label">
      <TabsTrigger v-for="item in items" :key="item.value" :value="item.value" :disabled="item.disabled" class="sc-tabs__trigger">{{ item.label }}</TabsTrigger>
    </TabsList>
    <TabsContent v-for="item in items" :key="item.value" :value="item.value" class="sc-tabs__content"><slot :name="item.value" :item="item" /></TabsContent>
  </TabsRoot>
</template>
