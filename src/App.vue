<template>
  <div class="max-w-[1280px] mx-auto mt-16">
    <div class="grid grid-cols-4 gap-8">
      <UserCard
        v-for="user in users"
        :key="user.login.uuid"
        :userName="user.name.first"
        :photo="user.picture.large"
        :email="user.email"
      />
      <ObserverComp @intersect="handleIntersect" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";
import ObserverComp from "./ObserverComp.vue";
import UserCard from "./UserCard.vue";

interface User {
  login: {
    uuid: string;
  };
  name: {
    first: string;
  };
  picture: {
    large: string;
  };
  email: string;
}

const users = ref<User[]>([]);

const handleIntersect = async () => {
  try {
    const response = await axios.get("https://randomuser.me/api/?results=20");
    users.value = [...users.value, ...response.data.results];
  } catch (err) {
    console.error(err);
  }
}
</script>
