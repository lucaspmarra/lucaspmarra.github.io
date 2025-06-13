<script setup>
import { useQRCode } from '@vueuse/integrations/useQRCode'
import { shallowRef } from 'vue'
import html2pdf from 'html2pdf.js'

const text = shallowRef('Insira seu link aqui')
const qrcode = useQRCode(text, {
  width: 300,
  margin: 2,
  errorCorrectionLevel: 'H'
})

const exportPNG = () => {
  const link = document.createElement('a')
  link.download = 'qrcode.png'
  link.href = qrcode.value
  link.click()
}

const exportPDF = () => {
  const element = document.createElement('div')
  element.innerHTML = `
    <div style="
      text-align: center;
      padding: 40px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
    ">
      <img src="${qrcode.value}" style="width: 300px; height: 300px;" />
    </div>
  `

  const opt = {
    margin: [0, 0, 0, 0],
    filename: 'qrcode.pdf',
    image: { type: 'jpeg', quality: 1 },
    html2canvas: {
      scale: 2,
      useCORS: true,
      logging: false,
      letterRendering: true
    },
    jsPDF: {
      unit: 'mm',
      format: 'a4',
      orientation: 'portrait',
      compress: true
    },
    pagebreak: { mode: 'avoid-all' }
  }

  html2pdf().set(opt).from(element).save()
}
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
            <div class="flex justify-center gap-4">
              <button
                @click="exportPNG"
                class="px-4 py-2 bg-[#6D84B4] text-white rounded-lg hover:bg-[#5C75AA] transition-colors duration-200 flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
                Exportar PNG
              </button>
              <button
                @click="exportPDF"
                class="px-4 py-2 bg-[#6D84B4] text-white rounded-lg hover:bg-[#5C75AA] transition-colors duration-200 flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clip-rule="evenodd" />
                </svg>
                Exportar PDF
              </button>
            </div>
          </div>
        </div>

        <div class="w-full lg:w-[26%] lg:flex-shrink-0"></div>
      </div>
    </main>
  </div>
</template>
