import { defineStore } from "pinia";

export const useDiaryStore = defineStore('diaryStore', {
    state: () => ({
        diary: [],
        appTitle: 'kişisel günlüğüm',
        url: 'http://localhost:3000/diary',
        loading: false,
    }),
    getters: {
        favs: (state) => state.diary.filter(gunluk => gunluk.isFav),
        totalCount: (state) => state.diary.length,
        favCount: (state) => state.diary.filter(gunluk => gunluk.isFav).length,
    },
    actions: {
        async getDiary() {
            this.loading = true;
            const response = await fetch(this.url, { method: 'GET' });
            const data = await response.json();
            this.diary = data;
            this.loading = false;
        },
        async newDiary(diary) {
            const res = await this.diary.find(item => item.diary == diary.diary);
            if (typeof res === 'undefined') {
                await fetch(this.url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(diary),
                })
                this.getDiary();
            } else {
                alert('aynı texti tekrar giremezsiniz!');
            }
        },
        async toggleFav(id) {
            const gunluk = await this.diary.find(gunluk => gunluk.id === id);
            await fetch(`${this.url}/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ isFav: !gunluk.isFav })
            })
            this.getDiary();
        },
        async deleteDiary(id) {
            // this.diary = this.diary.filter(gunluk => gunluk.id !== id);
            await fetch(`${this.url}/${id}`, { method: 'DELETE' });
            this.getDiary();
        }
    }
})