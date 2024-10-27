<template>
  <div class="min-h-screen bg-[#D9E6F6]">
    <!-- Barra superior -->
    <header
      class="bg-gradient-to-b from-[#6D84B4] to-[#5C75AA] border-b border-[#3B5998]"
    >
      <div class="max-w-6xl mx-auto flex items-center p-2">
        <nav class="flex space-x-4">
          <div class="flex items-center space-x-4 text-sm text-white">
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
          </div>
        </nav>
        <div class="ml-auto flex items-center space-x-4">
          <a
            href="mailto:marralucas1@gmail.com"
            class="text-white text-sm hover:text-gray-200"
            >marralucas1@gmail.com</a
          >
        </div>
      </div>
    </header>

    <main class="max-w-6xl mx-auto mt-4 px-4 flex gap-4">
      <!-- Coluna da esquerda -->
      <div class="w-48 flex-shrink-0">
        <div class="bg-white border border-gray-300 p-2">
          <img src="/profile.jpg" alt="Profile" class="w-full mb-2" />
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
        class="flex-grow bg-white border rounded-tr-[60px] border-gray-300 p-4 mb-4"
      >
        <div class="flex items-center gap-4 mb-4"></div>

        <!-- Social Stats -->
        <div class="mb-4">
          <h3 class="text-[#3B5998] bg-[#E8EEF7] p-2 text-sm font-bold">
            sobre
          </h3>
          <div class="p-2 space-y-2">
            <div class="grid grid-cols-[150px,1fr] text-sm">
              <span class="text-gray-600">sobre:</span>
              <span
                >Graduado em Análise e Desenvolvimento de Sistemas pelo UniCEUB,
                participei do desenvolvimento do Centro de Atendimento
                Comunitário do CEUB.</span
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
                >Tenho experiência profissional com HTML, CSS, Javascript, OOP,
                REST APIs, GraphQL, JSON, Vue.js, Nuxt, Quasar, Node.js, Express
                e Nest. Além disso, possuo conhecimento em Oracle, MySQL e
                PostgreSQL, com ênfase em Raw Querys. Trabalhei com o ERP
                Protheus em diversos módulos, incluindo SIGACOM, SIGAFAT,
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
                  Sérgio Cozzetti Bertoldi de Souza - Gerente de Desenvolvimento
                  de Software no UniCEUB
                </li>
                <li>
                  Alexandre Einstein Barcelos Cunha - Chefe de Seção e Analista
                  Desenvolvedor no TRE-GO
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
                <li>Integração de tabelas e gráficos com Ag-Grid/Ag-Charts</li>
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
                <li>Criação de APIs REST com Node.js, Express e Java Spring</li>
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
              <p class="text-gray-600">Análise e Desenvolvimento de Sistemas</p>
              <p class="text-gray-500">Conclusão: 2019</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Coluna da direita -->
      <div class="w-[25%] flex-shrink-0">
        <!-- Amigos -->
        <div class="bg-white border border-gray-300 p-2 mb-4">
          <h3 class="text-[#3B5998] font-bold text-sm mb-2">stack técnico</h3>
          <div class="grid grid-cols-3 gap-2">
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

        <!-- Comunidades -->
        <div class="bg-white border border-gray-300 p-2">
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
                Microfrontend informativo para visualização de painéis de BI do
                Tribunal.
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
    </main>
  </div>
</template>

<script setup>
function downloadItem(url) {
  window.open(url, '_blank')
}
</script>
