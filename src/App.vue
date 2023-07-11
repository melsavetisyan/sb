<template>
  <InputV2 v-model="mv" type="email" />
  {{mv}}
</template>

<script setup>
import InputV2 from "./components/inputV2/InputV2.vue";
import {ref} from 'vue'
const mv = ref('')

</script>