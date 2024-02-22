import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { ErrorRoutingModule } from './error-routing/error-routing.module';
import { HomeComponent } from './home/home.component';
import { MedicationsComponent } from './medications/medications.component';
import { HealthIndicatorsComponent } from './health-indicators/health-indicators.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { ProfileComponent } from './profile/profile.component';
import { EmergencyComponent } from './emergency/emergency.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'home', component: HomeComponent, data: { text: 'Home' } },
  { path: 'medications', component: MedicationsComponent, data: { text: 'Medications' } },
  { path: 'health-indicators', component: HealthIndicatorsComponent, data: { text: 'Health Indicators' } },
  { path: 'appointments', component: AppointmentsComponent, data: { text: 'Appointments' } },
  { path: 'profile', component: ProfileComponent, data: { text: 'Profile' } },
  { path: 'emergency', component: EmergencyComponent, data: { text: 'Emergency' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true }), ErrorRoutingModule],
  exports: [RouterModule, ErrorRoutingModule]
})
export class AppRoutingModule {
}
