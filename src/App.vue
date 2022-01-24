<template>
  <div v-cloak v-show="isOpen" class="pcp-gdpr">
    <div class="pcp-gdpr-body">
      <button @click="rejectAll" class="pcp-gdpr-close">&times;</button>
      <div class="pcp-gdpr-body-content">
        <div class="pcp-gdpr-body-content-description" v-html="description"></div>
        <div class="pcp-gdpr-buttons">
          <button
            class="pcp-gdpr-button pcp-gdpr-button-link"
            @click="() => isCustomize = !isCustomize"
          >Customize</button>
        </div>
        <div class="pcp-gdpr-buttons">
          <button class="pcp-gdpr-button pcp-gdpr-button-secondary" @click="rejectAll">Reject All</button>
          <button class="pcp-gdpr-button pcp-gdpr-button-primary" @click="acceptAll">Accept All</button>
        </div>
      </div>
      <div v-cloak v-show="isCustomize" class="pcp-gdpr-body-content">
        <div v-for="category in Object.keys(settings)">
          <div class="pcp-gdpr-buttons">
            <input
              type="checkbox"
              v-model="preferences[category]"
              :disabled="!settings[category].optional"
            />
            <p class="pcp-gdpr-body-content-title">{{ category }}</p>
          </div>
          <p class="pcp-gdpr-body-content-description" v-html="settings[category].description"></p>
        </div>
        <div class="pcp-gdpr-buttons">
          <button
            @click="savePreferences"
            class="pcp-gdpr-button pcp-gdpr-button-secondary"
          >Save pref</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import useCookies from './useCookies';

const props = defineProps<{
  description: string
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
