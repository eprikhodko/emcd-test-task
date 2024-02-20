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
import { computed } from "vue";
import ObserverComp from "./components/ObserverComp.vue";
import UserCard from "./components/UserCard.vue";

import { useStore } from "vuex";
import { key } from "../src/entities/user/model";

const store = useStore(key);

const handleIntersect = () => {
  store.dispatch("loadUsers", "20");
  console.log(store.state.users.results);
};

const users = computed(() => store.state.users.results);
</script>
