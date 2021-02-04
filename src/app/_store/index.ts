import { ActionReducerMap } from '@ngrx/store';
import { mainInfoEffects } from './effects/profile.effect';
import { educationReducer } from './reducers/education.reducer';
import { jobReducer } from './reducers/job.reducer';
import { mainInfoReducer } from './reducers/mainInfo.reducer';
import {
  IMainInfo, ISkill, ITimeLine
} from './types/mainInfo.type';
import { summaryReducer } from './reducers/summary.reducer';
import { skillReducer } from './reducers/skill.reducer';

/** current store*/
export interface IStore {
  mainInfo:IMainInfo,
  education:ITimeLine[],
  job:ITimeLine[],
  summary:string,
  skills:ISkill[]
}

/** current reducers*/
export const mainReducer: ActionReducerMap<IStore> = {
  mainInfo: mainInfoReducer,
  education: educationReducer,
  job: jobReducer,
  summary: summaryReducer,
  skills: skillReducer

};
export const mainEffect = [mainInfoEffects];
