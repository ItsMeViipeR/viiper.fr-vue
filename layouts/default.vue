<template>
  <Header />
  <div class="flex flex-col items-center justify-center gap-4 min-h-screen">
    <UContainer class="py-16 items-center justify-center flex flex-col gap-4">
      <slot />
    </UContainer>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Page Title",
  titleTemplate: "%s - ViipeR",
});
</script>
