import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IStore } from './_store';
import { GetMainInfoPending } from './_store/actions/profile.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor( private store: Store<IStore>) {
  }
  ngOnInit():void {
    this.store.dispatch(new GetMainInfoPending('Pugachev'));
  }
}
