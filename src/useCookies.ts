import { onMounted, reactive, toRefs } from "vue";

function getCookie(cname: string): string {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '{ "isOpen": true, "isCustomize": false, "preferences": {} }';
}

export default function (settings: CookieSettings, onSaveCallback: (preferences: CookiePreferences) => void) {
  const state = reactive<CookiePopupState>(JSON.parse(getCookie('cookie-settings')));

  onMounted(() => {
    Object.keys(settings).forEach(key => {
      if (!state.preferences[key]) {
        state.preferences[key] = settings[key].default 
      }
    })

    if (!state.isOpen) {
      onSaveCallback({...state.preferences});
    }
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
    let cookie = `cookie-settings=${JSON.stringify(state)}; expires=${new Date(new Date().setHours(24)).toUTCString()}; path=/;`;
    document.cookie = cookie;
    onSaveCallback({...state.preferences});
  }

  return {...toRefs(state), settings, rejectAll, acceptAll, savePreferences };
}
