<script setup>
import { ref } from 'vue'

let message =ref("Hello world");
setTimeout(()=>{
  message.value="I have been changed"
},2000);

const doSomething = ()=> {
  alert("Hello there")
}
 </script>
<template>
  <h2>Home</h2>
  <p>{{message}}</p>
  <button @click="doSomething">Click me</button>
  <p>
    <input v-model="message" type="text"/>
  </p>
</template>
