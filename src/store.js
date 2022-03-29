import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            userData: {
                interests: [],
                smoking: 2,
                snoring: 5,
                kids: 2,
                animals: 2,
                gender: 'Мужчина',
                age: 50,
                talkative: 0,
                familyStatus: 'search',
                languages: []
            }
        }
    },
    mutations: {
        updateState(state, data) {
            state.userData[data.type] = data.value;
        },
        pushToArray(state, data) {

            data.value.forEach((item) => {

                if(state.userData[data.type].includes(item) || item == '') {
                    return
                } else {
                    state.userData[data.type].push(item)
                }

            })

        }
    }
})

export default store;