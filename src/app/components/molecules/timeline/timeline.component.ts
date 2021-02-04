import { Component, Input } from '@angular/core';
import { ITimeLine } from '../../../_store/types/mainInfo.type';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent {
  @Input() data:ITimeLine[];


}
