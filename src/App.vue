<script setup>
import {ref} from "vue";

const counter = ref(0)
const alertCounter = ()=> alert(counter.value)
</script>
<template>
  <div class="routes">
    <button @click="alertCounter">Показать Counter</button>
    <div class="counter">
      <button @click="counter++" >+1</button>
      <button @click="counter--" >-1</button>
    </div>
    <p>Маршрутизация!</p>
    <div class="router-list">
      <router-link class="route" to="/">Главная</router-link>
      <router-link class="route" to="/photo">Фото</router-link>
    </div>

  </div>
  <router-view/>
</template>

