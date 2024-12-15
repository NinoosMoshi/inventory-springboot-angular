
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ApiService } from './service/api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'inventory-ui';

 
  constructor(
    private apiService: ApiService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  

  isAuth() {
    return this.apiService.isAuthenticated();
  }

  isAdmin() {
    return this.apiService.isAdmin();
  }

  logOut() {
    this.apiService.logout();
    this.router.navigate(['/login']);
    this.cdr.detectChanges();
  }

}
