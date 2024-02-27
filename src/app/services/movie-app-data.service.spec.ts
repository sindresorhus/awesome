import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MovieAppDataService } from './movie-app-data.service';

describe('MovieAppDataService', () => {
  let service: MovieAppDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(MovieAppDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
