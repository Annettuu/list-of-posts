<script setup>
defineProps({
  title: String,
  body: String,
  author: String
})
</script>

<template>
  <article class="flex flex-col gap-2 shadow py-2 *:px-2 rounded-lg hover:bg-red-200 transition-all duration-300">
    <header class="text-xl">{{title}}</header>
    <p class="text-sm">{{body}}</p>
    <address class="author not-italic text-gray-400 mt-auto pt-2 border-t border-gray-400">{{author}}</address>
  </article>
</template>


<style lang="sass" scoped>
</style>