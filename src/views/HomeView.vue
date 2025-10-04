<script setup>
import TeamMembers from '@/components/Teams/TeamMembers.vue'
import TeamHeader from '@/components/Teams/TeamHeader.vue'
import TeamFooter from '@/components/Teams/TeamFooter.vue'
import Modal  from '@/components/Modal.vue'

import {useTeamStore} from '@/stores/TeamStore.js'
import { ref } from 'vue'
let team = useTeamStore();
team.fill()

let showModal = ref(false);

</script>

<template>
  <div class="p-20">
    <TeamHeader @showModal="showModal= !showModal" />
  <main>
    <TeamMembers />

  </main>
   <TeamFooter/>
  </div>
  <Modal :show="showModal" @toggleShow="showModal= !showModal">
    <template #header>
      Title
    </template>
    <template #default>
      <p>Add New Member</p>
      <form class="mt-6">
        <div class="flex gap-2">
          <input class="flex-1" type="email" placeholder="Enter Your Email Address" autofocus />
          <button>Add</button>
        </div>

      </form>
    </template>
    <template #footer>
      This is a new footer
    </template>
  </Modal>
</template>
