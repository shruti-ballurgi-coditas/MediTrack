import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-warnings-card',
  templateUrl: './warnings-card.component.html',
  styleUrls: ['./warnings-card.component.scss']
})
export class WarningsCardComponent {
  @Input() data: any;
}
