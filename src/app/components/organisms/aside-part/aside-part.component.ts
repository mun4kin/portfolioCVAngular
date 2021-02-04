import { Component } from '@angular/core';
import { faTasks } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { IStore } from '../../../_store';
import { Observable } from 'rxjs';
import { ISkill } from '../../../_store/types/mainInfo.type';
@Component({
  selector: 'app-aside-part',
  templateUrl: './aside-part.component.html',
  styleUrls: ['./aside-part.component.scss']
})
export class AsidePartComponent {
public faTasks=faTasks
  public skills$:Observable<ISkill[]>
  constructor( private store: Store<IStore>) {
    this.skills$ = store.select('skills');
  }
}
