import './assets/main.css'
import tolgeeService from "@/service/tolgee_service.js";
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import VueGtag from "vue-gtag";

import App from './App.vue'
import router from './router'

const i18n = createI18n({
  legacy: false,
  locale: "pt-BR",
  fallbackLocale: "en-US",
  globalInjection: true,
  messages: {},
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueGtag, {
  config: { id: "G-BM2FRYX5HE" }
})
app.use(i18n)

async function loadTranslations() {
  try {
    const languages = ["en-US", "es-ES"];
    const translations = await tolgeeService.getTranslations(languages);

    Object.entries(translations).forEach(([lang, messages]) => {
      i18n.global.setLocaleMessage(lang, messages);
    });
    console.log("Traduções carregadas com sucesso");
  } catch (error) {
    console.error("Erro ao carregar traduções:", error);
  }
}

loadTranslations().then(() => {
  app.mount("#app");
});
