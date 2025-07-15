<template>
  <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols4 gap-8">
    <Card title="Project 1" description="This is the first project." />
    <Card title="Project 2" description="This is the second project." />
    <Card title="Project 3" description="This is the third project." />
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: "Projects",
});
</script>

<style></style>
