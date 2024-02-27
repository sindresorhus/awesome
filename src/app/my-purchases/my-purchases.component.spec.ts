import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IgxListModule, IgxButtonModule, IgxRippleModule, IgxIconModule } from 'igniteui-angular';
import { MyPurchasesComponent } from './my-purchases.component';

describe('MyPurchasesComponent', () => {
  let component: MyPurchasesComponent;
  let fixture: ComponentFixture<MyPurchasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPurchasesComponent ],
      imports: [ NoopAnimationsModule, FormsModule, HttpClientTestingModule, IgxListModule, IgxButtonModule, IgxRippleModule, IgxIconModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPurchasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
