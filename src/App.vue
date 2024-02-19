<template>
  <div class="max-w-[1280px] mx-auto mt-16">
    <div class="grid grid-cols-4 gap-8">
      <div v-if="isLoading">Loading...</div>
      <UserCard
        v-else
        v-for="user in users"
        :key="user.id.value"
        :userName="user.name.first"
        :photo="user.picture.large"
        :email="user.email"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import axios from "axios";
import UserCard from "./UserCard.vue";

const users = ref([]);
const isLoading = ref(false);
const error = ref(null);

async function fetchUsers() {
  isLoading.value = true;
  error.value = null;
  try {
    const response = await axios.get("https://randomuser.me/api/?results=20");
    users.value = response.data.results;
    console.log(users.value);
  } catch (err) {
    error.value = err;
  } finally {
    isLoading.value = false;
  }
}

onMounted(fetchUsers);
</script>
