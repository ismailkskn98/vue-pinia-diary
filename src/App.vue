<template>
  <AppHeader />
  <appMain />
</template>

<script setup>
import AppHeader from './components/appHeader.vue';
import appMain from './components/appMain.vue';
import { useDiaryStore } from './stores/diaryStore.js'
const gunlukStore = useDiaryStore();
</script>

<style scoped></style>