
import { ITimeLine } from '../types/mainInfo.type';
import { GetJobSuccess, mainInfoActions } from '../actions/profile.action';


const initialState:ITimeLine[] = [];

export function jobReducer(state: ITimeLine[] = initialState, action: mainInfoActions):ITimeLine[] {
  if (action instanceof GetJobSuccess) {
    return [...state, ...action.job];
  }

  return state;
}
