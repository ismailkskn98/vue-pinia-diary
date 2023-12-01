<template>
    <main>
        <div class="container">
            <div class="gunluk-listesi">
                <appGunlukDetail />
            </div>
        </div>
    </main>
</template>

<script setup>
import appGunlukDetail from './appGunlukDetail.vue';
</script>

<style scoped>
main {
    display: flex;
    justify-content: center;
}

main .container {
    max-width: 720px;
    width: 100%;
}
</style>