import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DialogService } from 'src/app/sevices/dialog.service';
import { CommonService } from 'src/app/sevices/common.service';

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
  constructor(
    public dialogService: DialogService,
    private commonService: CommonService
  ) {}
  cardData: any;
  // cardData:any={
  //   "medication_schedules": [
  //       {
  //           "start_date": "2023-08-30",
  //           "medicine_name": "TAB. ABCIXIMAB",
  //           "frequency": 1,
  //           "dosage": "1 tablet",
  //           "schedule": [
  //               {
  //                   "time": "08:00",
  //                   "slot": {
  //                       "start": "08:00",
  //                       "end": "10:00"
  //                   }
  //               }
  //           ],
  //           "description": "Take in the morning for 8 days",
  //           "side_effects": [
  //               "Bleeding",
  //               "Blurred vision",
  //               "Confusion",
  //               "Dizziness",
  //               "Back pain",
  //               "Bruising or bleeding"
  //           ]
  //       },
  //       {
  //           "start_date": "2023-08-30",
  //           "medicine_name": "TAB. VOMILAST",
  //           "frequency": 2,
  //           "dosage": "1 tablet",
  //           "schedule": [
  //               {
  //                   "time": "08:00",
  //                   "slot": {
  //                       "start": "08:00",
  //                       "end": "10:00"
  //                   }
  //               },
  //               {
  //                   "time": "20:00",
  //                   "slot": {
  //                       "start": "20:00",
  //                       "end": "22:00"
  //                   }
  //               }
  //           ],
  //           "description": "Take in the morning and at night after food for 8 days",
  //           "side_effects": [
  //               "Dryness in mouth",
  //               "Constipation",
  //               "Lightheadedness",
  //               "Dizziness",
  //               "Sleepiness",
  //               "Fatigue"
  //           ]
  //       },
  //     ]};
  warningsData :any;
  allergiesData :any;
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
    this.cardData = null;
    const formData = new FormData();
    if (this.fileName) {
      formData.append('image', this.selectedImg, this.selectedImg.name);
    }
    this.commonService.uploadImage(formData).subscribe({
      next: (response: any) => {
        this.cardData = response;
        this.isUploadBtnClicked = false;
        if(this.cardData) {
          this.commonService.getWarningsAndAllergies(this.cardData).subscribe({
            next: (response: any) => {
              const data = response;
              this.allergiesData= data['drug-allergy-warnings'];
              this.warningsData= data['response.d2d-warnings'];
              console.log(response,"allergies")
            },
            error: (err: Error) => {
              console.error('Error fetching warnings and allergies:', err);
            }
          })
        }
      },
      error: (err: Error) => {
        this.isUploadBtnClicked = false;
        console.error('Error uploading image:', err);
      },
    });
  }

  openWarningsDialog() {
    // this.dialogService.dialogData = this.cardData.warnings;
    this.dialogService.openDialog({
      type: 'warnings',
      // warningData: this.warningsData,
      warningData: [
        {
            "drug_names": [
                "TAB. ABCIXIMAB",
                "TAB. VOMILAST"
            ],
            "warning": "Bleeding risk increased",
            "description": "Abciximab in TAB. ABCIXIMAB and Doxylamine in TAB. VOMILAST may increase the risk of bleeding.",
            "reason": "Pharmacodynamic interaction",
            "severity": "High"
        },
        {
            "drug_names": [
                "TAB. ABCIXIMAB",
                "CAP. ZOCLAR 500"
            ],
            "warning": "Risk of bleeding and gastrointestinal toxicity",
            "description": "Abciximab in TAB. ABCIXIMAB and Zoclar in CAP. ZOCLAR 500 may increase the risk of bleeding and gastrointestinal toxicity.",
            "reason": "Pharmacodynamic interaction",
            "severity": "High"
        },
        {
            "drug_names": [
                "TAB. VOMILAST",
                "TAB. GESTAKIND 10/SR"
            ],
            "warning": "Increased risk of dizziness and lightheadedness",
            "description": "Doxylamine in TAB. VOMILAST and unknown content in TAB. GESTAKIND 10/SR may increase the risk of dizziness and lightheadedness.",
            "reason": "Pharmacodynamic interaction",
            "severity": "Medium"
        }
    ],
    });
  }

  openAllergiesDialog() {
    // this.dialogService.dialogData = this.cardData.warnings;
    this.dialogService.openDialog({
      type: 'allergies',
      // warningData: this.allergiesData,
      warningData: [
        {
            "patient_allergy_name": "Mouse Proteins",
            "drug_names": [
                "TAB. ABCIXIMAB"
            ],
            "warning": "Allergic reaction risk",
            "description": "Abciximab in TAB. ABCIXIMAB is derived from mouse proteins and may cause an allergic reaction.",
            "reason": "Hypersensitivity reaction",
            "severity": "High"
        }
    ],
    });
  }
}
