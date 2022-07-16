import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web-ui';

  constructor(private router: Router) {

    
  }

  navigateToRequest(): void {
    this.router.navigate(['req']);
  }

  navigateToList(): void {
    this.router.navigate(['list'])
  }

  navigateToAdvanced(): void {
    this.router.navigate(['advanced'])
  }
}
