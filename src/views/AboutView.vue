<script setup>
import {counter} from '@/stores/counterStore.js'
</script>

<template>
  <h2>About</h2>
  <p>{{counter.count}}</p>
</template>
