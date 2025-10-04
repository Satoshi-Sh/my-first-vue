<script setup lang="ts">
defineProps({
  show: Boolean,
})
</script>

<template>
  <div v-if="show" class="modal-mask">
    <div class="modal-container">
      <div class="flex justify-between">
        <header>
          <slot name="header">default header</slot>
        </header>
        <button class="cursor-pointer" @click="$emit('toggleShow')">Close</button>
      </div>
      <div><slot>default body</slot></div>
      <footer class="modal-footer">
        <slot name="footer">footer</slot>
      </footer>

    </div>

  </div>
</template>

<style scoped>
.modal-mask {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,.6);
  display: grid;
  place-items: center;
}
.modal-container {
  width: 80%;
  max-width: 500px;
  background: white;
  padding: 1rem;
  border-radius: 5px;
}
.modal-footer{
  border-top: black solid 1px;
  margin-top: 1rem;
  padding-top: 0.5rem;
  font-size: 0.8rem;
}
button{
  background: #ddd;
  padding: .25rem .75rem;
  border-radius: 20px;
}

button:hover{
  background:  #ac9a9a
}
</style>
