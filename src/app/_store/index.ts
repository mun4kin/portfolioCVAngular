import { ActionReducerMap } from '@ngrx/store';
import { mainInfoEffects } from './effects/profile.effect';
import { educationReducer } from './reducers/education.reducer';
import { jobReducer } from './reducers/job.reducer';
import { mainInfoReducer } from './reducers/mainInfo.reducer';
import {
  IHobby, ILanguage,
  IMainInfo, ISkill, ISoftSkill, ITimeLine
} from './types/mainInfo.type';
import { summaryReducer } from './reducers/summary.reducer';
import { skillReducer } from './reducers/skill.reducer';
import { softSkillReducer } from './reducers/softSkill.reducer';
import { hobbyReducer } from './reducers/hobby.reducer';
import { languageReducer } from './reducers/language.reducer';

/** current store*/
export interface IStore {
  mainInfo:IMainInfo,
  education:ITimeLine[],
  job:ITimeLine[],
  summary:string,
  skills:ISkill[],
  softSkills:ISoftSkill[],
  hobbies:IHobby[],
  languages:ILanguage[]
}

/** current reducers*/
export const mainReducer: ActionReducerMap<IStore> = {
  mainInfo: mainInfoReducer,
  education: educationReducer,
  job: jobReducer,
  summary: summaryReducer,
  skills: skillReducer,
  softSkills: softSkillReducer,
  hobbies: hobbyReducer,
  languages: languageReducer
};
export const mainEffect = [mainInfoEffects];
