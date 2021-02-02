import { IMainInfo } from '../types/mainInfo.type';

interface IProfile{
  mainInfo:IMainInfo
}


export const usersMock:IProfile[] = [
  {
    mainInfo: {
      name: 'Anton',
      surname: 'Pugachev',
      position: 'Software Developer (Front End)',
      experience: '6',
      phone: '+7 (916) 111 75 14',
      git: 'https://github.com/mun4kin',
      linkedIn: 'https://linkedin.com/in/anton-pugachev',
      email: 'pugachev.anton.al@gmail.com'
    }
  }
];
