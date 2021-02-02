import { Injectable } from '@angular/core';
import {
  Actions, Effect, ofType
} from '@ngrx/effects';
import { switchMap, map, } from 'rxjs/operators';

import {
  GET_MAIN_INFO_PENDING, GetMainInfoSuccess, mainInfoActions, GetMainInfoPending
} from '../actions/mainInfo.action';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';

import { getMainInfo } from '../services/mainInfo.service';
@Injectable({ providedIn: 'root' })
export class mainInfoEffects {

  @Effect()
  mainInfo$: Observable<Action> = this.actions$.pipe(

    ofType(GET_MAIN_INFO_PENDING),
    switchMap((act:GetMainInfoPending) => {
      return getMainInfo(act.userID).pipe(map(info => new GetMainInfoSuccess(info)));
    })
  )


  constructor(private actions$: Actions<mainInfoActions>,) {}
}
