import { Component, OnInit } from '@angular/core';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IStore } from 'src/app/_store';
import { IMainInfo } from '../../../_store/types/mainInfo.type';
@Component({
  selector: 'app-header-part',
  templateUrl: './header-part.component.html',
  styleUrls: ['./header-part.component.scss']
})

export class HeaderPartComponent implements OnInit {
  // --------icons-----------
  faEnvelope=faEnvelope;
  faPhone=faPhone;
  faLinkedin=faLinkedin;
  faGithub=faGithub
  // ------------------------
  public mainInfo$:Observable<IMainInfo>
  // ++++++++++++++++++++++++
  constructor( private store: Store<IStore>) {
    this.mainInfo$ = store.select('mainInfo');
  }

  ngOnInit(): void {
  }

}
