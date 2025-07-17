<template>
  <div class="inset-0 flex flex-col items-center text-white font-sans">
    <section
      class="bg-(--ui-primary)/20 border-2 border-(--ui-primary) p-8 rounded-2xl shadow-lg w-full max-w-xl"
    >
      <img
        v-if="props.imageUrl"
        :src="props.imageUrl"
        alt="Project Image"
        class="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h2 class="mb-4 text-3xl font-semibold">{{ props.title }}</h2>
      <p class="text-lg text-gray-300">{{ props.description }}</p>
      <UButton :to="projectUrl" class="mt-6" color="primary">
        View Project
      </UButton>
    </section>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  title: string;
  description: string;
  imageUrl?: string;
  projectUrl: string;
}>();
</script>

<style></style>
