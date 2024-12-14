import './assets/main.css'
import './assets/flags/flags.css'
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
  const CACHE_KEY = "translations_cache";
  const CACHE_TIMESTAMP_KEY = "translations_cache_timestamp";
  const CACHE_VALIDITY_PERIOD = 3 * 24 * 60 * 60 * 1000;

  try {
    const cachedTranslations = JSON.parse(localStorage.getItem(CACHE_KEY));
    const cacheTimestamp = localStorage.getItem(CACHE_TIMESTAMP_KEY);
    const isCacheValid =
      cacheTimestamp &&
      new Date().getTime() - new Date(cacheTimestamp).getTime() < CACHE_VALIDITY_PERIOD;

    if (isCacheValid && cachedTranslations) {
      console.log("Carregando traduções do cache...");
      Object.entries(cachedTranslations).forEach(([lang, messages]) => {
        i18n.global.setLocaleMessage(lang, messages);
      });
      return;
    }

    console.log("Cache inválido ou inexistente. Buscando novas traduções...");
    const languages = ["en-US", "es-ES", "pt-PT"];
    const translations = await tolgeeService.getTranslations(languages);

    localStorage.setItem(CACHE_KEY, JSON.stringify(translations));
    localStorage.setItem(CACHE_TIMESTAMP_KEY, new Date().toISOString());

    Object.entries(translations).forEach(([lang, messages]) => {
      i18n.global.setLocaleMessage(lang, messages);
    });

    console.log("Traduções carregadas e cache atualizado.");
  } catch (error) {
    console.error("Erro ao carregar traduções:", error);

    const fallbackTranslations = JSON.parse(localStorage.getItem(CACHE_KEY));
    if (fallbackTranslations) {
      console.warn("Usando traduções do cache devido a erro na API.");
      Object.entries(fallbackTranslations).forEach(([lang, messages]) => {
        i18n.global.setLocaleMessage(lang, messages);
      });
    }
  }
}

loadTranslations().then(() => {
  app.mount("#app");
});

