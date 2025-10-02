<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <h1>You did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/about">About</RouterLink>
  <RouterLink to="/contact">Contact</RouterLink>
  <RouterView/>
</template>

<style scoped></style>
