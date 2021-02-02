import { IMainInfo } from '../types/mainInfo.type';


export const GET_MAIN_INFO_PENDING = '[Pending] get main info about user';
export const GET_MAIN_INFO_SUCCESS = '[Success] get main info about user';

export class GetMainInfoPending {
	public readonly type: string = GET_MAIN_INFO_PENDING;
	public constructor(public userID: string) {}
}
export class GetMainInfoSuccess {
  public readonly type: string = GET_MAIN_INFO_SUCCESS;
  public constructor(public info: IMainInfo) {}
}


export type mainInfoActions = GetMainInfoPending & GetMainInfoSuccess;
