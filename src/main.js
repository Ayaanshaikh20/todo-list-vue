import { createApp } from 'vue'
import App from './App.vue'
import EditButton from './components/Buttons/edit-button.vue'
import RemoveButton from './components/Buttons/remove-button.vue'
import CompletedButton from './components/Buttons/completed-button.vue'



const app = createApp(App)
app.component('Edit-button', EditButton)
app.component('Remove-button', RemoveButton)
app.component('Completed-button', CompletedButton)
app.mount('#app')
