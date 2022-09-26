import { createApp } from 'vue'
import App from './App.vue'
import components from '@/components/UI/index'

const app = createApp(App)

components.forEach(component => {
    // метод component - регистрирует компонент глобально
    app.component(component.name, component)
})

app.mount('#app')
