<template>
    <form @submit.prevent="sendFrom">
        <div class="box">
            <div class="form-group">
                <textarea v-model="newDiary" placeholder="Bugün neler oldu hadi anlat..."></textarea>
                <button>Günlüğü Gönder</button>
            </div>
        </div>
    </form>
</template>

<script setup>
import { ref } from 'vue';
import { useDiaryStore } from '../stores/diaryStore.js';
const gunlukStore = useDiaryStore();
// 

const newDiary = ref('');
const currentData = () => {
    const current = new Date()
    const date = `${current.getDate()}.${(current.getMonth() + 1)}.${current.getFullYear()}`;
    return date;
}
const sendFrom = () => {
    if (newDiary.value.length > 0) {
        gunlukStore.newDiary({
            id: Date.now(),
            diary: newDiary.value,
            date: currentData(),
            isFav: false,
        })
        console.log(gunlukStore.diary);
        newDiary.value = '';
    } else {
        alert('Lütfen gerekli alanı doldurunuz!')
    }
}

</script>

<style scoped>
.box {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 15px;
    padding: 15px;
    box-shadow: 2px 2px 4px #ccc;
    border: 1px solid #e2e2e2;
    border-radius: 3px;
    background-color: #fff;
    text-align: left;
}

.box .form-group {
    width: 100%;
    text-align: right;
}

.box textarea {
    height: 100px;
    width: 100%;
    border: 1px solid #e2e2e2;
    padding: 15px;
}

.box button {
    height: 35px;
    border: 1px solid #e2e2e2;
    padding: 5px 15px;
    margin-top: 10px;
    background-color: #ffd654;
    color: #333;
    cursor: pointer;
    transition: all .2s ease;
}

.box button:hover {
    background-color: #faca2c;
}
</style>