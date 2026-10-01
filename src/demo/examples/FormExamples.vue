<script setup lang="ts">
import { shallowRef, computed } from 'vue'
import { ScInput, ScSelect, ScCheckbox, ScSwitch, ScSlider, ScNumberField, ScBadge } from '../../index'
import ShowcaseSection from '../ShowcaseSection.vue'
const producer = shallowRef('プロデューサー')
const unit = shallowRef('illumination')
const voice = shallowRef(true)
const effects = shallowRef(false)
const selected = shallowRef(true)
const volume = shallowRef(65)
const count = shallowRef(3)
const nameError = computed(() => producer.value.trim() ? '' : '请输入制作人名称。')
const units = [{ value: 'illumination', label: 'イルミネーションスターズ' }, { value: 'antica', label: 'アンティーカ' }, { value: 'alstroemeria', label: 'アルストロメリア' }, { value: 'straylight', label: 'ストレイライト' }]
const code = `<ScInput v-model="name" label="制作人名称" :error="nameError" />
<ScSelect v-model="unit" label="所属组合" :items="units" />
<ScCheckbox v-model="selected" label="选择这位偶像" />
<ScSwitch v-model="voice" label="播放语音" />
<ScSlider v-model="volume" label="背景音乐音量" />
<ScNumberField v-model="count" label="使用数量" :min="1" :max="10" />`
</script>

<template>
  <ShowcaseSection id="forms" title="表单控件" description="输入、选择与设置。统一视觉语言，保留原生语义与键盘操作。" names="Input · Select · Checkbox · Switch · Slider · NumberField" :code="code">
    <div class="example-columns"><div class="example-column"><ScInput v-model="producer" label="制作人名称" placeholder="请输入名称" :error="nameError" hint="清空内容可查看错误提示。" /><ScSelect v-model="unit" label="所属组合" :items="units" /><ScNumberField v-model="count" label="使用数量" :min="1" :max="10" /></div><div class="example-column"><div class="setting-demo"><ScSwitch v-model="voice" label="播放语音" /><ScSwitch v-model="effects" label="特效动画" /><ScSwitch label="暂未解锁" disabled /></div><ScSlider v-model="volume" label="背景音乐音量" /><div class="checkbox-demo"><ScCheckbox v-model="selected" label="选择这位偶像" /><ScCheckbox label="暂不可选" disabled /></div></div></div>
    <div class="form-state"><span>实时绑定</span><ScBadge variant="neutral">{{ producer || '未填写' }}</ScBadge><ScBadge variant="neutral">音量 {{ volume }}</ScBadge><ScBadge variant="neutral">数量 {{ count }}</ScBadge><ScBadge :variant="selected ? 'pink' : 'neutral'">{{ selected ? '已选择' : '未选择' }}</ScBadge></div>
  </ShowcaseSection>
</template>
