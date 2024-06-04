import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import { Quasar } from "quasar";
import quasarIconSet from "quasar/icon-set/mdi-v7";

// Import icon libraries
import "@quasar/extras/material-icons/material-icons.css";

// Import Quasar css
import "quasar/src/css/index.sass";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Quasar, {
    plugins: {},
    iconSet: quasarIconSet, // import Quasar plugins and add here
    config: {
        dark: "auto",
    },
});

app.mount("#app");
