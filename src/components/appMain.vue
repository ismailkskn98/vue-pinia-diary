<template>
    <main>
        <div class="container">
            <AppNewDiary />
            <header>
                <h4 v-if="diarysFilter === 'all'">tüm günlüklerim</h4>
                <h4 v-else-if="diarysFilter === 'favs'">sadece beğendiklerim</h4>

                <nav>
                    <button @click="diarysFilter = 'all'">Tüm günlüklerim</button>
                    <button @click="diarysFilter = 'favs'">Sadece Beğendiklerim</button>
                </nav>
            </header>
            <div class="gunluk-listesi" v-for="item in gunlukStore.diary" :key="item.id" v-if="diarysFilter === 'all'">
                <appGunlukDetail :item="item" />
            </div>
            <div class="gunluk-listesi" v-for="(item, i) in gunlukStore.favs" :key="i" v-else-if="diarysFilter === 'favs'">
                <appGunlukDetail :item="item" />
            </div>
            <div class="diaryCount">
                <p v-if="diarysFilter === 'all'">Toplam <span>{{ gunlukStore.totalCount }}</span> kayıt var</p>
                <p v-else-if="diarysFilter === 'favs'">Toplam <span>{{ gunlukStore.favCount }}</span> kayıt var</p>
            </div>
        </div>
    </main>
</template>

<script setup>
import { ref } from 'vue';
import appGunlukDetail from './appGunlukDetail.vue';
import { useDiaryStore } from '../stores/diaryStore.js';
import AppNewDiary from './appNewDiary.vue';
const gunlukStore = useDiaryStore();
const diarysFilter = ref('all');
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

main .container .diaryCount {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 10px;
}

main .container .diaryCount span {
    color: #52ce63;
}

main .container header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
}

main .container header h4 {
    text-transform: capitalize;
}

main .container header nav {
    display: flex;
    justify-content: center;
    align-items: center;
}

main .container nav button {
    height: 35px;
    margin-left: 5px;
    padding: 0 15px;
    border: 1px solid #e2e2e2;
    background-color: #ddd;
    cursor: pointer;
    transition: all .2s ease;
    text-transform: capitalize;
    letter-spacing: 1px;
}

main .container nav button:hover {
    background-color: #ffd654;
    border: 1px solid #ffd654;
    color: #333;
}
</style>