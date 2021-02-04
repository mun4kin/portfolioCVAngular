import { Component, Input } from '@angular/core';

import {
  faReact, faAngular, faHtml5, faNodeJs, faGithub, faCss3Alt, faJs
} from '@fortawesome/free-brands-svg-icons';
import { ISkill } from '../../../_store/types/mainInfo.type';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  @Input() data:ISkill[]
  public icons={
    react: faReact,
    angular: faAngular,
    nodeJS: faNodeJs,
    git: faGithub,
    HTML: faHtml5,
    CSS: faCss3Alt,
    javaScript: faJs
  }
}
