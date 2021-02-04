import {
  Component, Input, OnInit
} from '@angular/core';
import { ISoftSkill } from '../../../_store/types/mainInfo.type';

@Component({
  selector: 'app-soft-skills',
  templateUrl: './soft-skills.component.html',
  styleUrls: ['./soft-skills.component.scss']
})
export class SoftSkillsComponent implements OnInit {
  @Input() data:ISoftSkill[]
  constructor() { }

  ngOnInit(): void {
  }

}
