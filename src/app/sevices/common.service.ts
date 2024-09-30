import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(private http: HttpClient) {}

  uploadImage(formData: any) {
    return this.http.post(
      'http://192.168.101.190:8000/generator/generate-schedule/',
      formData
    );
  }

  getWarningsAndAllergies(data: any) {
    return this.http.post('http://192.168.101.190:8000/generator/d2d-interactions/',data);
  }
}
