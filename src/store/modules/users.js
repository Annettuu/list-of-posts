import axios from "axios";

export const users = {
    namespaced: true,
    state: {
        users: null
    },
    getters: {
        GET_USERS: state => state.users
    },
    mutations: {
        SET_USERS(state, users) {
            state.users = users;
        }
    },
    actions: {
        async fetchUsers({ commit }) {
            try {
                const response =
                    await axios.get('https://jsonplaceholder.typicode.com/users');
                commit('SET_USERS', response.data);
            } catch (error) {
                console.error(error);
            }
        }
    },
}