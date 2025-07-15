<script setup lang="ts">
import { Icon } from "@iconify/vue";

const props = defineProps<{
  text: string;
  icon: string;
}>();
</script>

<template>
  <div
    class="flex items-center justify-center gap-1 mb-4 border-2 border-(--ui-primary) p-2 rounded-full bg-(--ui-primary)/10"
  >
    <Icon
      v-if="!props.icon.startsWith('i-lucide')"
      :icon="props.icon"
      width="20"
      height="20"
    />
    <UIcon v-else :name="props.icon" class="text-(--ui-primary)" />
    <span class="text-(--ui-primary)">{{ props.text }}</span>
  </div>
</template>
