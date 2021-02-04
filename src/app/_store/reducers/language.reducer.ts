
import { ILanguage } from '../types/mainInfo.type';
import { GetLanguagesSuccess, mainInfoActions } from '../actions/profile.action';


const initialState:ILanguage[] = [];

export function languageReducer(state: ILanguage[] = initialState, action: mainInfoActions):ILanguage[] {
  if (action instanceof GetLanguagesSuccess) {
    return [...state, ...action.languages];
  }

  return state;
}
