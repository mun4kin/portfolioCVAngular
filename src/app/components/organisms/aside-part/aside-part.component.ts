import { Component } from '@angular/core';
import {
  faTasks, faFootballBall, faGlobeEurope, faUser
} from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { IStore } from '../../../_store';
import { Observable } from 'rxjs';
import {
  IHobby, ILanguage, ISkill, ISoftSkill
} from '../../../_store/types/mainInfo.type';

@Component({
  selector: 'app-aside-part',
  templateUrl: './aside-part.component.html',
  styleUrls: ['./aside-part.component.scss']
})
export class AsidePartComponent {
  public faTasks = faTasks;
  public faFootballBall = faFootballBall
  public faGlobeEurope = faGlobeEurope
  public faUser = faUser

  public skills$: Observable<ISkill[]>
  public softSkils$: Observable<ISoftSkill[]>
  public hobbies$: Observable<IHobby[]>
  public languages$: Observable<ILanguage[]>

  constructor(private store: Store<IStore>) {
    this.skills$ = store.select('skills');
    this.softSkils$ = store.select('softSkills');
    this.hobbies$ = store.select('hobbies');
    this.languages$ = store.select('languages');

  }
}
