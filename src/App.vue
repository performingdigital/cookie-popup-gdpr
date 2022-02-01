<template>
  <div v-cloak v-show="isOpen" class="pcp-gdpr-wrapper">
    <div class="pcp-gdpr">
      <div class="pcp-gdpr-body">
        <button @click="rejectAll" class="pcp-gdpr-close">&times;</button>
        <div class="pcp-gdpr-body-content">
          <div class="pcp-gdpr-body-content-description" v-html="options.description"></div>
          <div class="pcp-gdpr-buttons">
            <button
              class="pcp-gdpr-button pcp-gdpr-button-link"
              @click="() => isCustomize = !isCustomize"
            >{{options.customizeButtonText}}</button>
          </div>
          <div class="pcp-gdpr-buttons">
            <button class="pcp-gdpr-button pcp-gdpr-button-secondary" @click="rejectAll">{{options.rejectButtonText}}</button>
            <button class="pcp-gdpr-button pcp-gdpr-button-primary" @click="acceptAll">{{options.acceptButtonText}}</button>
          </div>
        </div>
        <div v-cloak v-show="isCustomize" class="pcp-gdpr-body-content">
          <div v-for="category in Object.keys(settings)">
            <label>
              <span class="pcp-gdpr-buttons">
                <input
                  type="checkbox"
                  v-model="preferences[category]"
                  :disabled="!settings[category].optional"
                />
                <p class="pcp-gdpr-body-content-title">{{ settings[category].title ?? category }}</p>
              </span>
              <p class="pcp-gdpr-body-content-description" v-html="settings[category].description"></p>
            </label>
          </div>
          <div class="pcp-gdpr-buttons">
            <button
              @click="savePreferences"
              class="pcp-gdpr-button pcp-gdpr-button-secondary"
            >{{options.saveButtonText}}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import useCookies from './useCookies';

const props = defineProps<{
  options: CookieOptions
  settings: CookieSettings,
  callback: (preferences: CookiePreferences) => void,
}>()

onMounted(() => {
  props.options.rejectButtonText = props.options.rejectButtonText || 'Reject All';
  props.options.acceptButtonText = props.options.acceptButtonText || 'Accept all';
  props.options.customizeButtonText = props.options.customizeButtonText || 'Customize';
})

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
