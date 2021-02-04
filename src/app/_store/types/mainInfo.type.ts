export interface IMainInfo{
  name:string;
  surname:string;
  position:string;
  experience:string;
  phone:string;
  git:string;
  linkedIn:string;
  email:string;
}
interface IAchievement{
  name: string;
}
export interface ITimeLine{
  beginDate: string;
  endDate: string;
  place: string;
  paramName: string;
  imageId: string;
  achievements?:IAchievement[]
}
export interface ISkill {
  icon?: string;
  name: string;
  rating: number;
  image?: string;
  color?:string;
}
export interface IProfile{
  mainInfo:IMainInfo;
  education:ITimeLine[];
  job:ITimeLine[];
  summary:string;
  skills:ISkill[]
}
