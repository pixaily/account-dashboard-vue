import { createApp } from 'vue'
import App from './App.vue'

import BaseButton from './components/base-elements/BaseButton.vue';

import router from './router.js';
import store from './store/index.js';

const app = createApp(App);

app.component('base-button', BaseButton);

app.use(router)
app.use(store)

app.mount('#app')
