export const CHANGE_LANGUAGE = 'change_language';
export const ADD_LANGUAGE = 'add_language';


export type Language = 'zh' | 'en';

export interface LanguageListItem {
  name: string;
  code: string;
}


export interface ChangeLanguageAction {
  type: typeof CHANGE_LANGUAGE;
  payload: Language;
}

export interface AddLanguageAction {
  type: typeof ADD_LANGUAGE;
  payload: LanguageListItem;
}

export type LanguageActionTypes = ChangeLanguageAction | AddLanguageAction;

export const changeLanguageActionCreator = (language: Language): ChangeLanguageAction => {
  return {
    type: CHANGE_LANGUAGE,
    payload: language
  };
};


export const addLanguageActionCreator = (languageItem: LanguageListItem): AddLanguageAction => {
  return {
    type: ADD_LANGUAGE,
    payload: languageItem
  };
};
