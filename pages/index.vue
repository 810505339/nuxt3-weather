<script lang="ts" setup>
navigateTo('/weather')
</script>

<template>
  <div>
    <Suspense>
      <template #fallback>
        <div op50 italic>
          <span animate-pulse>Loading...</span>
        </div>
      </template>
    </Suspense>
  </div>
</template>
