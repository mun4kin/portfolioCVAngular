import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { usersMock } from '../mock/profile.mock';
import { IProfile } from '../types/mainInfo.type';


export const getMainInfo = (user:string):Observable<IProfile> =>
  of(usersMock).pipe(map((userMock:IProfile[]) => userMock.find((item:IProfile) => (item.mainInfo.surname === user))));
