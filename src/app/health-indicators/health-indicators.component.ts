import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { BPSystolicDiastolicType } from '../models/patient-dashboard/bpsystolic-diastolic-type';
import { TotalCholesterolType } from '../models/patient-dashboard/total-cholesterol-type';
import { CholesterolHDLLDLType } from '../models/patient-dashboard/cholesterol-hdlldltype';
import { GlucoseType } from '../models/patient-dashboard/glucose-type';
import { HeartRateType } from '../models/patient-dashboard/heart-rate-type';
import { WeightType } from '../models/patient-dashboard/weight-type';
import { PatientDashboardService } from '../services/patient-dashboard.service';

@Component({
  selector: 'app-health-indicators',
  templateUrl: './health-indicators.component.html',
  styleUrls: ['./health-indicators.component.scss']
})
export class HealthIndicatorsComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public patientDashboardWeight: WeightType[] = [];
  public patientDashboardHeartRate: HeartRateType[] = [];
  public patientDashboardBPSystolicDiastolic: BPSystolicDiastolicType[] = [];
  public patientDashboardGlucose: GlucoseType[] = [];
  public patientDashboardTotalCholesterol: TotalCholesterolType[] = [];
  public patientDashboardCholesterolHDLLDL: CholesterolHDLLDLType[] = [];

  constructor(
    private patientDashboardService: PatientDashboardService,
  ) {}

  ngOnInit() {
    this.patientDashboardService.getWeightList().pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.patientDashboardWeight = data,
      error: (_err: any) => this.patientDashboardWeight = []
    });
    this.patientDashboardService.getHeartRateList().pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.patientDashboardHeartRate = data,
      error: (_err: any) => this.patientDashboardHeartRate = []
    });
    this.patientDashboardService.getBPSystolicDiastolicList().pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.patientDashboardBPSystolicDiastolic = data,
      error: (_err: any) => this.patientDashboardBPSystolicDiastolic = []
    });
    this.patientDashboardService.getGlucoseList().pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.patientDashboardGlucose = data,
      error: (_err: any) => this.patientDashboardGlucose = []
    });
    this.patientDashboardService.getTotalCholesterolList().pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.patientDashboardTotalCholesterol = data,
      error: (_err: any) => this.patientDashboardTotalCholesterol = []
    });
    this.patientDashboardService.getCholesterolHDLLDLList().pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.patientDashboardCholesterolHDLLDL = data,
      error: (_err: any) => this.patientDashboardCholesterolHDLLDL = []
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
