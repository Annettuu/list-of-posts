<script setup>
import VPost from "@/components/main-page/v-post.vue";
import VSearch from "@/components/main-page/v-search.vue";
import {useStore} from 'vuex';
import {computed, onBeforeMount, ref} from "vue";

const store = useStore();

const filter = ref('');

const posts = computed(() => store.getters['posts/GET_POSTS']);
const users = computed(() => store.getters['users/GET_USERS']);

const computedUsers = computed(() => {
  const userNameMap = {};
  if (!users.value) return userNameMap;
  users.value.forEach(user => {
    userNameMap[user.id] = user;
  })
  return userNameMap;
})
const computedPosts = computed(() => {
  if (!users.value) return [];
  return posts.value.map(post => {
    post.author = computedUsers.value[post.userId]?.name || 'no author';
    return post;
  })
})
const filteredPosts = computed(() => {
  if (!posts.value || !users.value) return [];

  return computedPosts.value.filter((post) => {
    const user = computedUsers.value[post.userId]
    return user && user.name.toLowerCase().includes(filter.value);
  });
});

const fetchPosts = () => {
  store.dispatch('posts/fetchPosts');
}
const fetchUsers = () => {
  store.dispatch('users/fetchUsers');
}

onBeforeMount(() => {
  fetchPosts();
  fetchUsers();
});
</script>

<template>
  <div class="main-page">
    <VSearch @input="(value) => (filter = value)" mode="lowerCase" class="sticky top-2"/>
    <section class="main-page_container grid gap-4 mt-2">
      <VPost
          v-for="post of filteredPosts"
          :key="post.id"
          :title="post.title"
          :body="post.body"
          :author="post.author"
      />
    </section>
  </div>
</template>

<style lang="postcss" scoped>
.main-page_container {
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}
</style>