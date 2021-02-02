
import { IMainInfo } from '../types/mainInfo.type';
import { GET_MAIN_INFO_SUCCESS, mainInfoActions } from '../actions/mainInfo.action';


export const initialState:IMainInfo|undefined = undefined;

export function mainInfoReducer(state: IMainInfo|undefined = initialState, action: mainInfoActions) {


  switch ( action.type) {
  case GET_MAIN_INFO_SUCCESS:
    return {
      ...state,
      ...action.info
    };

  default:
    return state;
  }
}
