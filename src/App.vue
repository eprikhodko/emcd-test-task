<template>
  <div class="max-w-[1280px] mx-auto mt-16">
    <div class="grid grid-cols-4 gap-8">
      <UserCard
        v-for="item in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]"
        :key="item"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import UserCard from "./UserCard.vue";
</script>
