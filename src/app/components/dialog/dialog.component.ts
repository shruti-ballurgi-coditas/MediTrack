import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/sevices/dialog.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit{
  dialogVisible$ = this.dialogService.dialogVisible$;
  dialogData: any
  dialogVisible!: boolean;

  constructor(public dialogService: DialogService) {}
  ngOnInit(): void {
    this.dialogService.dialogVisible$.subscribe((data: any) => {
      if (data && data['visible']) {
        this.dialogVisible = true;
        this.dialogData = data.dialogData; 
      } else {
        this.dialogVisible = false;
      }
    });
  }

  closeDialog() {
    this.dialogService.closeDialog();
  }
}
