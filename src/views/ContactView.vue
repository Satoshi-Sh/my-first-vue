<script setup>
import { useFlash } from '@/composable/useFlash.js'
let {flash} = useFlash();
</script>



<template>
  <h2>Contact</h2>
  <button @click="flash('Test','it Works','info')">Click me</button>
</template>
