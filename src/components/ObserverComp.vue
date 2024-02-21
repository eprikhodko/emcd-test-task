<template>
  <div ref="observerElement" />
</template>

<script setup lang="ts">
import { useIntersectionObserver } from "@/shared/composables/useIntersectionObserver";

const observerOptions = {
  root: null,
  rootMargin: "400px",
  threshold: 1.0,
};

const emit = defineEmits(["intersect"]);
const { observerElement } = useIntersectionObserver(
  () => emit("intersect"),
  observerOptions
);
</script>
