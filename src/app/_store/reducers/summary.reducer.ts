
import { GetSummarySuccess, mainInfoActions } from '../actions/profile.action';


export function summaryReducer(state: string = '', action: mainInfoActions):string {
  if (action instanceof GetSummarySuccess) {
    return action.summary;
  }

  return state;
}
