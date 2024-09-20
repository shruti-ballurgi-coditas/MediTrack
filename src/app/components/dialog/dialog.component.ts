import { Component } from '@angular/core';
import { DialogService } from 'src/app/sevices/dialog.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  dialogVisible$ = this.dialogService.dialogVisible$;

  constructor(private dialogService: DialogService) {}

  closeDialog() {
    this.dialogService.closeDialog();
  }
}
