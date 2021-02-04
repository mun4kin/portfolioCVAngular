import {
  IHobby,
  ILanguage,
  IMainInfo, ISkill, ISoftSkill, ITimeLine
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
export class GetSoftSkillsSuccess {
  public readonly type: string = '[Success] get soft skills';
  public constructor(public softSkills:ISoftSkill[]) {}
}
// ================
export class GetLanguagesSuccess {
  public readonly type: string = '[Success] get languages';
  public constructor(public languages:ILanguage[]) {}
}
// ================
export class GetHobbiesSuccess {
  public readonly type: string = '[Success] get hobbies';
  public constructor(public hobbies:IHobby[]) {}
}
// ================
export type mainInfoActions =
  GetMainInfoSuccess |
  GetEducationSuccess |
  GetMainInfoPending |
  GetJobSuccess |
  GetSummarySuccess |
  GetSkillsSuccess |
  GetSoftSkillsSuccess |
  GetLanguagesSuccess |
  GetHobbiesSuccess
