import { createApp } from "vue";
import { store, key } from "@/entities/user/model";
import "@/assets/css/tailwind.css"
import App from "@/App.vue";

export const app = createApp(App).use(store, key);
