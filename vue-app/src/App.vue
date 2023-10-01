<script setup>
import HelloWorld from './components/HelloWorld.vue'
import CodeBlock from './components/CodeBlock.vue'

import {ref} from 'vue';

const code_blocks = ref([
  { code: 'console.log("Hello World");\nvar a = 1;', config: {name: 'sample1', language: 'javascript'}},
  { code: 'console.log("Hello World");\nvar a = 2;', config: {name: 'sample2', language: 'javascript'}},
])

const headers= [
  {
    title: 'Dessert (100g serving)',
    align: 'start',
    sortable: false,
    key: 'name',
  },
  { title: 'Calories', align: 'end', key: 'calories' },
  { title: 'Fat (g)', align: 'end', key: 'fat' },
  { title: 'Carbs (g)', align: 'end', key: 'carbs' },
  { title: 'Protein (g)', align: 'end', key: 'protein' },
  { title: 'Iron (%)', align: 'end', key: 'iron' },
]

const baseItem = {
  name: 'Frozen Yogurt',
  calories: 159,
  fat: 6.0,
  carbs: 24,
  protein: 4.0,
  iron: '1',
}

const virtualDesserts = [ ]
for (let i = 0; i < 100; ++i) {
  virtualDesserts.push(structuredClone(baseItem))
  baseItem.calories += 1000
}
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

  <v-virtual-scroll
    :height="300"
    :items="['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30']"
  >
    <template v-slot:default="{ item }">
      <h2> Item {{ item }} </h2>
      <span v-for="n in Number(item)" :key="n"><h2> Item {{ item }} </h2></span>
    </template>
  </v-virtual-scroll>

   <v-container class="fill-height">
     <v-responsive class="d-flex align-center text-center fill-height">
       <v-data-table-virtual :headers="headers" :items="virtualDesserts" class="elevation-1" item-value="name" showSelect>
       </v-data-table-virtual>
     </v-responsive>
   </v-container>

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
