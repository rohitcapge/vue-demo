import { createApp } from 'vue';
import App from './App.vue';
import BaseCardLayout from './components/UI/BaseCardLayout.vue'
import BaseButton from './components/UI/BaseButton.vue';
import BaseDialog from './components/UI/BaseDialog.vue';

const app = createApp(App)
app.component('base-card-layout', BaseCardLayout)
app.component('base-button', BaseButton)
app.component('base-dialog', BaseDialog)
app.mount('#app');
