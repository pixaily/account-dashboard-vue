import { createApp } from 'vue'
import App from './App.vue'

import router from './router.js';
import store from './store/index.js';

import BaseButton from './components/base-elements/BaseButton.vue';
import BaseSection from './components/base-elements/BaseSection.vue';
import BaseIcon from './components/base-elements/BaseIcon.vue';

const app = createApp(App);

app.component('base-button', BaseButton);
app.component('base-section', BaseSection);
app.component('base-icon', BaseIcon);

app.use(router)
app.use(store)

app.mount('#app')
