import { createStore } from "vuex";
import { fetchUsers } from "../api";
import { User } from "./types";

export interface UserState {
  users: User[];
  isPending: boolean;
}

const state: UserState = {
  users: [],
  isPending: false,
};

export const store = createStore<UserState>({
  state,

  mutations: {
    setUsers(state: UserState, users: User[]) {
      users.forEach((user) => state.users.push(user));
    },
    setPending(state: UserState, status: boolean) {
      state.isPending = status;
    },
  },

  actions: {
    async loadUsers({ commit, state }, query: string) {
      if (state.isPending) return;
      commit("setPending", true);
      try {
        const users = await fetchUsers(query);
        commit("setUsers", users.results);
      } catch (error) {
        console.error("Failed to load users:", error);
      } finally {
        commit("setPending", false);
      }
    },
  },
});
