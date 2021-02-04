
import { IMainInfo } from '../types/mainInfo.type';
import { GetMainInfoSuccess, mainInfoActions } from '../actions/profile.action';

type TState=IMainInfo|undefined
export const initialState:TState = undefined;

export function mainInfoReducer(state: TState = initialState, action: mainInfoActions):TState {

  if (action instanceof GetMainInfoSuccess) {
    return {
      ...state,
      ...action.info
    };
  }

  return state;
}
