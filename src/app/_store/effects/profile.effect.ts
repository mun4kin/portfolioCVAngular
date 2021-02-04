import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import {
  filter,
  mergeMap, switchMap,
} from 'rxjs/operators';

import {
  GetMainInfoPending, GetMainInfoSuccess, mainInfoActions, GetEducationSuccess, GetJobSuccess, GetSummarySuccess, GetSkillsSuccess
} from '../actions/profile.action';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { getMainInfo } from '../services/profile.service';
import { IProfile } from '../types/mainInfo.type';
// ===============================================================================================================
 @Injectable({ providedIn: 'root' })
export class mainInfoEffects {
  @Effect()
  profile$: Observable<Action> = this.actions$.pipe(
    filter((i:mainInfoActions) => i instanceof GetMainInfoPending),
    switchMap((act: GetMainInfoPending) => getMainInfo(act.userID).pipe(mergeMap((data:IProfile) =>
      [
        new GetMainInfoSuccess(data.mainInfo),
        new GetEducationSuccess(data.education),
        new GetJobSuccess(data.job),
        new GetSummarySuccess(data.summary),
        new GetSkillsSuccess(data.skills)
      ])))
  );

  constructor(private actions$: Actions<mainInfoActions>) {}
}
