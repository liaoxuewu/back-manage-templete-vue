import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import 'ant-design-vue/dist/antd.css'; // or 'ant-design-vue/dist/antd.less'

createApp(App).use(store).use(router).mount("#app");
