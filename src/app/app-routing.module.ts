import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { ErrorRoutingModule } from './error-routing/error-routing.module';
import { MoviesComponent } from './movies/movies.component';
import { MovieComplexComponent } from './movie-complex/movie-complex.component';
import { MyPurchasesComponent } from './my-purchases/my-purchases.component';

export const routes: Routes = [
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'movies', component: MoviesComponent, data: { text: 'Movies' } },
  { path: 'movie-complex', component: MovieComplexComponent, data: { text: 'Movie Complex' } },
  { path: 'my-purchases', component: MyPurchasesComponent, data: { text: 'My Purchases' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true }), ErrorRoutingModule],
  exports: [RouterModule, ErrorRoutingModule]
})
export class AppRoutingModule {
}
