<template>
  <Header />
  <div class="flex flex-col items-center gap-4 min-h-[calc(100vh-65px)]">
    <UContainer class="mt-24 items-center justify-center flex flex-col gap-4">
      <slot />
    </UContainer>
  </div>
  <Footer />
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Page Title",
  titleTemplate: "%s - ViipeR",
});
</script>
