
import { ISkill } from '../types/mainInfo.type';
import { GetSkillsSuccess, mainInfoActions } from '../actions/profile.action';


const initialState:ISkill[] = [];

export function skillReducer(state: ISkill[] = initialState, action: mainInfoActions):ISkill[] {
  if (action instanceof GetSkillsSuccess) {
    return [...state, ...action.skills];
  }

  return state;
}
