<script setup>
import {ref} from 'vue'
const props = defineProps({
  name:String
})
const status = ref(false)
const arr = [
  {id:1,nick:"Николай"},
  {id:2,nick:"Вика"},
  {id:3,nick:"Наташа"},
]
</script>

<template>
  <div class="bold">
    <p>{{props.name}} was made this website!!</p>
  </div>
  <div class="bold" v-for="el in arr" v-bind:key="el.id">
    <p>Уникальный номер: {{el.id}}</p>
    <p>Имя: {{el.nick}}</p>
  </div>
  <div >
    <button @click="status= !status" > <p v-if='status'>Вход разрешен</p> <p v-if='!status'> Вход воспрещен</p> {{status}}</button>
  </div>
</template>