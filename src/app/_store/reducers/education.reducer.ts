
import { ITimeLine } from '../types/mainInfo.type';
import { GetEducationSuccess, mainInfoActions } from '../actions/profile.action';


const initialState:ITimeLine[] = [];

export function educationReducer(state: ITimeLine[] = initialState, action: mainInfoActions):ITimeLine[] {
  if (action instanceof GetEducationSuccess) {
    return [...state, ...action.education];
  }

  return state;
}
