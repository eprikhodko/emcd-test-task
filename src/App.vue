<template>
  <div class="max-w-[1280px] mx-auto mt-16">
    <div class="grid grid-cols-4 gap-8">
      <UserCard
        v-for="user in users"
        :key="user.login.uuid"
        :user-name="user.name.first"
        :photo="user.picture.large"
        :email="user.email"
      />
      <ObserverComp @intersect="handleIntersect" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
import ObserverComp from "./components/ObserverComp.vue";
import UserCard from "./components/UserCard.vue";
import { useStore } from "vuex";

const store = useStore();

onMounted(() => {
  store.dispatch("loadUsers", "20");
});

const handleIntersect = async () => {
  store.dispatch("loadUsers", "20");
};

const users = computed(() => store.state.users);
</script>
