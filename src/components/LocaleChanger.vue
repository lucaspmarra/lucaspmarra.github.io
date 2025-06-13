<script setup>
import { onMounted, ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const selected_country = ref()
const { locale, availableLocales } = useI18n()
const dropdownOpen = ref(false)

const country_codes = computed(() =>
  availableLocales.map(locale => {
    const parts = locale.split('-')
    return { name: locale, code: parts[1] }
  }),
)

const onSelectionChange = country => {
  selected_country.value = country
  locale.value = country.name

  localStorage.setItem('preferred_language', country.name)
}

document.addEventListener('click', e => {
  if (!e.target.closest('.relative') && dropdownOpen.value) {
    dropdownOpen.value = false
  }
})

onMounted(() => {
  /* const urlParams = new URLSearchParams(window.location.search)
  const langParam = urlParams.get('lang')

  if (langParam) {
    const validLocales = ['en-US', 'es-ES', 'pt-BR', 'pt-PT']
    if (validLocales.includes(langParam)) {
      const defaultCountry = country_codes.value.find(
        country => country.name === langParam
      )
      if (defaultCountry) {
        selected_country.value = defaultCountry
        locale.value = defaultCountry.name
        localStorage.setItem('preferred_language', defaultCountry.name)
        return
      }
    }
  }
 */
  const savedLocale = localStorage.getItem('preferred_language')
  if (savedLocale) {
    const defaultCountry = country_codes.value.find(
      country => country.name === savedLocale,
    )
    if (defaultCountry) {
      selected_country.value = defaultCountry
      locale.value = defaultCountry.name
    }
  } else {
    const userLang = navigator.language.slice(0, 2)
    const defaultCountry = country_codes.value.find(country =>
      country.name.startsWith(userLang),
    )

    if (defaultCountry) {
      selected_country.value = defaultCountry
      locale.value = defaultCountry.name
      localStorage.setItem('preferred_language', defaultCountry.name)
    } else {
      selected_country.value = country_codes.value[0]
      locale.value = country_codes.value[0].name
      localStorage.setItem('preferred_language', country_codes.value[0].name)
    }
  }
})
</script>
<template>
  <div class="relative inline-block text-left">
    <!-- Botão com apenas a bandeira selecionada -->
    <button
      @click="dropdownOpen = !dropdownOpen"
      class="flex items-center justify-center"
    >
      <div
        v-if="selected_country"
        class="relative"
        style="width: 32px; height: 32px; border-radius: 50%"
      >
        <img
          :alt="selected_country?.name"
          src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
          :class="`flag flag-${selected_country.code.toLowerCase()} mr-2`"
          style="width: 120px"
        />
      </div>
    </button>

    <!-- Dropdown com apenas bandeiras -->
    <div
      v-if="dropdownOpen"
      class="absolute right-0 z-10 mt-2 w-64 bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700"
    >
      <div class="grid grid-cols-5 gap-2 p-2">
        <div
          v-for="country in country_codes"
          :key="country.code"
          @click="
            () => {
              onSelectionChange(country)
              dropdownOpen = false
            }
          "
          class="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md p-1 flex justify-center"
        >
          <img
            :alt="country?.name"
            src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
            :class="`flag flag-${country?.code.toLowerCase()} mr-2`"
            style="width: 120px"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.absolute {
  top: 15px;
  left: 0px;
  right: auto;
}

@media (max-width: 768px) {
  .absolute {
    left: 0;
    right: auto;
  }
}
</style>
