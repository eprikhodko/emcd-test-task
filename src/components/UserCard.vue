<template>
  <div
    class="bg-gray-100 rounded-3xl px-5 py-8 flex flex-col items-center gap-8"
  >
    <h3 class="text-sm md:text-2xl font-bold">{{ props.userName }}</h3>
    <img
      class="w-full rounded-full max-w-[96px] md:max-w-[128px]"
      :src="props.photo"
      alt="user photo"
    />
    <p class="text-xs md:text-[16px]">{{ props.email }}</p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  userName: string;
  photo: string;
  email: string;
}

const props = defineProps<Props>();
</script>
