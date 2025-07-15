<template>
  <div class="flex flex-col items-center justify-center gap-4 h-screen">
    <slot />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Page Title",
  titleTemplate: "%s - ViipeR",
});
</script>
