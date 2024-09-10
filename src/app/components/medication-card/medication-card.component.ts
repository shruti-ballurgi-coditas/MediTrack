import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-medication-card',
  templateUrl: './medication-card.component.html',
  styleUrls: ['./medication-card.component.scss']
})
export class MedicationCardComponent {
 @Input() data : any;
}
