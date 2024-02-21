import { http } from "@/shared/api";

export const fetchUsers = async (query: string) => {
  return (await http.get(`/?results=${query}`)).data;
};
