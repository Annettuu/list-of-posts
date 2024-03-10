import axios from "axios";

export const posts = {
    namespaced: true,
    state: {
        posts: null
    },
    getters: {
        GET_POSTS: state => state.posts
    },
    mutations: {
        SET_POSTS(state, posts) {
            state.posts = posts;
        }
    },
    actions: {
        async fetchPosts({ commit }) {
            try {
                const response =
                    await axios.get('https://jsonplaceholder.typicode.com/posts');
                commit('SET_POSTS', response.data);
            } catch (error) {
                console.error(error);
            }
        }
    },
}