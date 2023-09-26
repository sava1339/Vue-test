<script setup>
import {ref} from "vue";
import Test from "./Test.vue";
import Picture from "./Picture.vue"
import Greeting from "./Greeting.vue"

const counter = ref(0)
const numberFirst = ref(0)
const numberSecond = ref(0)
</script>

<template>
  <p>Ого снизу красный квадрат 40 на 40 пикселей</p>
  <div class="square"></div>
  <Greeting name="Saveliy" />
  <p>{{counter}}</p>
  <p>{{numberFirst + numberSecond}}</p>
  <button @click="counter++">+</button>
  <button @click="counter--">-</button>
  <input type="number" v-model="numberFirst">
  <input type="number" v-model="numberSecond">
  <Test/>
  <Picture/>
</template>

<style>
.square{
  width: 40px;
  height: 40px;
  background: red;
}
</style>

<script>
export default{
  created(){
    console.log('Created hook called')
  },
  updated(){
    console.log('page was updated')
  }
}
</script>