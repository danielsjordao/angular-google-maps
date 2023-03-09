import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-google-map></app-google-map>,
  <router-outlet></router-outlet>
  `
  
})
export class AppComponent {
  title = 'Angular14GoogleMap';
}
