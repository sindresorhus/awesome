import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieComplexComponent } from './movie-complex.component';

describe('MovieComplexComponent', () => {
  let component: MovieComplexComponent;
  let fixture: ComponentFixture<MovieComplexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieComplexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovieComplexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
