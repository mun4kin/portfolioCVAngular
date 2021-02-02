import { ActionReducerMap } from '@ngrx/store';
import { mainInfoEffects } from './effects/mainInfo.effect';
import { mainInfoReducer } from './reducers/mainInfo.reducer';
import { IMainInfo } from './types/mainInfo.type';

/** Состояние стора*/
export interface IStore {
  mainInfo:IMainInfo
}

/** Текущие редьюсеры*/
export const mainReducer: ActionReducerMap<IStore> = { mainInfo: mainInfoReducer };
export const mainEffect = [mainInfoEffects];
