<template>
    <div class="box">
        <div class="icerik">
            <p>{{ item.diary }}</p>
            <small class="date">{{ item.date }}</small>
        </div>
        <div class="icons">
            <i @click="gunlukStore.toggleFav(item.id)" :class="{ 'activeFav': item.isFav }"
                class="material-icons">favorite</i>
            <i @click="gunlukStore.deleteDiary(item.id)" class="material-icons">delete</i>
        </div>
    </div>
</template>

<script setup>
import { useDiaryStore } from '../stores/diaryStore.js';
const gunlukStore = useDiaryStore();
const props = defineProps({
    item: {
        type: Object,
        required: true,
    }
})
</script>

<style scoped>
.box {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 15px;
    padding: 20px;
    box-shadow: 2px 2px 4px #ccc;
    border: 1px solid #e2e2e2;
    border-radius: 3px;
    background-color: #fff;
    text-align: left;
}

.box .icons i {
    margin-left: 5px;
    color: #bbb;
    cursor: pointer;
    transition: all .2s ease;
}

.box .icons i:hover {
    color: #ffd654;
}

.box .icons i:last-child:hover {
    color: #dc3545;
}

.box .icerik {
    text-align: left;
}

.box .date {
    color: #bbb;
}

.box .icons i.activeFav {
    color: #ffd654;
}
</style>