import { createPinia } from 'pinia';
import piniaPluginPersist from 'pinia-plugin-persist';

export default function setupStore(app) {
    const pinia = createPinia();
    pinia.use(piniaPluginPersist);
    app.use(pinia);
}
