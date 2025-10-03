<script setup>

import {useStorage} from '@/composable/useStorage.js'

let food = useStorage('food','salad')
let age =  useStorage('age', 22)

// let food = ref(localStorage.getItem('food'));
// let age = ref(localStorage.getItem('age'));


</script>
<template>
  <p>
    What is your favorite food? <input type="text" v-model="food">
  </p>
  <p>
    How old are you? <input type="text" v-model="age">
  </p>
  <p>{{food}}</p>
</template>
