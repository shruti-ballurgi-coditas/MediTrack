import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor() { }
  public dialogData: any
  private dialogVisibleSubject = new BehaviorSubject({});
  dialogVisible$ = this.dialogVisibleSubject.asObservable();

  openDialog(data: any) {
    this.dialogData = data;
    this.dialogVisibleSubject.next({"visible":true,"dialogData":data});
  }

  closeDialog() {
    this.dialogVisibleSubject.next({"visible": false});
  }
}
