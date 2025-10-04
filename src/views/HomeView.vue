<script setup>
import TeamMembers from '@/components/Teams/TeamMembers.vue'
import team from '@/team.json'
import TeamHeader from '@/components/Teams/TeamHeader.vue'
import TeamFooter from '@/components/Teams/TeamFooter.vue'


</script>

<template>
  <div class="p-20">
    <TeamHeader :team="team" />
  <main>
    <TeamMembers :team="team" />

  </main>
   <TeamFooter :team = "team" />
  </div>
</template>
