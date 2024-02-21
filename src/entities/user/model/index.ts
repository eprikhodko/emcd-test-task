import { createStore } from "vuex";
import { fetchUsers } from "../api";
import { User } from "./types";

/**
 * State structure for the user module.
 */

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
     /**
     * Mutates state to add new users.
     * @param state - The current state of the user module.
     * @param users - Array of users to add to the state.
     */
    setUsers(state: UserState, users: User[]) {
      users.forEach((user) => state.users.push(user));
    },
     /**
     * Sets the loading state for users data.
     * @param state - Current state of the user module.
     * @param status - The new loading status.
     */
    setPending(state: UserState, status: boolean) {
      state.isPending = status;
    },
  },

  actions: {
     /**
     * Asynchronously loads users based on a given query, then updates the state.
     * Prevents loading if a request is already pending, to minimize unnecessary requests.
     */
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
