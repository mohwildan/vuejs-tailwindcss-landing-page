import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import "./assets/main.css";

const store = createStore({
  state() {
    return {
      isActive: false,
    };
  },
  mutations: {
    isActive(state, payload) {
      state.isActive = payload.isActive;
    },
  },
});
const app = createApp(App);
app.use(store);
app.mount("#app");
