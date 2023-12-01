<template>
    <header>
        <div class="container">
            <img src="../assets/pinia-logo.svg" alt="pinia-logo" title="pinia">
            <h1>{{ gunlukStore.appTitle }}</h1>
        </div>
    </header>
</template>

<script setup>
import { useDiaryStore } from '../stores/diaryStore.js';
const gunlukStore = useDiaryStore();


</script>

<style scoped>
header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 0;
    background-color: #333;
    color: white;
}

header .container {
    display: flex;
    justify-content: center;
    align-items: center;
}

header .container img {
    height: 42px;
    margin-right: 15px;
}

header .container h1 {
    color: #ccc;
    font-size: 28px;
    text-transform: capitalize;
    letter-spacing: 1.3px;
}
</style>