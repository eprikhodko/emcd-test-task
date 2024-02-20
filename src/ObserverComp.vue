<template>
  <div ref="observerElement" />
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

const emit = defineEmits(["intersect"]);

const observerElement = ref(null);
let observer: IntersectionObserver | null = null;

onMounted(() => {
  const options = {
    root: null,
    rootMargin: "400px",
    threshold: 1.0,
  };

  observer = new IntersectionObserver(([entry]) => {
    if (entry && entry.isIntersecting) {
      emit("intersect");
    }
  }, options);

  if (observerElement.value) {
    observer.observe(observerElement.value);
  }
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>
