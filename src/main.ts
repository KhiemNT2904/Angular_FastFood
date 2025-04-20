import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { StarRatingConfigService } from 'angular-star-rating';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    StarRatingConfigService, // Thêm provider cho StarRatingConfigService
  ],
}).catch((err) => console.error(err));
