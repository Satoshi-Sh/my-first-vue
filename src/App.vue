<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <nav class="flex gap-5 m-6">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/contact">Contact</RouterLink>
    <RouterLink to="/counter">Counter</RouterLink>
  </nav>
  <RouterView/>
</template>

<style scoped></style>
