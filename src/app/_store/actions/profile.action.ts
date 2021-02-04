import {
  IMainInfo, ISkill, ITimeLine
} from '../types/mainInfo.type';

// ================
export class GetMainInfoPending {
	public readonly type: string = '[Pending] get all information about user';
	public constructor(public userID: string) {}
}
// ================
export class GetMainInfoSuccess {
  public readonly type: string = '[Success] get main info about user';
  public constructor(public info: IMainInfo) {}
}
// ================
export class GetEducationSuccess {
  public readonly type: string = '[Success] get user education';
  public constructor(public education: ITimeLine[]) {}
}
// ================
export class GetJobSuccess {
  public readonly type: string = '[Success] get user job experience';
  public constructor(public job: ITimeLine[]) {}
}
// ================
export class GetSummarySuccess {
  public readonly type: string = '[Success] get summary';
  public constructor(public summary:string) {}
}
// ================
export class GetSkillsSuccess {
  public readonly type: string = '[Success] get skills';
  public constructor(public skills:ISkill[]) {}
}
// ================
export type mainInfoActions =
  GetMainInfoSuccess |
  GetEducationSuccess |
  GetMainInfoPending |
  GetJobSuccess |
  GetSummarySuccess |
  GetSkillsSuccess;
