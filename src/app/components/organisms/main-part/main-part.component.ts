import { Component } from '@angular/core';
import {
  faBriefcase, faUniversity, faUserCheck
} from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { IStore } from '../../../_store';
import { Observable } from 'rxjs';
import { ITimeLine } from '../../../_store/types/mainInfo.type';
@Component({
  selector: 'app-main-part',
  templateUrl: './main-part.component.html',
  styleUrls: ['./main-part.component.scss']
})
export class MainPartComponent {
  public faBriefcase=faBriefcase
  public faUniversity=faUniversity
  public faUserCheck=faUserCheck
  public jobData:Observable<ITimeLine[]>
  public education:Observable<ITimeLine[]>
  public summary:Observable<string>
  // ===================
  constructor( private store: Store<IStore>) {
    this.jobData = store.select('job');
    this.education = store.select('education');
    this.summary = store.select('summary');
  }
}
