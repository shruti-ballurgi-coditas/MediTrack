import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  private apiUrl = "http://192.168.101.190:8000";

  constructor(private http: HttpClient) {}

  uploadImage(formData: FormData): Observable<any> {
    return this.http.post(
      `${this.apiUrl}/generator/generate-schedule/`,
      formData
    );
  }

  getWarningsAndAllergies(data: any): Observable<any> {
    console.log(data,"data");
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<any>(
      `${this.apiUrl}/generator/d2d-interactions/`,
      { medications: data},
      { headers }
    );
  }

  getSideEffects(data: any): Observable<any> {
    console.log(data,"data");
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<any>(
      `${this.apiUrl}/generator/side-effects/`,
      { medications: data},
      { headers }
    );
  }


  sideEffectsData = new BehaviorSubject<any>({});

  setSideEffectsData(data: any) {
    this.sideEffectsData.next(data);
  }

  getSideEffectsData() {
    return this.sideEffectsData.asObservable();
  }


}