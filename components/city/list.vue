<script lang="ts" setup>
const props = defineProps<{ location: CityType[]; pending: boolean }>()
const router = useRouter()

function handleClick(id: number) {
  router.push(`/weather/${id}`)
}
</script>

<template>
  <div rounded absolute text-center w-full z5 shadow bg-white min-h-10 dark="bg-gray-500 highlight-white/5 ring-0">
    <div v-if="location.length > 0" cursor-pointer text-sm>
      <div v-for="l in location" :key="l.id" py="1.5" hover="bg-slate-50/400" @click="handleClick(l.id)">
        {{ l.name }} - {{ l.adm1 }}
      </div>
    </div>
    <div v-else py="1.5">
      暂无更多城市
    </div>
  </div>
</template>
