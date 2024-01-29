import { Component } from '@angular/core';
import { AdminLoginServiceService } from '../admin-login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent {

  credentials = {
    username: '',
    password: '',
  };

  constructor(private adminLoginService: AdminLoginServiceService, private router: Router) {}

  onLogin(): void {
    this.adminLoginService.login(this.credentials).subscribe( (response) => {
          console.log('Login successful:', response);
          alert(`Successfully Logged in! Welcome ${this.credentials.username}`);
          this.router.navigate(['/admin']);
        },
        (error) => {
          console.error('Login failed:', error);
          alert("Login Failed!");
        }
      );
  }

}
