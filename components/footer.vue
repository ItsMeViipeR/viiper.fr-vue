<template>
  <footer class="p-4 border-t-2 border-primary">
    <UContainer class="text-center text-white">
      <p>
        &copy; {{ year }}
        <NuxtLink
          to="https://www.viiper.fr"
          target="_blank"
          class="text-primary"
          >ViipeR</NuxtLink
        >
        – All right reserved.
      </p>
    </UContainer>
  </footer>
</template>

<script setup lang="ts">
const actualYear = new Date().getFullYear();
const year = actualYear === 2025 ? actualYear : `2025 - ${actualYear}`;
</script>
