<script setup>
import LocaleChanger from '@/components/LocaleChanger.vue'

function downloadItem(url) {
  window.open(url, '_blank')
}
</script>

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
              <span>{{ $t('experience_time') }}</span>
            </div>
            <div class="flex items-center">
              <span class="mr-1">🚀</span>
              <span>{{ $t('project_quantity') }}</span>
            </div>
            <div class="flex items-center">
              <span class="mr-1">💻</span>
              <span>{{ $t('stack_quantity') }}</span>
            </div>
          </div>
        </nav>
      </div>
    </header>

    <main class="max-w-6xl mx-auto mt-4 px-4">
      <div class="flex flex-col lg:flex-row gap-4">
        <!-- Coluna da esquerda -->
        <div class="w-full lg:w-48 lg:flex-shrink-0">
          <div class="bg-white border border-gray-300 p-2">
            <img
              src="/profile.jpg"
              :alt="$t('profile_photo_alt_text')"
              class="w-full max-w-[200px] lg:max-w-none mx-auto mb-2"
            />
            <h2 class="text-[#3B5998] text-sm font-bold mb-2">
              Lucas Paulino Marra
            </h2>
            <div class="text-xs text-gray-600">
              Front-End Developer, Vue.js, Javascript, Node.js, Nuxt, Quasar,
              NestJS, AgGrid
              <br />
              {{ $t('country') }}
            </div>
            <div class="mt-4 border-t pt-2">
              <a
                href="https://www.linkedin.com/in/lucas-marra/"
                target="_blank"
                class="flex items-center text-xs text-[#3B5998] hover:underline"
              >
                <span class="mr-1">👤</span> {{ $t('add_friend') }}
              </a>
              <a
                @click="
                  downloadItem(
                    'https://drive.google.com/file/d/1NfKX8C6rId36zWIhtgpqnzfAja_i77tL/view?usp=drive_link',
                  )
                "
                class="flex items-center text-xs text-[#3B5998] hover:underline mt-2 cursor-pointer"
              >
                <span class="mr-1">📝</span> {{ $t('resume') }}
              </a>
            </div>
            <div class="mt-4">
              <LocaleChanger />
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
              <div class="grid grid-cols-1 sm:grid-cols-[150px,1fr] text-sm">
                <span class="text-gray-600">{{ $t('about_title') }}</span>
                <span>{{ $t('about_message') }}</span>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-[150px,1fr] text-sm">
                <span class="text-gray-600">{{ $t('stack_title') }}</span>
                <span>{{ $t('stack_message') }}</span>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-[150px,1fr] text-sm">
                <span class="text-gray-600">{{
                  $t('presentation_title')
                }}</span>
                <span>{{ $t('presentation_message') }}</span>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-[150px,1fr] text-sm">
                <span class="text-gray-600"
                  >{{ $t('mobile_phone_title') }}:</span
                >
                <span
                  ><a
                    class="transition-all duration-300 ease-in-out hover:underline hover:text-blue-400"
                    href="tel:+5561998856381"
                  >
                    +55 (61) 99885 6361
                  </a>
                </span>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-[150px,1fr] text-sm">
                <span class="text-gray-600">{{ $t('email_title') }}</span>
                <span
                  ><a
                    class="transition-all duration-300 ease-in-out hover:underline hover:text-blue-400"
                    href="mailto:marralucas1@gmail.com"
                    >marralucas1@gmail.com</a
                  ></span
                >
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-[150px,1fr] text-sm">
                <span class="text-gray-600">{{ $t('reference_title') }}</span>

                <ul class="text-sm">
                  <li>
                    Sérgio Cozzetti Bertoldi de Souza -
                    {{ $t('reference_one') }}
                  </li>
                  <li>
                    Alexandre Einstein Barcelos Cunha -
                    {{ $t('reference_two') }}
                  </li>
                  <li>
                    Ramon de Freitas Elias Campos - {{ $t('reference_three') }}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Experiência Profissional -->
          <div class="mb-4">
            <h3 class="text-[#3B5998] bg-[#E8EEF7] p-2 text-sm font-bold">
              {{ $t('job_experience') }}
            </h3>
            <div class="p-2 space-y-4">
              <div class="border-[#3B5998]">
                <h4 class="font-bold">SMART FIT</h4>
                <p class="text-sm text-gray-600">
                  {{ $t('job_experience_smart_title') }}
                </p>
                <ul class="text-sm mt-2">
                  <li>
                   {{ $t('job_experience_smart_message_one') }}
                  </li>
                  <li>{{ $t('job_experience_smart_message_two') }}</li>
                  <li>
                    {{ $t('job_experience_smart_three') }}
                  </li>
                  <li>
                    {{ $t('job_experience_smart_message_four') }}
                  </li>
                  <li>
                    {{ $t('job_experience_smart_message_five') }}
                  </li>
                </ul>
              </div>

              <div class="border-[#3B5998]">
                <h4 class="font-bold">ANGULAR E-COMMERCE</h4>
                <p class="text-sm text-gray-600">
                  {{ $t('job_experience_angular_message') }}
                </p>
                <ul class="text-sm mt-2">
                  <li>{{ $t('job_experience_angular_message_two') }}</li>
                  <li>
                    {{ $t('job_experience_angular_message_three') }}
                  </li>
                  <li>
                    {{ $t('job_experience_angular_message_four') }}
                  </li>
                  <li>{{ $t('job_experience_angular_message_five') }}</li>
                </ul>
              </div>

              <div class="border-[#3B5998]">
                <h4 class="font-bold">ILHA SERVICE TECNOLOGIA LTDA</h4>
                <p class="text-sm text-gray-600">
                  {{ $t('job_experience_ilha_message_one') }}
                </p>
                <ul class="text-sm mt-2">
                  <li>{{ $t('job_experience_ilha_message_two') }}</li>
                  <li>
                    {{ $t('job_experience_ilha_message_three') }}
                  </li>
                  <li>{{ $t('job_experience_ilha_message_four') }}</li>
                  <li>{{ $t('job_experience_ilha_message_five') }}</li>
                </ul>
              </div>

              <div class="border-[#3B5998]">
                <h4 class="font-bold">PAVO TECNOLOGIA</h4>
                <p class="text-sm text-gray-600">
                  {{ $t('job_experience_pavo_message_one') }}
                </p>
                <ul class="text-sm mt-2">
                  <li>{{ $t('job_experience_pavo_message_two') }}</li>
                  <li>{{ $t('job_experience_pavo_message_three') }}</li>
                  <li>{{ $t('job_experience_pavo_message_four') }}</li>
                </ul>
              </div>

              <div class="border-[#3B5998]">
                <h4 class="font-bold">TOTVS</h4>
                <p class="text-sm text-gray-600">
                  {{ $t('job_experience_totvs_message_one') }}
                </p>
                <ul class="text-sm mt-2">
                  <li>{{ $t('job_experience_totvs_message_two') }}</li>
                  <li>{{ $t('job_experience_totvs_message_three') }}</li>
                  <li>{{ $t('job_experience_totvs_message_four') }}</li>
                </ul>
              </div>

              <div class="border-[#3B5998]">
                <h4 class="font-bold">VP CONCURSOS</h4>
                <p class="text-sm text-gray-600">
                  {{ $t('job_experience_vp_message_one') }}
                </p>
                <ul class="text-sm mt-2">
                  <li>{{ $t('job_experience_vp_message_two') }}</li>
                  <li>{{ $t('job_experience_vp_message_three') }}</li>
                  <li>{{ $t('job_experience_vp_message_four') }}</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Formação -->
          <div class="mb-4">
            <h3 class="text-[#3B5998] bg-[#E8EEF7] p-2 text-sm font-bold">
              {{ $t('education') }}
            </h3>
            <div class="p-2">
              <div class="text-sm">
                <h4 class="font-bold">
                  {{ $t('education_text') }}
                </h4>
                <p class="text-gray-600">
                  {{ $t('education_course') }}
                </p>
                <p class="text-gray-500">{{ $t('education_conclusion') }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Coluna da direita -->
        <div class="w-full lg:w-[26%] lg:flex-shrink-0">
          <!-- Stack técnico -->
          <div class="bg-white border border-gray-300 p-2 mb-4">
            <h3 class="text-[#3B5998] font-bold text-sm mb-2">
              {{ $t('stack_names') }}
            </h3>
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
              {{ $t('public_projects') }}
            </h3>
            <div class="space-y-2">
              <div class="text-xs p-2 border rounded">
                <a
                  href="https://laboratorio.uniceub.br/Home/Index"
                  target="_blank"
                  class="font-bold cursor-pointer"
                >
                  {{ $t('public_projects_one') }}
                </a>
                <p class="text-gray-600">
                  {{ $t('public_projects_one_text') }}
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
                  >{{ $t('public_projects_two') }}</a
                >
                <p class="text-gray-600">
                  {{ $t('public_projects_two_text') }}
                </p>
                <div class="flex gap-1 mt-1">
                  <span class="bg-blue-100 px-1 rounded">Vue</span>
                  <span class="bg-blue-100 px-1 rounded">Router</span>
                  <span class="bg-blue-100 px-1 rounded">Bootstrap</span>
                </div>
              </div>

              <div class="text-xs p-2 border rounded">
                <h4 class="font-bold cursor-pointer">
                  {{ $t('public_projects_three') }}
                </h4>
                <p class="text-gray-600">
                  {{ $t('public_projects_three_text') }}
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
                  >{{ $t('public_projects_four') }}</a
                >
                <p class="text-gray-600">
                  {{ $t('public_projects_four_text') }}
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
                  >{{ $t('public_projects_five') }}</a
                >
                <p class="text-gray-600">
                  {{ $t('public_projects_five_text') }}
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
