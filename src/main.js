import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

app.component('vue-select', VueSelect);

app.mount('#app');
