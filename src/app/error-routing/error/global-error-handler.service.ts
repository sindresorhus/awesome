import { ErrorHandler, Injectable, Injector, NgZone } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class GlobalErrorHandlerService implements ErrorHandler {

  constructor(private injector: Injector, private zone: NgZone) { }

  handleError(error: any) {
    // handle and/or log error, for example:
    console.error(error);

    // show error page
    const router = this.injector.get(Router);
    if (router) {
      this.zone.run(() => {
        router
          .navigate(['error'])
          .catch((err: any) => console.error(err));
      });
    }
  }
}
