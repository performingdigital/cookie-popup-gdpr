<template>
  <div v-cloak v-show="isOpen" class="fixed max-w-sm p-6 bottom-0 right-0">
    <div class="relative p-4 bg-white shadow">
      <button @click="rejectAll" class="top-0 right-0 absolute text-lg mt-2 mr-2">&times;</button>
      <div class="space-y-4 flex flex-col">
        <div
          class="prose"
        >Nihil hic munitissimus habendi senatus locus, nihil horum? Morbi fringilla convallis sapien, id pulvinar odio volutpat.</div>
        <div class="flex items-center gap-4 flex-wrap">
          <div>
            <button
              class="px-3 sm:text-sm rounded text-blue-600"
              @click="() => isCustomize = !isCustomize"
            >Customize</button>
            <button
              class="px-3 sm:text-sm rounded bg-gray-100 border hover:bg-gray-200 text-gray-800 h-9"
              @click="rejectAll"
            >Reject All</button>
          </div>
          <button
            class="px-3 sm:text-sm rounded bg-blue-600 hover:bg-blue-500 text-white h-9"
            @click="acceptAll"
          >Accept All</button>
        </div>
      </div>
      <div v-cloak v-show="isCustomize">
        <div>
          <ul class="flex flex-col justify-between mt-4 space-y-5 mb-5">
            <li v-for="category in Object.keys(settings)">
              <p class="text-gray-700">{{ category }}</p>
              <p>{{ settings[category].description }}</p>
              <input
                type="checkbox"
                v-model="preferences[category]"
                :disabled="!settings[category].optional"
              />
            </li>
          </ul>
          <div class="flex items-center justify-between">
            <div></div>
            <button
              @click="savePreferences"
              class="px-3 sm:text-sm rounded bg-blue-600 hover:bg-blue-500 text-white h-9"
            >Save pref</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import useCookies from './useCookies';

const props = defineProps<{
  settings: CookieSettings,
  callback: (preferences: CookiePreferences) => void,
}>()

const {
  isOpen,
  isCustomize,
  preferences,
  settings,
  acceptAll,
  rejectAll,
  savePreferences
} = useCookies(props.settings, props.callback);
</script>
