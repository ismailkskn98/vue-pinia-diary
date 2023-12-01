import { defineStore } from "pinia";

export const useDiaryStore = defineStore('diaryStore', {
    state: () => ({
        diary: [
            { id: 1, diary: "Bugün hava bulutlu", data: "11.06.2023", isFav: false },
            { id: 2, diary: "Bugün pinia uygulamasına başladık", data: "12.06.2023", isFav: false }
        ],
        appTitle: 'kişiler günlüğüm',
    })
})