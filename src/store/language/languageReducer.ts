import {ADD_LANGUAGE, CHANGE_LANGUAGE, Language, LanguageActionTypes, LanguageListItem} from './languageAction';
import i18next from 'i18next';

export interface LanguageState {
  language: Language;
  languageList: LanguageListItem[];
}

const defaultState: LanguageState = {
  language: 'zh',
  languageList: [
    {name: '中文', code: 'zh'},
    {name: 'English', code: 'en'}
  ]
};

const languageReducer = (state = defaultState, action: LanguageActionTypes) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      i18next.changeLanguage(action.payload); // 目前这个处理不标准，有副作用
      return {
        ...state,
        language: action.payload
      };
    case ADD_LANGUAGE:
      return {
        ...state,
        languageList: [...state.languageList, action.payload]
      };
    default:
      return state;
  }
};


export default languageReducer;