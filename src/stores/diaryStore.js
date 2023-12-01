import { defineStore } from "pinia";

export const useDiaryStore = defineStore('diaryStore', {
    state: () => ({
        diary: [
            { id: 1, diary: "Bugün hava bulutlu", data: "11.06.2023", isFav: false },
            { id: 2, diary: "Bugün pinia uygulamasına başladık", data: "12.06.2023", isFav: true }
        ],
        appTitle: 'kişiler günlüğüm',
    }),
    getters: {
        favs: (state) => state.diary.filter(gunluk => gunluk.isFav),
        totalCount: (state) => state.diary.length,
        favCount: (state) => state.diary.filter(gunluk => gunluk.isFav).length,
    }
})