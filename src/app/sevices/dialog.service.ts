import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor() { }

  private dialogVisibleSubject = new BehaviorSubject<boolean>(false);
  dialogVisible$ = this.dialogVisibleSubject.asObservable();

  openDialog() {
    this.dialogVisibleSubject.next(true);
  }

  closeDialog() {
    this.dialogVisibleSubject.next(false);
  }
}
