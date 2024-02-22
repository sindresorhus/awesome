import { ErrorHandler, NgModule, Provider } from '@angular/core';
import { environment } from '../../environments/environment';
import { GlobalErrorHandlerService } from './error/global-error-handler.service';
import { UncaughtErrorComponent } from './error/uncaught-error.component';
import { PageNotFoundComponent } from './not-found/not-found.component';

const providers: Provider[] = [];

if (environment.production) {
  // register prod error handler
  providers.push({ provide: ErrorHandler, useClass: GlobalErrorHandlerService });
}

@NgModule({
  declarations: [
    PageNotFoundComponent,
    UncaughtErrorComponent
  ],
  providers
})
export class ErrorRoutingModule { }
