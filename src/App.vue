<template>
  <AppHeader />
  <appMain />
</template>

<script setup>
import { useDiaryStore } from './stores/diaryStore.js'
const gunlukStore = useDiaryStore();
gunlukStore.getDiary();
import AppHeader from './components/appHeader.vue';
import appMain from './components/appMain.vue';
</script>

<style scoped></style>