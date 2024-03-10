<script setup>
defineProps({
  title: String,
  body: String,
  author: String
})
</script>

<template>
  <div class="flex flex-col gap-2 shadow py-2 *:px-2 rounded-lg hover:bg-red-200 transition-all duration-300">
    <div class="text-xl">{{title}}</div>
    <div class="text-sm">{{body}}</div>
    <div class="text-gray-400 mt-auto pt-2 border-t border-gray-400">{{author}}</div>
  </div>
</template>


<style lang="sass" scoped>
</style>