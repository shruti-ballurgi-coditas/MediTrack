import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DialogService } from 'src/app/sevices/dialog.service';

//   prescription: {
//     prescription_id: 9,
//     prescription_image:
//       '/media/prescription_images/Screenshot_2024-09-05_172855_48he5Y5.png',
//     prescription_text:
//       'R\nIlodldne Name\n\n1) TAB. DEMO MEDICINE 1\n\n2) CAP. DEMO MEDICINE 2\n\n3) TAB. DEMO MEDICINE 3\n\n4) TAB. DEMO MEDICINE 4\n\nDosage\n\n1 Morning. 1 Night\n(Before Food)\n\n1 Morning. 1 Night\n(Before Food)\n\n1 Moming. 1M. 1 Eve. 1 Night\n(Aflzr Food)\n\n1/2 Morning. 1/2 Night\n(Aﬁa’ Food)\n\nDuration\n\n10 Days\n(Tot: 20 Tab)\n\n10 Days\n(Tot: 20 Cap)\n\n10 Days\n(Tot:40 Tab)\n\n10 Days\n(Tot: 10 Tab)\n\n',
//   },
//   medication_schedules: [
//     {
//       medication_schedule_id: 21,
//       start_date: null,
//       medicine_name: 'DEMO MEDICINE 1',
//       frequency: 2,
//       dose: '1',
//       description: 'Before Food',
//       duration: null,
//       slots: {
//         slot_1: false,
//         slot_2: false,
//         slot_3: false,
//         slot_4: false,
//         slot_5: false,
//         slot_6: false,
//         slot_7: false,
//         slot_8: false,
//         slot_9: false,
//         slot_10: false,
//         slot_11: false,
//         slot_12: false,
//       },
//     },
//     {
//       medication_schedule_id: 21,
//       start_date: null,
//       medicine_name: 'DEMO MEDICINE 1',
//       frequency: 2,
//       dose: '1',
//       description: 'Before Food',
//       duration: null,
//       slots: {
//         slot_1: false,
//         slot_2: false,
//         slot_3: false,
//         slot_4: false,
//         slot_5: false,
//         slot_6: false,
//         slot_7: false,
//         slot_8: false,
//         slot_9: false,
//         slot_10: false,
//         slot_11: false,
//         slot_12: false,
//       },
//     },
//     {
//       medication_schedule_id: 21,
//       start_date: null,
//       medicine_name: 'DEMO MEDICINE 1',
//       frequency: 2,
//       dose: '1',
//       description: 'Before Food',
//       duration: null,
//       slots: {
//         slot_1: false,
//         slot_2: false,
//         slot_3: false,
//         slot_4: false,
//         slot_5: false,
//         slot_6: false,
//         slot_7: false,
//         slot_8: false,
//         slot_9: false,
//         slot_10: false,
//         slot_11: false,
//         slot_12: false,
//       },
//     },
//     {
//       medication_schedule_id: 22,
//       start_date: null,
//       medicine_name: 'DEMO MEDICINE 2',
//       frequency: 2,
//       dose: '1',
//       description: 'Before Food',
//       duration: null,
//       slots: {
//         slot_1: false,
//         slot_2: false,
//         slot_3: false,
//         slot_4: false,
//         slot_5: false,
//         slot_6: false,
//         slot_7: false,
//         slot_8: false,
//         slot_9: false,
//         slot_10: false,
//         slot_11: false,
//         slot_12: false,
//       },
//     },
//     {
//       medication_schedule_id: 23,
//       start_date: null,
//       medicine_name: 'DEMO MEDICINE 3',
//       frequency: 4,
//       dose: '1',
//       description: 'After Food',
//       duration: null,
//       slots: {
//         slot_1: false,
//         slot_2: false,
//         slot_3: false,
//         slot_4: false,
//         slot_5: false,
//         slot_6: false,
//         slot_7: false,
//         slot_8: false,
//         slot_9: false,
//         slot_10: false,
//         slot_11: false,
//         slot_12: false,
//       },
//     },
//     {
//       medication_schedule_id: 24,
//       start_date: null,
//       medicine_name: 'DEMO MEDICINE 4',
//       frequency: 2,
//       dose: '1/2',
//       description: 'After Food',
//       duration: null,
//       slots: {
//         slot_1: false,
//         slot_2: false,
//         slot_3: false,
//         slot_4: false,
//         slot_5: false,
//         slot_6: false,
//         slot_7: false,
//         slot_8: false,
//         slot_9: false,
//         slot_10: false,
//         slot_11: false,
//         slot_12: false,
//       },
//     },
//   ],
// };
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  constructor(private http: HttpClient,public dialogService: DialogService) {}
  cardData: any;
  selectedImg!: File;
  isUploadBtnClicked: boolean = false;
  fileUploadForm = new FormGroup({
    imgFile: new FormControl([null]),
  });

  fileName: string = '';
  onFileSelected(event: any) {
    
    const file = event.target.files[0];
    if (file) {
      this.selectedImg = file;
      this.fileName = file.name;
    }
  }
  uploadImg() {
    this.isUploadBtnClicked = true;
    const formData = new FormData();
    if (this.fileName) {
      formData.append('image', this.selectedImg, this.selectedImg.name);
    }
    this.http
      .post(
        'http://192.168.101.190:8000/generator/generate-schedule/',
        formData
      )
      .subscribe({
        next: (response: any) => {
          console.log(response);
          this.cardData = response;
          this.fileName = ""
          this.isUploadBtnClicked = false;
        },
        error:(err:Error)=> {
          this.isUploadBtnClicked = false;
        }
      });
  }

  openWarningsDialog() {
      this.dialogService.dialogData = this.cardData.warnings;
      this.dialogService.openDialog({type:"warnings",warningData:this.cardData.warnings});
  }
}
