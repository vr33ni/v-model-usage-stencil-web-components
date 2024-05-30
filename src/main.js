import { createApp } from 'vue'
import App from './App.vue'
import store from "@/store/index";
import { ComponentLibrary } from "@infineon/infineon-design-system-vue";

createApp(App)
.use(store)
.use(ComponentLibrary)
.mount('#app')
