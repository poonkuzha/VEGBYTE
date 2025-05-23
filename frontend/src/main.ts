import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter, Routes } from '@angular/router';

import { AppComponent } from './app/app.component';

import { FoodComponent } from './app/food/food.component';

// ✅ Define routes
const routes: Routes = [
  // Default route
  { path: 'food', component: FoodComponent } // Example route
];

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes) // ✅ Pass routes correctly
  ]
}).catch(err => console.error('❌ Bootstrap failed:', err));