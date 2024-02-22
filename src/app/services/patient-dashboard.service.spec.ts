import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { PatientDashboardService } from './patient-dashboard.service';

describe('PatientDashboardService', () => {
  let service: PatientDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(PatientDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
