import { Component, Input } from '@angular/core';
import { IHobby } from '../../../_store/types/mainInfo.type';
import {
  faBook, faFileCode, faPlane, faTableTennis
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.scss']
})
export class HobbiesComponent {
  @Input() data:IHobby[]
  public icons={
    Read: faBook,
    Code: faFileCode,
    Travel: faPlane,
    Tennis: faTableTennis
  }
}
