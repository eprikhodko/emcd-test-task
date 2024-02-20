import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";
import { fetchUsers } from "../api";
import { User } from "./types";

export interface UserState {
  users: User[];
}

export const key: InjectionKey<Store<UserState>> = Symbol();

const state: UserState = {
  users: [],
};

export const store = createStore<UserState>({
  state,

  mutations: {
    setUsers(state: UserState, users: User[]) {
      state.users = [...state.users, ...users];
    },
  },

  actions: {
    async loadUsers({ commit }, query: string) {
      try {
        const users = await fetchUsers(query);
        commit("setUsers", users.results);
      } catch (error) {
        console.error("Failed to load users:", error);
      }
    },
  },
});
