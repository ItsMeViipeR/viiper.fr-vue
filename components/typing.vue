<template>
  <div class="typing" :data-text="displayedText">
    {{ displayedText }}
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, watch } from "vue";

const props = defineProps<{ text: string }>();
const displayedText = ref("");
let index = 0;
let characters: string[] = [];

const type = () => {
  if (index < characters.length) {
    displayedText.value += characters[index];
    index++;
    setTimeout(type, Math.floor(Math.random() * 31) + 30);
  }
};

onMounted(() => {
  characters = Array.from(props.text);
  type();
});

watch(
  () => props.text,
  () => {
    characters = Array.from(props.text);
    displayedText.value = "";
    index = 0;
    type();
  }
);
</script>

<style scoped>
.typing {
  font-family: monospace;
  white-space: pre;
  display: inline-block;
  position: relative;
}

.typing::after {
  content: "|";
  animation: blink 1s step-start infinite;
  position: absolute;
  right: -20px;
}

.cursor {
  display: inline-block;
  animation: blink 1s step-start infinite;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>
