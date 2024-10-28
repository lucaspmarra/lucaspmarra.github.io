<template>
  <div class="min-h-screen bg-[#D9E6F6]">
    <!-- Barra superior -->
    <header
      class="bg-gradient-to-b from-[#6D84B4] to-[#5C75AA] border-b border-[#3B5998]"
    >
      <div class="max-w-6xl mx-auto flex flex-wrap items-center p-2">
        <nav class="w-full md:w-auto mb-2 md:mb-0">
          <div class="flex flex-wrap gap-2 text-sm text-white">
            <div class="flex items-center">
              <span class="mr-1">💼</span>
              <span>3+ anos de experiência</span>
            </div>
            <div class="flex items-center">
              <span class="mr-1">🚀</span>
              <span>10+ projetos</span>
            </div>
            <div class="flex items-center">
              <span class="mr-1">💻</span>
              <span>15+ tecnologias</span>
            </div>
            <div v-if="loading" role="status">
              <svg aria-hidden="true" class="w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
              </svg>
              <span class="sr-only">Loading...</span>
            </div>
            <div v-else class="flex items-center">
              <span class="mr-1">📈</span>
              <span>Total de Visitantes: {{ visitor_count ? visitor_count : '-' }}</span>
            </div>
          </div>
        </nav>
        <div class="w-full md:w-auto md:ml-auto">
          <a
            href="mailto:marralucas1@gmail.com"
            class="text-white text-sm hover:text-gray-200"
            >marralucas1@gmail.com</a
          >
        </div>
      </div>
    </header>

    <main class="max-w-6xl mx-auto mt-4 px-4">
      <div class="flex flex-col lg:flex-row gap-4">
        <!-- Coluna da esquerda -->
        <div class="w-full lg:w-48 lg:flex-shrink-0">
          <div class="bg-white border border-gray-300 p-2">
            <img
              src="/profile.jpg"
              alt="Profile"
              class="w-full max-w-[200px] lg:max-w-none mx-auto mb-2"
            />
            <h2 class="text-[#3B5998] text-sm font-bold mb-2">
              Lucas Paulino Marra
            </h2>
            <div class="text-xs text-gray-600">
              Front-End Developer, Vue.js, Javascript, Node.js, Nuxt, Quasar,
              NestJS, AgGrid
              <br />
              Brasil
            </div>
            <div class="mt-4 border-t pt-2">
              <a
                href="https://www.linkedin.com/in/lucas-marra/"
                target="_blank"
                class="flex items-center text-xs text-[#3B5998] hover:underline"
              >
                <span class="mr-1">👤</span> + amigo
              </a>
              <a
                @click="
                  downloadItem(
                    'https://drive.google.com/file/d/1NfKX8C6rId36zWIhtgpqnzfAja_i77tL/view?usp=drive_link',
                  )
                "
                class="flex items-center text-xs text-[#3B5998] hover:underline mt-2 cursor-pointer"
              >
                <span class="mr-1">📝</span> currículo
              </a>
            </div>
          </div>
        </div>

        <!-- Coluna central -->
        <div
          class="flex-grow bg-white border rounded-tr-[60px] border-gray-300 p-4 md:mb-4"
        >
          <!-- Sobre -->
          <div class="mb-4 mt-4">
            <h3 class="text-[#3B5998] bg-[#E8EEF7] p-2 text-sm font-bold">
              sobre
            </h3>
            <div class="p-2 space-y-2">
              <div class="grid grid-cols-[150px,1fr] text-sm">
                <span class="text-gray-600">sobre:</span>
                <span
                  >Graduado em Análise e Desenvolvimento de Sistemas pelo
                  UniCEUB, participei do desenvolvimento do Centro de
                  Atendimento Comunitário do CEUB.</span
                >
              </div>
              <div class="grid grid-cols-[150px,1fr] text-sm">
                <span class="text-gray-600">atuação:</span>
                <span
                  >Minha área de trabalho preferencial abrange Desenvolvimento
                  Frontend, Tecnologias Web e Desenvolvimento Mobile
                  (Flutter).</span
                >
              </div>
              <div class="grid grid-cols-[150px,1fr] text-sm">
                <span class="text-gray-600">apresentação:</span>
                <span
                  >Tenho experiência profissional com HTML, CSS, Javascript,
                  OOP, REST APIs, GraphQL, JSON, Vue.js, Nuxt, Quasar, Node.js,
                  Express e Nest. Além disso, possuo conhecimento em Oracle,
                  MySQL e PostgreSQL, com ênfase em Raw Querys. Trabalhei com o
                  ERP Protheus em diversos módulos, incluindo SIGACOM, SIGAFAT,
                  SIGAFIN, SIGAEST, SIGACFG e APSDU. Também atuei no atendimento
                  N3 aos usuários e tenho familiaridade com SEO, Google Search
                  Console e Google Analytics. Além disso, criei microfrontends e
                  componentes modulares em Vue e trabalhei com Ag-Grid e
                  Ag-Charts.</span
                >
              </div>

              <div class="grid grid-cols-[150px,1fr] text-sm">
                <span class="text-gray-600">telefone:</span>
                <span>+55 (61) 99885 6361</span>
              </div>
              <div class="grid grid-cols-[150px,1fr] text-sm">
                <span class="text-gray-600">e-mail:</span>
                <span>marralucas1@gmail.com</span>
              </div>
              <div class="grid grid-cols-[150px,1fr] text-sm">
                <span class="text-gray-600">referências:</span>

                <ul class="text-sm">
                  <li>
                    Sérgio Cozzetti Bertoldi de Souza - Gerente de
                    Desenvolvimento de Software no UniCEUB
                  </li>
                  <li>
                    Alexandre Einstein Barcelos Cunha - Chefe de Seção e
                    Analista Desenvolvedor no TRE-GO
                  </li>
                  <li>
                    Ramon de Freitas Elias Campos - Assessoria PJe no TRE-GO
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Experiência Profissional -->
          <div class="mb-4">
            <h3 class="text-[#3B5998] bg-[#E8EEF7] p-2 text-sm font-bold">
              experiência profissional
            </h3>
            <div class="p-2 space-y-4">
              <div class="border-[#3B5998]">
                <h4 class="font-bold">ANGULAR E-COMMERCE</h4>
                <p class="text-sm text-gray-600">
                  Desenvolvedor Frontend (Jul 2023 - Presente)
                </p>
                <ul class="text-sm mt-2">
                  <li>Desenvolvimento de Dashboards WhiteLabel multi-tenant</li>
                  <li>
                    Implementação de interfaces com Vue 2/3, Quasar e TypeScript
                  </li>
                  <li>
                    Integração de tabelas e gráficos com Ag-Grid/Ag-Charts
                  </li>
                  <li>Criação de módulos Vue para CMS (Webflow, WordPress)</li>
                </ul>
              </div>

              <div class="border-[#3B5998]">
                <h4 class="font-bold">ILHA SERVICE TECNOLOGIA LTDA</h4>
                <p class="text-sm text-gray-600">
                  Desenvolvedor Web (Nov 2020 - Jul 2023)
                </p>
                <ul class="text-sm mt-2">
                  <li>Desenvolvimento de Microfrontends para TRE-GO</li>
                  <li>
                    Criação de APIs REST com Node.js, Express e Java Spring
                  </li>
                  <li>Implementação de consultas em Oracle DB</li>
                  <li>Manutenção de sistemas legados e suporte N3</li>
                </ul>
              </div>

              <div class="border-[#3B5998]">
                <h4 class="font-bold">PAVO TECNOLOGIA</h4>
                <p class="text-sm text-gray-600">
                  Auxiliar de Suporte Técnico Jr (Jan 2020 - Abr 2020)
                </p>
                <ul class="text-sm mt-2">
                  <li>Suporte N1 ao ERP Protheus (TOTVS)</li>
                  <li>Desenvolvimento de templates para workflows</li>
                  <li>Frontend para canal de Denúncias</li>
                </ul>
              </div>

              <div class="border-[#3B5998]">
                <h4 class="font-bold">TOTVS</h4>
                <p class="text-sm text-gray-600">
                  Trainee Analista de Implantação (Mar 2019 - Ago 2019)
                </p>
                <ul class="text-sm mt-2">
                  <li>Implantação de módulos ERP Protheus</li>
                  <li>Configuração de SIGACOM, SIGAFAT, SIGAFIN</li>
                  <li>Parametrização de sistemas</li>
                </ul>
              </div>

              <div class="border-[#3B5998]">
                <h4 class="font-bold">VP CONCURSOS</h4>
                <p class="text-sm text-gray-600">
                  Estagiário em Suporte Técnico (Set 2018 - Mar 2019)
                </p>
                <ul class="text-sm mt-2">
                  <li>Análise de dados com Google Analytics</li>
                  <li>Otimização de SEO para Landing Pages</li>
                  <li>Manutenção de sistemas legados</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Formação -->
          <div class="mb-4">
            <h3 class="text-[#3B5998] bg-[#E8EEF7] p-2 text-sm font-bold">
              formação
            </h3>
            <div class="p-2">
              <div class="text-sm">
                <h4 class="font-bold">
                  UniCEUB - Centro Universitário de Brasília
                </h4>
                <p class="text-gray-600">
                  Análise e Desenvolvimento de Sistemas
                </p>
                <p class="text-gray-500">Conclusão: 2019</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Coluna da direita -->
        <div class="w-full lg:w-[25%] lg:flex-shrink-0">
          <!-- Stack técnico -->
          <div class="bg-white border border-gray-300 p-2 mb-4">
            <h3 class="text-[#3B5998] font-bold text-sm mb-2">stack técnico</h3>
            <div class="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-3 gap-2">
              <div class="flex mt-1">
                <span class="bg-blue-100 px-1 rounded">Vue.js</span>
              </div>
              <div class="flex mt-1">
                <span class="bg-blue-100 px-1 rounded">Quasar</span>
              </div>
              <div class="flex mt-1">
                <span class="bg-blue-100 px-1 rounded">HTML</span>
              </div>
              <div class="flex mt-1">
                <span class="bg-blue-100 px-1 rounded">CSS</span>
              </div>
              <div class="flex mt-1">
                <span class="bg-blue-100 px-1 rounded">JavaScript</span>
              </div>
              <div class="flex mt-1">
                <span class="bg-blue-100 px-1 rounded">Node.js</span>
              </div>
              <div class="flex mt-1">
                <span class="bg-blue-100 px-1 rounded">Express</span>
              </div>
              <div class="flex mt-1">
                <span class="bg-blue-100 px-1 rounded">Bootstrap</span>
              </div>
              <div class="flex mt-1">
                <span class="bg-blue-100 px-1 rounded">Tailwind</span>
              </div>
              <div class="flex mt-1">
                <span class="bg-blue-100 px-1 rounded">jQuery</span>
              </div>
              <div class="flex mt-1">
                <span class="bg-blue-100 px-1 rounded">Ag-Grid</span>
              </div>
              <div class="flex mt-1">
                <span class="bg-blue-100 px-1 rounded">Ag-Charts</span>
              </div>
            </div>
          </div>

          <!-- Projetos públicos -->
          <div class="bg-white border border-gray-300 p-2 mb-4">
            <h3 class="text-[#3B5998] font-bold text-sm mb-2">
              projetos públicos destacados
            </h3>
            <div class="space-y-2">
              <div class="text-xs p-2 border rounded">
                <a
                  href="https://laboratorio.uniceub.br/Home/Index"
                  target="_blank"
                  class="font-bold cursor-pointer"
                >
                  Sistema de Agendamento de Exames - UniCEUB
                </a>
                <p class="text-gray-600">
                  Projeto iniciado em conjunto com o UniCEUB para agilizar o
                  agendamento de exames escola médica do CEUB.
                </p>
                <div class="flex gap-1 mt-1">
                  <span class="bg-blue-100 px-1 rounded">HTML</span>
                  <span class="bg-blue-100 px-1 rounded">CSS</span>
                  <span class="bg-blue-100 px-1 rounded">Jquery</span>
                  <span class="bg-blue-100 px-1 rounded">Bootstrap</span>
                </div>
              </div>

              <div class="text-xs p-2 border rounded">
                <a
                  href="https://apps.tre-go.jus.br/central-de-sistemas/#/"
                  target="_blank"
                  class="font-bold cursor-pointer"
                  >Central de Sistemas TRE-GO</a
                >
                <p class="text-gray-600">
                  Microfrontend para gestão de acesso e informações de sistemas.
                </p>
                <div class="flex gap-1 mt-1">
                  <span class="bg-blue-100 px-1 rounded">Vue</span>
                  <span class="bg-blue-100 px-1 rounded">Router</span>
                  <span class="bg-blue-100 px-1 rounded">Bootstrap</span>
                </div>
              </div>

              <div class="text-xs p-2 border rounded">
                <h4 class="font-bold cursor-pointer">Teleatendimento TRE-GO</h4>
                <p class="text-gray-600">
                  Microfrontend para gestão de contatos dos Cartórios Eleitorais
                </p>
                <div class="flex gap-1 mt-1">
                  <span class="bg-blue-100 px-1 rounded">Vue</span>
                  <span class="bg-blue-100 px-1 rounded">Router</span>
                  <span class="bg-blue-100 px-1 rounded">Bootstrap</span>
                </div>
              </div>

              <div class="text-xs p-2 border rounded">
                <a
                  href="https://apps.tre-go.jus.br/central-de-indicadores/#/"
                  target="_blank"
                  class="font-bold cursor-pointer"
                  >Central de Indicadores TRE-GO</a
                >
                <p class="text-gray-600">
                  Microfrontend informativo para visualização de painéis de BI
                  do Tribunal.
                </p>
                <div class="flex gap-1 mt-1">
                  <span class="bg-blue-100 px-1 rounded">Vue</span>
                  <span class="bg-blue-100 px-1 rounded">Router</span>
                  <span class="bg-blue-100 px-1 rounded">Bootstrap</span>
                </div>
              </div>

              <div class="text-xs p-2 border rounded">
                <a
                  href="https://apps.tre-go.jus.br/contato-zonas/"
                  target="_blank"
                  class="font-bold cursor-pointer"
                  >Contato Zonas Eleitorais de Goiás TRE-GO</a
                >
                <p class="text-gray-600">
                  Microfrontend para gestão de contato entre Eleitores e Zonas
                  Eleitorais.
                </p>
                <div class="flex gap-1 mt-1">
                  <span class="bg-blue-100 px-1 rounded">Vue</span>
                  <span class="bg-blue-100 px-1 rounded">Router</span>
                  <span class="bg-blue-100 px-1 rounded">Bootstrap</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>

</template>

<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'

const visitor_count = ref()
const loading = ref(false);

function downloadItem(url) {
  window.open(url, '_blank')
}

async function getVisitorCount() {
  try {
    loading.value = true;
    const response = await axios.get('https://counter-api-prg8.onrender.com/api/visitor')
    visitor_count.value = response.data.count
  } catch (error) {
    console.error('Erro ao obter contagem de visitantes:', error)
  } finally {
    loading.value = false;
  }
}

onMounted(async () => {
  await getVisitorCount()
})
</script>
