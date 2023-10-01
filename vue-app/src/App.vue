<script setup>
import HelloWorld from './components/HelloWorld.vue'
import CodeBlock from './components/CodeBlock.vue'

import {ref} from 'vue';

const code_blocks = ref([
  { code: 'console.log("Hello World");\nvar a = 1;', config: {name: 'sample1', language: 'javascript'}},
  { code: 'console.log("Hello World");\nvar a = 2;', config: {name: 'sample2', language: 'javascript'}},
])
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />

  <div v-for="(code_block, index) in code_blocks">
    <span>{{ index }} - {{ code_block.config.name }}</span>
    <CodeBlock :code="code_block.code" :config="code_block.config"/>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
