import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BPSystolicDiastolicType } from '../models/patient-dashboard/bpsystolic-diastolic-type';
import { CholesterolHDLLDLType } from '../models/patient-dashboard/cholesterol-hdlldltype';
import { GlucoseType } from '../models/patient-dashboard/glucose-type';
import { HeartRateType } from '../models/patient-dashboard/heart-rate-type';
import { TotalCholesterolType } from '../models/patient-dashboard/total-cholesterol-type';
import { WeightType } from '../models/patient-dashboard/weight-type';

@Injectable({
  providedIn: 'root'
})
export class PatientDashboardService {
  constructor(
    private http: HttpClient
  ) { }

  public getWeightList(): Observable<WeightType[]> {
    return this.http.get<WeightType[]>("https://excel2json.io/api/share/b8fb8833-7e2c-4a84-e611-08daf8ae6744");
  }

  public getHeartRateList(): Observable<HeartRateType[]> {
    return this.http.get<HeartRateType[]>("https://excel2json.io/api/share/43cfd6ae-a6db-42b5-e610-08daf8ae6744");
  }

  public getBPSystolicDiastolicList(): Observable<BPSystolicDiastolicType[]> {
    return this.http.get<BPSystolicDiastolicType[]>("https://excel2json.io/api/share/16761321-7913-4d05-e616-08daf8ae6744");
  }

  public getGlucoseList(): Observable<GlucoseType[]> {
    return this.http.get<GlucoseType[]>("https://excel2json.io/api/share/e1b52986-0c42-4ee1-e617-08daf8ae6744");
  }

  public getTotalCholesterolList(): Observable<TotalCholesterolType[]> {
    return this.http.get<TotalCholesterolType[]>("https://excel2json.io/api/share/2f36bf07-125a-4301-e612-08daf8ae6744");
  }

  public getCholesterolHDLLDLList(): Observable<CholesterolHDLLDLType[]> {
    return this.http.get<CholesterolHDLLDLType[]>("https://excel2json.io/api/share/a1863711-3edb-42ae-e613-08daf8ae6744");
  }
}
