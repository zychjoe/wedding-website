import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from './router'
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import Dialog from 'primevue/dialog'
import Checkbox from 'primevue/checkbox'
import RadioButton from 'primevue/radiobutton'
import Card from 'primevue/card'
import Password from 'primevue/password'

import 'primevue/resources/themes/lara-light-blue/theme.css'
import 'primeicons/primeicons.css'

const app = createApp(App)

app.use(router)
app.use(PrimeVue)

app.component('Button', Button)
app.component('InputText', InputText)
app.component('Textarea', Textarea)
app.component('Dialog', Dialog)
app.component('Checkbox', Checkbox)
app.component('RadioButton', RadioButton)
app.component('Card', Card)
app.component('Password', Password)

app.mount('#app')