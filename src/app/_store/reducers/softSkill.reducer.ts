
import { ISoftSkill } from '../types/mainInfo.type';
import { GetSoftSkillsSuccess, mainInfoActions } from '../actions/profile.action';


const initialState:ISoftSkill[] = [];

export function softSkillReducer(state: ISoftSkill[] = initialState, action: mainInfoActions):ISoftSkill[] {
  if (action instanceof GetSoftSkillsSuccess) {
    return [...state, ...action.softSkills];
  }

  return state;
}
