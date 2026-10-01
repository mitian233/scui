<script setup lang="ts">
defineProps<{ id: string; title: string; description: string; code: string; names: string }>()
</script>

<template>
  <section :id="id" class="showcase-section" :aria-labelledby="`${id}-title`">
    <header class="showcase-section__heading"><div><h2 :id="`${id}-title`">{{ title }}</h2><p>{{ description }}</p></div><code class="component-names">{{ names }}</code></header>
    <div class="showcase-section__stage"><slot /></div>
    <details class="code-example"><summary>查看用法 <span aria-hidden="true">&lt; / &gt;</span></summary><pre><code>{{ code }}</code></pre></details>
  </section>
</template>
