import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IgxIconModule, IgxListModule, IgxButtonModule, IgxRippleModule, IgxAvatarModule, IgxToggleModule, IgxDialogModule, IgxNavbarModule, IgxNavigationDrawerModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { MedicationsComponent } from './medications/medications.component';
import { HealthIndicatorsComponent } from './health-indicators/health-indicators.component';
import { IgxCategoryChartModule } from 'igniteui-angular-charts';
import { AppointmentsComponent } from './appointments/appointments.component';
import { ProfileComponent } from './profile/profile.component';
import { EmergencyComponent } from './emergency/emergency.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MedicationsComponent,
    HealthIndicatorsComponent,
    AppointmentsComponent,
    ProfileComponent,
    EmergencyComponent
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxIconModule,
    IgxListModule,
    IgxButtonModule,
    IgxRippleModule,
    FormsModule,
    IgxCategoryChartModule,
    IgxAvatarModule,
    IgxToggleModule,
    IgxDialogModule,
    IgxNavbarModule,
    IgxNavigationDrawerModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
