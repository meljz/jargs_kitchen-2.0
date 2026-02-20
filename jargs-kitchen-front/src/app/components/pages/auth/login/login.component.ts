import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../../services/auth.service'; // adjust path if needed
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  loginUser() {
    const credentials = {
      email: this.email,
      password: this.password,
    };

    this.authService.login(credentials).subscribe({
      next: (res) => {
        console.log('Login success:', res);
        alert('Login successful!');
        this.authService.saveToken(res.token);
        this.router.navigate(['/dashboard']); // redirect after login
      },
      error: (err) => {
        alert('Login failed!');
        console.error('Login failed:', err);
      },
    });
  }
}
