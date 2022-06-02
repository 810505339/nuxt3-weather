<script setup lang="ts">
const search = $ref('')
let show = $ref(false)
const target = $ref(null)
const { data, refresh, pending } = useLazyAsyncData<{ location: CityType[] }>('/api/city', () => $fetch('/api/city', {
  params: {
    location: search,
  },
}), {
  pick: ['location'],

})

onClickOutside($$(target), event => show = false)
watchDebounced($$(search),
  () => {
    refresh()
    show = true
  },
  { debounce: 1000 })

const location = $computed(() => data.value.location ?? [])
</script>

<template>
  <div ref="target" relative inline-block>
    <input
      v-model="search"
      placeholder="请输入城市"
      font="sans"
      text="center"
      bg="transparent"
      type="text"
      border="~ rounded gray-200 dark:gray-700" autocomplete="off" p="x-4 y-2" m="y3"
      w="250px"
      outline="none active:none"
      @click="show = true"
    >
    <city-list v-show="show && search" :location="location" :pending="pending" />
  </div>
</template>
