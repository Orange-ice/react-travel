import {ADD_LANGUAGE, CHANGE_LANGUAGE, Language, LanguageActionTypes, LanguageListItem} from './languageAction';

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
      // TODO i18n 更新语言
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