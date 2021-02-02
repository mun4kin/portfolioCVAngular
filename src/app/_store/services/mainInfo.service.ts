import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { usersMock } from '../mock/user.mock';
import { IMainInfo } from '../types/mainInfo.type';


export const getMainInfo = (user:string):Observable<IMainInfo> =>
  of(usersMock).pipe(map((userMock) => {

    return userMock.find((item) => (item.mainInfo.surname === user)).mainInfo;
  }));
