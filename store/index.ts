import { reactive } from "vue";
import type Store from "@/types/store";

const store: Store = reactive({
  notifications: [],
});

export default store;
