<script setup>
import { inject } from "vue";
import QuizFooterLinks from "@/components/Quiz/QuizFooterLinks.vue";

defineProps({
  quiz: Object
});

</script>

<template>
  <div>
    <h5>{{quiz.name}}</h5>
  </div>

  <footer>
    <h4>Quiz Footer</h4>
    <QuizFooterLinks :quiz="quiz" />
  </footer>
</template>
