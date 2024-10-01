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
  isSideEffectsVisible: boolean = false;
  isHideEffectsVisible: boolean = true;

  constructor(public dialogService: DialogService) {}
  ngOnInit(): void {

    this.dialogService.dialogVisible$.subscribe((data: any) => {
      console.log(data)
      if (data && data['visible']) {
        this.dialogVisible = true;
        this.dialogData = data.dialogData; 
      } else {
        this.dialogVisible = false;
      }
    });
  }

  showSideEffects(data: any){
    let buttonVisibilty = data.target.innerText;
   
    if(buttonVisibilty === "Show Side-Effects"){
      this.isSideEffectsVisible = false;
      this.isHideEffectsVisible = true;
    }
    if(buttonVisibilty === "Hide Side-Effects"){
      this.isSideEffectsVisible = true;
      this.isHideEffectsVisible = false;
    }
  }

  closeDialog() {
    this.isSideEffectsVisible = false;
    this.isHideEffectsVisible = true;
    this.dialogService.closeDialog();
  }
}
