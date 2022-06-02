<script setup lang="ts">
const route = useRoute()
const id = route.params.id
const { data } = useLazyAsyncData('/api/weather', () => {
  return $fetch('/api/weather', {
    params: {
      location: id,
    },
  })
}, {

})
</script>

<template>
  <div>
    <i class="qi-150-fill" text-blue-500 />
    {{ data }}
  </div>
</template>

<style scoped>
@import 'qweather-icons/font/qweather-icons.css'
</style>
