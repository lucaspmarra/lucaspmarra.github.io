<script setup>
import { useQRCode } from '@vueuse/integrations/useQRCode'
import { shallowRef } from 'vue'

const text = shallowRef('Insira seu link aqui')
const qrcode = useQRCode(text, {
  width: 300,
  margin: 2,

  errorCorrectionLevel: 'H' // Maior nível de correção de erro
})
</script>

<template>
  <div class="min-h-screen bg-[#D9E6F6]">
    <!-- Barra superior -->
    <header
      class="bg-gradient-to-b from-[#6D84B4] to-[#5C75AA] border-b border-[#3B5998]"
    >
      <div class="max-w-6xl mx-auto flex flex-wrap items-center p-2">
        <nav class="w-full md:w-auto mb-2 md:mb-0 h-[20px]"></nav>
      </div>
    </header>

    <main class="max-w-6xl mx-auto mt-4 px-4">
      <div class="flex flex-col lg:flex-row gap-4">
        <div class="w-full lg:w-48 lg:flex-shrink-0"></div>

        <div
          class="flex-grow bg-white border rounded-tr-[60px] border-gray-300 p-8 md:mb-4 flex flex-col items-center justify-center"
        >
          <div class="w-full max-w-md space-y-6">
            <div class="flex justify-center">
              <img :src="qrcode" alt="QR Code" class="w-72 h-72" />
            </div>
            <div class="w-full">
              <input
                v-model="text"
                type="text"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6D84B4] focus:border-transparent transition-all duration-200"
                placeholder="Digite o texto para gerar o QR Code"
              />
            </div>
          </div>
        </div>

        <div class="w-full lg:w-[26%] lg:flex-shrink-0"></div>
      </div>
    </main>
  </div>
</template>
