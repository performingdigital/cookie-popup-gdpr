import { onMounted, reactive, toRefs } from "vue";

export default function (settings: CookieSettings, onSaveCallback: (preferences: CookiePreferences) => void) {
  const state = reactive<CookiePopupState>(
    JSON.parse(localStorage.getItem("cookie-settings") ?? '{ "isOpen": true, "isCustomize": false, "preferences": {} }')
  );

  onMounted(() => {
    Object.keys(settings).forEach(key => {
      if (!state.preferences[key]) {
        state.preferences[key] = settings[key].default 
      }
    })
  })

  function rejectAll() {
    Object.keys(settings).forEach(key => {
      if (settings[key].optional) {
        state.preferences[key] = false;
      }
    });
    savePreferences();
  }

  function acceptAll() {
    Object.keys(settings).forEach(key => {
      if (settings[key].optional) {
        state.preferences[key] = true;
      }
    });
    savePreferences();
  }

  function savePreferences() {
    state.isOpen = false;
    state.isCustomize = false;
    localStorage.setItem("cookie-settings", JSON.stringify(state));
    onSaveCallback({...state.preferences});
  }

  return {...toRefs(state), settings, rejectAll, acceptAll, savePreferences };
}
