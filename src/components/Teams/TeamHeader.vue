<script setup>
import {useTeamStore} from '@/stores/TeamStore.js'
let team = useTeamStore();
// setTimeout(()=>{team.grow(10)},2000)
</script>

<template>
  <header class="flex justify-between">
    <div>
      <button @click="$emit('showModal')" class=" bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded disabled:bg-gray-400 cursor-pointer"
              :disabled="! team.remaining">Add Member ({{team.remaining}} Spots Left)</button>
    </div>

    <div>
      <div class="inline-flex items-center text-3xl relative">
        <img src="" alt="" class="mr-2">
        <h3>{{ team.name }}</h3>
        <div class="bg-green-400 w-5 h-5 text-xs text-white rounded-full flex justify-center items-center absolute -right-2 -top-2">{{ team.spots }}</div>
      </div>
    </div>
  </header>
</template>

<style scoped></style>
