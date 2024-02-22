import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencyComponent } from './emergency.component';

describe('EmergencyComponent', () => {
  let component: EmergencyComponent;
  let fixture: ComponentFixture<EmergencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmergencyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmergencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
