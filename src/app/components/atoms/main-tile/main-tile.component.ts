import { Component, Input } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-main-tile',
  templateUrl: './main-tile.component.html',
  styleUrls: ['./main-tile.component.scss']
})
export class MainTileComponent {
  @Input()
  icon: IconDefinition;
  @Input()
  name: string;
}
