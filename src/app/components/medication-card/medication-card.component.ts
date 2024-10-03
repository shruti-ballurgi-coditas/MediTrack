import { Component, Input, OnInit } from '@angular/core';
import { CommonService } from 'src/app/sevices/common.service';
import { DialogService } from 'src/app/sevices/dialog.service';

@Component({
  selector: 'app-medication-card',
  templateUrl: './medication-card.component.html',
  styleUrls: ['./medication-card.component.scss'],
})
export class MedicationCardComponent implements OnInit {
  constructor(private dialogService: DialogService,private commonService: CommonService) {}
  @Input() data: any;
  sideEffectsData : any;
  schedules=["Morning","Afternoon","Evening","Night"];

  ngOnInit(): void {
    this.commonService.getSideEffectsData().subscribe({
      next:(response:any) =>{
        this.sideEffectsData = response;
      }
    })
  }

  openDialog(data: any) {
    this.dialogService.dialogData = data;

    if(this.sideEffectsData){
      const sideEffects = this.sideEffectsData.medication_schedules.filter((data:any)=>{
        return this.data.medicine_name === data.medicine_name
      })
      this.dialogService.openDialog({type:"medication-card",data:sideEffects});
    }
    // this.dialogService.openDialog({type:"medication-card",data});
  }
}

