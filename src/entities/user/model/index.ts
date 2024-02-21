import { createStore, ActionContext } from "vuex";
import { fetchUsers } from "../api";
import { User } from "./types";

export interface UserState {
  users: User[];
}

const state: UserState = {
  users: [],
};

export const store = createStore<UserState>({
  state,

  mutations: {
    setUsers(state: UserState, users: User[]) {
      users.forEach((user) => state.users.push(user));
    },
  },

  actions: {
    async loadUsers(
      { commit }: ActionContext<UserState, UserState>,
      query: string
    ) {
      try {
        const users = await fetchUsers(query);
        commit("setUsers", users.results);
      } catch (error) {
        console.error("Failed to load users:", error);
      }
    },
  },
});
