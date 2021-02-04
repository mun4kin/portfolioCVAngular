
import { IHobby } from '../types/mainInfo.type';
import { GetHobbiesSuccess, mainInfoActions } from '../actions/profile.action';


const initialState:IHobby[] = [];

export function hobbyReducer(state: IHobby[] = initialState, action: mainInfoActions):IHobby[] {
  if (action instanceof GetHobbiesSuccess) {
    return [...state, ...action.hobbies];
  }

  return state;
}
