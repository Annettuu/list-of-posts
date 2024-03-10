<script setup>
import {debounce} from "@/helper/debounce.js";
import {ref} from "vue";

const searchValue = ref('')
const props = defineProps({
  mode: {
    type: String,
    default: ''
  }
})
const emit = defineEmits(['input'])

const handleEmit = debounce((value) => {
  emit('input', value)
}, 200)

const handleInput = ({target}) => {
  let value = target.value
  const modifiersMap = {
    lowerCase: value.toLowerCase()
  }
  value = props.mode ? modifiersMap[props.mode] : value

  searchValue.value = target.value
  handleEmit(value)
}
</script>

<template>
  <input type="text"
         class="w-full bg-white py-2 px-4 text-black placeholder-gray-300 border border-gray-400 rounded-full"
         placeholder="Поиск по авторам"
         @input="handleInput"
         :value="searchValue">
</template>

<style lang="sass" scoped>
.v-search
  position: sticky
  top: 0
  z-index: 99
  background: white
</style>