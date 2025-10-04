<script setup>
import {counter} from '@/stores/counterStore.js'
</script>

<template>
  <div>
    <h1>{{counter.count}}</h1>
    <button @click="counter.increment">Count</button>
  </div>
</template>


<style scoped></style>
