<template>
  <div class="typing" :data-text="displayedText">
    {{ displayedText || "\u00A0" }}
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, watch } from "vue";

const props = defineProps<{ texts: string[] }>();
const displayedText = ref("");
let index = 0;
let characters: string[] = [];
let currentTextIndex = 0;

const type = () => {
  if (index < characters.length) {
    displayedText.value += characters[index];
    index++;
    setTimeout(type, Math.floor(Math.random() * 31) + 30);
  } else {
    setTimeout(() => {
      erase();
    }, 5000);
  }
};

const erase = () => {
  if (displayedText.value.length > 0) {
    displayedText.value = displayedText.value.slice(0, -1);
    setTimeout(erase, 30);
  } else if (props.texts.length > 0) {
    currentTextIndex = (currentTextIndex + 1) % props.texts.length;
    characters = Array.from(props.texts[currentTextIndex]);
    index = 0;
    type();
  } else {
    displayedText.value = "";
  }
};

onMounted(() => {
  characters = Array.from(props.texts[currentTextIndex]);
  type();
});

watch(
  () => props.texts,
  () => {
    currentTextIndex = 0;
    characters = Array.from(props.texts[currentTextIndex]);
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
  right: -10px;
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
