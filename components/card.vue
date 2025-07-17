<template>
  <div class="inset-0 flex flex-col items-center text-white font-sans h-full">
    <section
      class="flex flex-col justify-between bg-(--ui-primary)/20 border-2 border-(--ui-primary) p-8 rounded-2xl shadow-lg w-full max-w-xl h-full"
    >
      <div class="flex-grow">
        <img
          v-if="props.imageUrl"
          :src="props.imageUrl"
          alt="Project Image"
          class="w-full h-48 object-cover rounded-lg mb-4"
        />
        <h2 class="mb-4 text-3xl font-semibold min-h-[3.5rem]">
          {{ props.title }}
        </h2>
        <p class="text-lg text-gray-300">{{ props.description }}</p>
      </div>
      <UButton :to="projectUrl" class="mt-6 w-full" color="primary">
        <div class="w-full text-center">View Project</div>
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
