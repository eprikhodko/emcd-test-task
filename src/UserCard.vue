<template>
  <div
    class="bg-surface-stone rounded-3xl px-5 py-8 flex flex-col items-center gap-8"
  >
    <h3 class="text-2xl font-bold">{{ props.userName }}</h3>
    <img
      class="w-full rounded-full max-w-[128px]"
      :src="props.photo"
      alt="user photo"
    />
    <p class="text-l">{{ props.email }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  userName: { type: String, required: true },
  photo: { type: String, required: true },
  email: { type: String, required: true },
});
</script>
