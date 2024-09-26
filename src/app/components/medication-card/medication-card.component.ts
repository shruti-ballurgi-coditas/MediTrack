import { Component, Input } from '@angular/core';
import { DialogService } from 'src/app/sevices/dialog.service';

@Component({
  selector: 'app-medication-card',
  templateUrl: './medication-card.component.html',
  styleUrls: ['./medication-card.component.scss'],
})
export class MedicationCardComponent {
  constructor(private dialogService: DialogService) {}
  @Input() data: any;

  openDialog(data: any) {
    this.dialogService.dialogData = data;
    this.dialogService.openDialog({type:"medication-card",data});
  }
}

