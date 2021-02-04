import {
  Component, Input, OnInit
} from '@angular/core';
import { ILanguage } from '../../../_store/types/mainInfo.type';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent implements OnInit {
  @Input() data:ILanguage[]
  constructor() { }

  ngOnInit(): void {
  }

}
