interface CookieOptions {
  description: string,
  acceptButtonText: string,
  rejectButtonText: string,
  saveButtonText: string,
  customizeButtonText: string,
}
interface CookieSettings {
  [key: string]: {
    default: boolean;
    description: string;
    optional: boolean;
  };
}

interface CookiePreferences {
  [key: string]: boolean;
}

interface CookiePopupState {
  isCustomize: boolean;
  isOpen: boolean;
  preferences: CookiePreferences;
}
